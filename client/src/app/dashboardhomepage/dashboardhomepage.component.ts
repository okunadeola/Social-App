import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MemoristserviceService } from '../service/memoristservice.service';

interface Post{
  title: String,
  message: String,
  tags: any,
  selectedFile: String,
  _id : null,
  likes:any,
  username:String,
  name:String,
  creator: any

}
@Component({
  selector: 'app-dashboardhomepage',
  templateUrl: './dashboardhomepage.component.html',
  styleUrls: ['./dashboardhomepage.component.scss']
})

 
export class DashboardhomepageComponent implements OnInit {
  public creator:String ='';
  public title: String ='';
  public message: String ='';
  public likes : Array<String> = [];
  public tags: any;
  public selectedFile:any;
  public formData : FormGroup = this.form.group({})
  public fileConverter:any = null;
  public memoryCatalogue: Array<Post> = []
  public isEditing : boolean = false
  public currentId : any
  public data: any
  constructor(public backend: MemoristserviceService, public form: FormBuilder) { }


  ngOnInit(): void {
    let store :any= localStorage.getItem("profile")
    this.data  = JSON.parse(store).result
    
    

    this.backend.getPost().subscribe((data:any)=>{
      try {
        this.memoryCatalogue = data
      } catch (error) {
        console.log(error);
      } 
    })
    
    this.formData = this.form.group({
      title: ['', [Validators.minLength(8), Validators.required]],
      message: ['', [Validators.required]],
      tags: ['', [Validators.required]],
      selectedFile: [''],
    });

  
  }


  get f(){
    return this.formData.controls
  }

  create(){ 
    if (this.fileConverter && this.title && this.message && this.tags) {

      if (!this.isEditing) {
        // creating post
        
        const tag = this.tags.split(",")
        const data :any= {title:this.title, message: this.message, tags:tag, selectedFile:this.fileConverter, name:this.data.name}
        this.backend.createPost(data).subscribe((information:any)=>{
          this.memoryCatalogue.push(information)
        })
      }else{
        // editing post
        
        const tag = this.tags.toString().split(",")
        let editedPost :any={title:this.title, message: this.message, tags:tag, selectedFile:this.fileConverter, name:this.data.name}
        this.backend.editPost(this.currentId, editedPost).subscribe((data:any)=>{
          
          let newArray :any = this.memoryCatalogue.map((post)=>{
            if (post._id === data._id) {
              return data
            }else{
              return post
            }
          })
          this.memoryCatalogue= newArray
          
        })
      }
    }
  }

  deletePost(id :any){
    this.backend.deletePost(id).subscribe(data=>{
      this.memoryCatalogue = this.memoryCatalogue.filter((post:any)=> post._id !== id)  
    })
    
  }

  editPost(id:any){
    this.isEditing = true
    this.currentId = id
    let editedPost:any = this.memoryCatalogue.find((post:any)=>post._id === this.currentId)
    this.fileConverter = editedPost.selectedFile
    this.title = editedPost.title
    this.message = editedPost.message
    this.tags= editedPost.tags
   
  }

  // like and reseting the incoming data
  likePost(id:any){
    this.backend.likePost(id).subscribe((data:any)=>{
      let newArray :any = this.memoryCatalogue.map((post)=>{
        if (post._id === data._id) {
          return data
        }else{
          return post
        }
      })
      this.memoryCatalogue= newArray
      
    })
  }


  // converting file to base64 url
  file(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.fileConverter = reader.result;
    };
}




















}

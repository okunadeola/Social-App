import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
// import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemoristserviceService {

  constructor(public http: HttpClient) { }
  public url = 'http://localhost:7000/posts'
 
  getPost(){
    return this.http.get(this.url)
  }
  createPost(post: any){
    return this.http.post(this.url, post)
  }
  editPost(id:any, post:any){
    return this.http.patch(`${this.url}/${id}`, post)
  }
  deletePost(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
  likePost(id:any){
    return this.http.patch(`${this.url}/${id}/likePost`, null)
  }








}

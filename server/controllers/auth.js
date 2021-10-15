import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import User from '../models/auth.js'



export const signin = async (req, res) => {
  const { email, password } = req.body
  try {
    const existingUser = await User.findOne({ email })
    if (!existingUser) return res.status(404).json({ message: "User does't exist." })
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
    if (!isPasswordCorrect) return res.status(400).json({ message: 'invalid credentials' })
    const token = await jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: '1d' })

    res.status(200).json({ result: existingUser, token })
  } catch (error) {
    res.status(500).json({ message: 'something went wrong' })
  }


}
export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstname, lastname, username } = req.body
  try {
    const existingUser = await User.findOne({ email })
    if (existingUser) return res.status(400).json({ message: "User already exist." })

    if (password !== confirmPassword) return res.status(400).send({ message: "password don't match" })

    const hashedPassword = await bcrypt.hash(password, 12)
    const result = await User.create({ email, password: hashedPassword, username, name: `${lastname} ${firstname}` })

    const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: '1d' })

    res.status(200).json({ result, token })
  } catch (error) {
    res.status(500).json({ message: 'something went wrong' })
  }
}


export const changeProfile = async(req, res)=>{
  const {id} = req.params
  const person = req.body
  try {
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send({message: `id is invalid ${id}`})
  const updateData = await User.findByIdAndUpdate(id, person, {new:true})

  res.status(200).json(updateData)
  } catch (error) {
    res.status(500).json({ message: 'something went wrong' })
  }
  
}
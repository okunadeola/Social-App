import express from 'express'
import {signin, signup, changeProfile} from '../controllers/auth.js'

const router = express.Router()

router.post('/signin', signin)
router.post('/signup', signup)
router.patch('/:id/changeProfile', changeProfile)


export default router
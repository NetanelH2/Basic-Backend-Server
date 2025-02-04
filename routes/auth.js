import {Router} from 'express'
import User from '../models/users.js'
import {authValidation} from '../validation/auth.js'
import sanitizeDataRequest from '../utils/sanitize.js'
import Auth from '../models/auth.js'

const router = Router()

router.post('/register', async (req, res) => {
  req.body = sanitizeDataRequest(req.body)
  const {error} = authValidation(req.body)
  if (error) return res.status(400).json({message: error.details[0]})
  try {
    const existingUser = await User.findOne({email: req.body.email})
    if (existingUser)
      return res.status(409).json({message: 'User already registered'})
    const newUser = await User.create(req.body)
    return res.status(201).json({message: 'User created', user: newUser})
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
})

export default router

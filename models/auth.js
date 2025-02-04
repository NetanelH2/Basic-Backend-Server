import mongoose from 'mongoose'

const authSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      lowercase: true,
      unique: true,
      minlength: 5,
      maxlength: 50,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 1024, // Hashed password length
    },
  },
  {timestamps: true},
)

const Auth = mongoose.model('Auth', authSchema)

export default Auth

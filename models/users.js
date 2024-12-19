import mongoose from 'mongoose'

const addressSchema = new mongoose.Schema(
  {
    country_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Country',
    },
    city_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'City',
    },
    street_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Street',
    },
  },
  {_id: false},
)

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
      minlength: 2,
      maxlength: 20,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
      minlength: 2,
      maxlength: 20,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      lowercase: true,
      unique: true,
      minlength: 2,
      maxlength: 20,
    },
    address: addressSchema,
  },
  {timestamps: true},
)

const User = mongoose.model('User', userSchema)

export default User
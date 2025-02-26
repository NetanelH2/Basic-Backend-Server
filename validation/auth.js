import Joi from 'joi'

export const authValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(255).required(),
})

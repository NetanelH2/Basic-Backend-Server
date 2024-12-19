import Joi from 'joi'

const addressValidation = Joi.object({
  country_id: Joi.string().length(24).required(),
  city_id: Joi.string().length(24).required(),
  street_id: Joi.string().length(24).required(),
})

export const createUserValidation = Joi.object({
  firstName: Joi.string().min(3).max(20).required(),
  lastName: Joi.string().min(3).max(20).required(),
  email: Joi.string().email().required(),
  address: addressValidation,
})

export const updateUserValidation = Joi.object({
  firstName: Joi.string().min(3).max(20).optional(),
  lastName: Joi.string().min(3).max(20).optional(),
  email: Joi.string().email().optional(),
  address: addressValidation,
})

export const checkUserByIdValidation = Joi.object({
  id: Joi.string().length(24).required(),
})

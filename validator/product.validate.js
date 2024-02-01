const Joi = require("joi");

const productSchema = Joi.object({
  title: Joi.string().required(),
  price: Joi.number().required(),
  quantity: Joi.number().required(),
  thumbnail: Joi.string().required(),
  images: Joi.array().items(Joi.string()).required(),
  short_description: Joi.string().required(),
  long_description: Joi.string(),
  rating: Joi.number().default(0),
  user: Joi.string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .required(),
  review: Joi.array().items(Joi.string().pattern(/^[0-9a-fA-F]{24}$/)),
  category: Joi.string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .required(),
});

const productUpdateSchema = Joi.object({
  title: Joi.string(),
  price: Joi.number(),
  quantity: Joi.number(),
  thumbnail: Joi.string(),
  images: Joi.array().items(Joi.string()),
  short_description: Joi.string(),
  long_description: Joi.string(),
});

module.exports = { productSchema, productUpdateSchema };

const Joi = require('joi');

const createProductSchema = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'Product name is required',
        'string.empty': 'Product name cannot be empty',
    }),
    description: Joi.string().allow(null, ''), // Allow null or empty string
    price: Joi.number().precision(2).min(0).required().messages({
        'any.required': 'Price is required',
        'number.base': 'Price must be a number',
        'number.precision': 'Price must have at most 2 decimal places',
        'number.min': 'Price cannot be negative',
    }),
    categoryId: Joi.number().integer().allow(null).messages({
        'number.base': 'Category ID must be a number',
        'number.integer': 'Category ID must be an integer',
    }),
});

const updateProductSchema = Joi.object({
    name: Joi.string().messages({
        'string.empty': 'Product name cannot be empty',
    }),
    description: Joi.string().allow(null, ''),
    price: Joi.number().precision(2).min(0).messages({
        'number.base': 'Price must be a number',
        'number.precision': 'Price must have at most 2 decimal places',
        'number.min': 'Price cannot be negative',
    }),
    categoryId: Joi.number().integer().allow(null).messages({
        'number.base': 'Category ID must be a number',
        'number.integer': 'Category ID must be an integer',
    }),
});

module.exports = { createProductSchema, updateProductSchema };

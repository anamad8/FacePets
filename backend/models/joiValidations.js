const Joi = require('joi')
const validateRequest = require('../middlewares/validateRequest')

const validateUser = (req,res,next) =>{
    const schema = Joi.object({
        name: Joi.string().min(2).max(100).required()
        .messages({
            'string.empty': "Ingresa el Nombre  del Usuario",
            'string.min': "El nombre del Usuario debe ser mayor a 5 caracteres",
            'any.required': "Ingresa el Nombre  del Usuario"
        }),
        petName:Joi.string().min(2).max(100).required()
        .messages({
            'string.empty': "Ingresa el Nombre de su mascota",
            'string.min': "El largo del nombre debe ser mayor a 5 caracteres",
            'any.required': "Ingresa el Nombre de su Mascota"
        }),
        email: Joi.string().email().required()
            .messages({
                'string.empty': "Ingresa el email",
                'any.required': "Ingresa el email"
            }),
        password: Joi.string().min(3).max(20).required()
        .messages({
            'string.min': "La contraseña debe ser mayor a 3 caracteres",
            'string.max': "La contraseña debe ser menor a 20 caracteres",
            'any.required': "Ingresa una contraseña"
        }),
        petAge: Joi.number().required()
        .messages({
            'any.required': "Ingresa la edad de su Mascota"
        }),
        gender: Joi.number().required()
        .messages({
            'any.required': "Ingresa el genero de su mascota"
        })
    });
    validateRequest(req, res, next, schema)
}
const validatePost = (req,res,next) =>{
    const schema = Joi.object({
        title: Joi.string().min(5).max(100).required()
        .messages({
            'string.empty': "Ingresa el titulo del Post",
            'string.min': "El titulo del post debe ser mayor a 5 caracteres",
            'any.required': "Ingresa el titulo del post"
        }),
        description:Joi.string().required()
        .messages({
            'string.empty': "Ingresa la descripcion del Post",
            'any.required': "Ingresa la descripcion del Post"
        })
    });
    validateRequest(req, res, next, schema)
}

const validateComment = (req,res,next) =>{
    const schema = Joi.object({
        description:Joi.string().required()
        .messages({
            'string.empty': "Ingresa la descripcion del Comment",
            'any.required': "Ingresa la descripcion del  Comment"
        })
    });
    validateRequest(req, res, next, schema)
}
module.exports ={
    validateUser,
    validatePost,
    validateComment
}

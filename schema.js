const Joi = require('joi');

module.exports.clubSchema = Joi.object({
    club : Joi.object({
        title : Joi.string().required(),
        description : Joi.string().required(),
        location: Joi.string().required(),
        head : Joi.string().required(),
        image : Joi.string().allow("",null)
    }).required()
});

module.exports.registerSchema = Joi.object({
    register: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        phone: Joi.string().required(),
        event: Joi.string().required(),
    }).required()
})
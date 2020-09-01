const { celebrate, Joi, Segments } = require('celebrate');


module.exports = {
    create: celebrate ({
        [Segments.BODY]: Joi.object().keys({
            fristName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required()
        })        
    })
    
}
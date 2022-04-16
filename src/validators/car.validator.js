import joi from "joi";

const carValidator = joi.object({
    model: joi.string().min(2).max(20).required().messages({
        'string.empty': 'Model не може бути пустим',
        'string.min': 'Model має буті мінімум 2 символи'
    }),
    prise: joi.number().min(0).max(1000000).required(),
    year: joi.number().min(1990).max(new Date().getFullYear()).required()
});

export {
    carValidator
}
import * as Joi from 'joi';

export const TestSchema = Joi
    .object()
    .keys({
        pregunta: Joi
            .string()
            .alphanum()
            .min(3)
            .max(1000)
            .required(),
        respuesta: Joi
            .string()
            .alphanum()
            .min(3)
            .max(2500)
            .required(),

    });
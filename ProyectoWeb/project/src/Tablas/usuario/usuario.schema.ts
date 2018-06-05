import * as Joi from 'joi';

export const USUARIO_SCHEMA = Joi
    .object()
    .keys({
        nombre: Joi
            .string()
            .alphanum()
            .min(3)
            .max(60)
            .required(),
        edad: Joi
            .number()
            .integer()
            .greater(0)
            .less(150),
        correo: Joi
            .string()
            .min(15)
            .max(100)
            .require(),
        contraseña: Joi
            .number()
            .min(5)
            .max(10)
            .interger
            .require()
    });

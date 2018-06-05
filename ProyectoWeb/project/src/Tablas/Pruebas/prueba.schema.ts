import * as Joi from 'joi';

export const TestSchema = Joi
    .object()
    .keys({
        fecha: Joi
            .date()
            .required(),


    });
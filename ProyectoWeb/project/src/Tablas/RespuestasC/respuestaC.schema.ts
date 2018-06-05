import * as Joi from 'joi';

export const RespuestaCSchema = Joi
    .object()
    .keys({
        resultado: Joi
            .number()
            .interger()
            .greater(0)
            .less(10)
            .required(),

    });
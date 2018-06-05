import * as Joi from 'joi';

export const APLICACION_SCHEMA = Joi.object().keys({
    aplicacionId: Joi.number().integer().required(),
    pesoEnGigas: Joi.number().required(),
    version: Joi.number().required(),
    nombre: Joi.string().max(30).required(),
    urlDeDescarga: Joi.string().required(),
    fechaLanzamiento: Joi.string().required(),
    costo: Joi.number().required(),
    sistemaOperactivoId: Joi.number().optional(),

});
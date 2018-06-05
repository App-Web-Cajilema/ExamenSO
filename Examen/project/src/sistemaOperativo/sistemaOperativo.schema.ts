import * as Joi from 'joi';

export const SISTEMAOPERATIVO_SCHEMA = Joi.object().keys({
    sistemaOperativoId: Joi.number().integer().required(),
    nombre: Joi.string().max(30).required(),
    versionApi: Joi.number().required(),
    fechaLanzamiento: Joi.string().required(),
    pesoEnGigas: Joi.number().required(),
    instalado: Joi.boolean().required(),

});

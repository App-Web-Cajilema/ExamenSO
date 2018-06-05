import * as Joi from 'joi';

export const EQUIPOFUTBOL_SCHEMA = Joi.object().keys({
    equipoFutbolId: Joi.number().integer(),
    nombre: Joi.string().alphanum().min(3).max(30).required(),
    liga: Joi.string().alphanum().min(3).max(30).required(),
    fechaCreacion: Joi.date().max('04-06-2018').required(),
    numeroCopasInternacionales: Joi.number().integer().optional(),
    campeonActual: Joi.boolean().required(),
});
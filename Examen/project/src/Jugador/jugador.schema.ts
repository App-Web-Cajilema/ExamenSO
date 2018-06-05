import * as Joi from 'joi';

export const JUGADOR_SCHEMA = Joi.object().keys({
    idJugador: Joi.number().integer(),
    numeroCamiseta: Joi.number().integer().required(),
    nombreCamiseta: Joi.string().max(10).required(),
    nombreCompletoJugador: Joi.string().min(3).max(30).required(),
    poderEspecialDos: Joi.string().min(3).max(10).required(),
    fechaIngresoEquipo: Joi.date().max('04-06-2018').required(),
    goles: Joi.number().integer().optional(),
    equipoFutbolId: Joi.number().integer().optional(),
});
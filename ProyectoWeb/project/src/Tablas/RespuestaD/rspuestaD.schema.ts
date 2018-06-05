import * as Joi from 'joi';
import {UsuarioEntity} from "../usuario/usuario.entity";
import {ManyToOne} from "typeorm";
import {TestEntity} from "../Test/test.entity";

export const RespuestaDSchema = Joi
    .object()
    .keys({
        calificacion: Joi
            .boolean()
            .required(),

    });

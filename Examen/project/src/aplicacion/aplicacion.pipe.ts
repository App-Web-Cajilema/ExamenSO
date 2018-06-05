import {ArgumentMetadata, Injectable} from '@nestjs/common';
import * as Joi from 'joi';
import {PeticionInvalidaException} from '../exceptions/peticionInvalida.exception';
import {NoEncontradoException} from "../exceptions/noEncontrado.exception";

@Injectable()
export class AplicacionPipe {
    constructor(private readonly _schema) {

    }

    transform(jsonAValidar: any, metadata: ArgumentMetadata) {
        const {
            error
        }
            = Joi.validate(jsonAValidar, this._schema);
        const {
            errorNotFound
        }
            = Joi.validate(jsonAValidar, this._schema);
        if (error) {
            throw new PeticionInvalidaException(
                'Petición Inválida',
                error,
                10)
        }
        if (errorNotFound) {
            throw  new NoEncontradoException(
                'No encontrado',
                errorNotFound,
                3
            )
        }
        else {
            return jsonAValidar;
        }
    }
}
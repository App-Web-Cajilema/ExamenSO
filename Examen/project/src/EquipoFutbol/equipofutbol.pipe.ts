import {ArgumentMetadata, Injectable} from '@nestjs/common';
import * as Joi from 'joi';
import {PeticionErroneaException} from '../excepciones/peticion-erronea.exception';
import {PeticionNotfoundException} from "../excepciones/peticion-notfound.exception";

@Injectable()
export class EquipofutbolPipe {
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
            throw new PeticionErroneaException(
                'Petición Inválida',
                error,
                10)
        }
        if (errorNotFound) {
            throw  new PeticionNotfoundException(
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
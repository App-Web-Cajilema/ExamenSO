import {ArgumentMetadata, Injectable} from '@nestjs/common';
import * as Joi from 'joi';
import {NotfoundException} from "../excepciones/notfound.exception";
import {BadRequestException} from "../excepciones/badRequest.exception";

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
            throw new BadRequestException(
                'Petición Inválida',
                error,
                10)
        }
        if (errorNotFound) {
            throw  new NotfoundException(
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
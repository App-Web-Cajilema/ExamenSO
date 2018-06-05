import {Body, Controller, Post, Req, Res} from "@nestjs/common";

import {error} from "util";
import {BadRequestException} from "../excepciones/badRequest.exception";


@Controller('Autorizacion')
export class AutorizacionController{

    usuario = {
        usuario: 'katherinecajilema',
        password: 12345678910,
    };


    @Post('iniciarSesion')
    iniciarSesion(@Req() request,
                  @Res() response, @Body("usuario") usuario:string,
    @Body("password") password:number){
        const parametros = {
            nombreCookie: 'token',
            valorCookie: this.usuario.usuario,
        };
        if(usuario==this.usuario.usuario&&password==this.usuario.password){
            response.cookie(parametros.nombreCookie, parametros.valorCookie);
            return response.send({
                parametros,
                mensaje: 'ok'
            })

        } else {
            throw new BadRequestException(
                'No se puede iniciar Sesion, datos de ingreso invalidos',
                error,
                10)

        }

    }

    @Post('cerrarSesion')
    cerrarSesion(@Req() request,
                 @Res() response){
        const parametros = {
            nombreCookie: 'token',
            valorCookie: undefined,
        };
        const existeCookie = request.cookies[parametros.nombreCookie];
        if (existeCookie) {
            response.cookie(parametros.nombreCookie, parametros.valorCookie)
            return response.send({
                mensaje: 'Usted Salio del sistema'
            })
        } else {
            return response
                .status(404)
                .send({
                    mensaje: 'No encontramos cookie'
                })
        }
    }
}
import {Body, Controller, Get, Param, Post, Put, Req, Res, UsePipes} from '@nestjs/common';
import {AplicacionService} from './aplicacion.service';
import {AplicacionPipe} from './aplicacion.pipe';
import {APLICACION_SCHEMA} from './aplicacion.schema';
import {error} from "util";
import {NotfoundException} from "../excepciones/notfound.exception";
import {BadRequestException} from "../excepciones/badRequest.exception";

@Controller('Aplicacion')
export class AplicacionController{

    constructor(private _aplicacionservice: AplicacionService) {
    }

    @Get("listarTodos")
    mostrarAplicacion(@Res() response) {
        const app = this._aplicacionservice.mostrarAplicacion();
        return response.send(app);
    }

    @UsePipes(new AplicacionPipe(APLICACION_SCHEMA))
    @Post('crearAplicacion')
    crearAplicacion(@Body(new AplicacionPipe(APLICACION_SCHEMA))
                        nuevaApp) {
        const appNueva = this._aplicacionservice.crearAplicacion(nuevaApp);
        if (appNueva) {

            return nuevaApp;

        } else {
            throw new BadRequestException(
                'Petición Inválida, los datos ingresados no son suficientes',
                error,
                10
            )
        }

    }

    @Get(':id')
    obtenerUno(@Param() id, @Req() request,
               @Res() response) {
        const app = this._aplicacionservice.obtenerUno(id.id);
        if (app) {
            return response.send(app);
        }
        else {
            throw  new NotfoundException(
                'Id No encontrado',
                error,
                10
            )
        }


    }

    @Put(':id')
    editarUno(@Param() id, @Body() updateApp, @Req() request,
              @Res() response) {
        const update = this._aplicacionservice.editarUno(id.id, updateApp.pesoEnGigas, updateApp.version, updateApp.nombre,
            updateApp.urlDescarga, updateApp.fechaLanzamiento, updateApp.costo, updateApp.aplicacionId);
        if (update) {
            return response.send(update);
        } else {
            throw  new NotfoundException(
                'Id No encontrado',
                error,
                10
            )
        }


    }

}
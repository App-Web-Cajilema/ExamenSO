import {Body, Controller, Get, Param, Post, Put, Req, Res, UsePipes} from '@nestjs/common';
import {JugadorService} from './jugador.service';
import {JugadorPipe} from './jugador.pipe';
import {JUGADOR_SCHEMA} from './jugador.schema';
import {error} from "util";
import {PeticionErroneaException} from "../excepciones/peticion-erronea.exception";
import {PeticionNotfoundException} from "../excepciones/peticion-notfound.exception";

@Controller('Jugador')
export class JugadorController {

    constructor(private _jugadorservice: JugadorService) {
    }

    @Get("listarTodos")
    mostrarjugador(@Res() response) {
        const jug = this._jugadorservice.mostrar_jugador();
        return response.send(jug);
    }

    @UsePipes(new JugadorPipe(JUGADOR_SCHEMA))
    @Post('crearJugadores')
    crearjugador(@Body(new JugadorPipe(JUGADOR_SCHEMA))
                     nuevojug) {
        const jugNuevo = this._jugadorservice.crear_jugador(nuevojug);
        if (jugNuevo) {

            return nuevojug;

        } else {
            throw new PeticionErroneaException(
                'Petición Inválida, los datos ingresados no son suficientes',
                error,
                10
            )
        }

    }

    @Get(':id')
    obtenerUno(@Param() id, @Req() request,
               @Res() response) {
        const jug = this._jugadorservice.obtenerUno(id.id);
        if (jug) {
            return response.send(jug);
        }
        else {
            throw  new PeticionNotfoundException(
                'Id No encontrado',
                error,
                10
            )
        }


    }

    @Put(':id')
    editarUno(@Param() id, @Body() updateJuga, @Req() request,
              @Res() response) {
        const update = this._jugadorservice.editarUno(id.id, updateJuga.numeroCamiseta, updateJuga.nombreCamiseta, updateJuga.nombreCompletoJugador,
            updateJuga.poderEspecialDos, updateJuga.fechaIngresoEquipo, updateJuga.goles, updateJuga.equipoFutbolId);
        if (update) {
            return response.send(update);
        } else {
            throw  new PeticionNotfoundException(
                'Id No encontrado',
                error,
                10
            )
        }


    }

}
import {Body, Controller, Get, Param, Post, Put, Req, Res, UsePipes} from '@nestjs/common';
import {EquipofutbolService} from './equipofutbol.service';
import {EquipofutbolPipe} from './equipofutbol.pipe';
import {EQUIPOFUTBOL_SCHEMA} from './equipofutbol.schema';
import {PeticionErroneaException} from "../excepciones/peticion-erronea.exception";
import {error} from "util";
import {PeticionNotfoundException} from "../excepciones/peticion-notfound.exception";

@Controller('Equipo')
export class EquipofutbolController {

    constructor(private _equipofutbolservice: EquipofutbolService) {

    }

    @Get('listarTodos')
    mostrarEquiposFut(
        @Res() response
    ) {
        const sistemas_operativos = this._equipofutbolservice.mostrarEquiposFut();
        return response.send(sistemas_operativos);
    }

    @UsePipes(new EquipofutbolPipe(EQUIPOFUTBOL_SCHEMA))
    @Post('crearEquipos')
    // @ReflectMetadata('permisos', ['privado'])

    crearEquiposFut(
        @Body(new EquipofutbolPipe(EQUIPOFUTBOL_SCHEMA))
            nuevoEquipo
    ) {

        const EquipoCreado = this._equipofutbolservice.crearEquiposFut(nuevoEquipo);
        if (EquipoCreado) {
            return nuevoEquipo;
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
        const eqp = this._equipofutbolservice.obtenerUno(id.id);
        if (eqp) {
            return response.send(eqp);
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
    editarUno(@Param() id, @Body() updateEquipo, @Req() request,
              @Res() response) {
        const update = this._equipofutbolservice.editarUno(id.id, updateEquipo.nombre, updateEquipo.liga, updateEquipo.fechaCreacion, updateEquipo.numeroCopasInternacionales, updateEquipo.campeonActual);
        if (update) {
            return response.send(update);
        }
        else {
            throw  new PeticionNotfoundException(
                'Id No encontrado',
                error,
                10
            )
        }


    }


}



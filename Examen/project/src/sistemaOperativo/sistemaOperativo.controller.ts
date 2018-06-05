import {Body, Controller, Get, Param, Post, Put, Req, Res, UsePipes} from '@nestjs/common';
import {SistemOperativoService} from './sistemOperativo.service';
import {SistemaOperativoPipe} from './sistemaOperativo.pipe';
import {SISTEMAOPERATIVO_SCHEMA} from './sistemaOperativo.schema';
import {PeticionInvalidaException} from "../exceptions/peticionInvalida.exception";
import {error} from "util";
import {NoEncontradoException} from "../exceptions/noEncontrado.exception";

@Controller('SistemaOperativo')
export class SistemOperativoController {

    constructor(private _sistemaOperativoService: SistemOperativoService) {

    }

    @Get('listarTodos')
    mostrarSistemasOperativos(
        @Res() response
    ) {
        const sistemas_operativos = this._sistemaOperativoService.mostrarSistemasOperativos();
        return response.send(sistemas_operativos);
    }

    @UsePipes(new SistemaOperativoPipe(SISTEMAOPERATIVO_SCHEMA))
    @Post('crearSistemasOperativos')
    // @ReflectMetadata('permisos', ['privado'])
    crearSistemasOperativos(
        @Body(new SistemaOperativoPipe(SISTEMAOPERATIVO_SCHEMA))
            nuevoSistemaOperativo
    ) {

        const SistemaOperativoCreado = this._sistemaOperativoService.crearSistemasOperativos(nuevoSistemaOperativo);
        if (SistemaOperativoCreado) {
            return nuevoSistemaOperativo;
        } else {
            throw new PeticionInvalidaException (
                'Petición Inválida, los datos ingresados no son suficientes',
                error,
                10
            )
        }

    }

    @Get(':id')
    obtenerUno(@Param() id, @Req() request,
               @Res() response) {
        const eqp = this._sistemaOperativoService.obtenerUno(id.id);
        if (eqp) {
            return response.send(eqp);
        }
        else {
            throw  new NoEncontradoException(
                'Id No encontrado',
                error,
                10
            )
        }


    }

    @Put(':id')
    editarUno(@Param() id, @Body() updateSistemaOperativo, @Req() request,
              @Res() response) {
        const update = this._sistemaOperativoService.editarUno(id.id, updateSistemaOperativo.nombre, updateSistemaOperativo.versionApi, updateSistemaOperativo.fechaLanzamiento, updateSistemaOperativo.pesoEnGigas, updateSistemaOperativo.instalado);
        if (update) {
            return response.send(update);
        }
        else {
            throw  new NoEncontradoException(
                'Id No encontrado',
                error,
                10
            )
        }


    }


}
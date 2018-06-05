import {Injectable} from '@nestjs/common';

@Injectable()
export class SistemOperativoService {
    sistemas_operativos: SistemasOperativos[] = [];

    crearSistemasOperativos(sistemas_operativos: SistemasOperativos): SistemasOperativos[] {
        this.sistemas_operativos.push(sistemas_operativos);
        return this.sistemas_operativos;
    }

    mostrarSistemasOperativos(): SistemasOperativos[] {
        return this.sistemas_operativos;
    }

    obtenerUno(id) {
        return this.sistemas_operativos[id - 1];
    }

    editarUno(id, nombre, versionApi, fechaLanzamiento, pesoEnGigas, instalado) {
        let arregloAux = this.obtenerUno(id);
        arregloAux.nombre = nombre;
        arregloAux.vesrionApi= versionApi;
        arregloAux.fechaLanzamiento = fechaLanzamiento;
        arregloAux.pesoEnGigas = pesoEnGigas;
        arregloAux.instalado = instalado;
        return arregloAux;
    };


}

export class SistemasOperativos {
    constructor(
        public idSistemOperativo: number,
        public nombre:string,
        public vesrionApi:number,
        public fechaLanzamiento:string,
        public pesoEnGigas: number,
        public instalado: boolean,
    ) {

    }

}
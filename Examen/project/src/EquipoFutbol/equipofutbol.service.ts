import {Injectable} from '@nestjs/common';

@Injectable()
export class EquipofutbolService {
    equipos_futbol: EquiposFutbol[] = [];

    crearEquiposFut(equipos_futbol: EquiposFutbol): EquiposFutbol[] {
        this.equipos_futbol.push(equipos_futbol);
        return this.equipos_futbol;
    }

    mostrarEquiposFut(): EquiposFutbol[] {
        return this.equipos_futbol;
    }

    obtenerUno(id) {
        return this.equipos_futbol[id - 1];
    }

    editarUno(id, nombre, liga, fechaCreacion, numeroCopasInternacionales, campeonActual) {
        let arregloAux = this.obtenerUno(id);
        arregloAux.nombre = nombre;
            arregloAux.liga = liga;
            arregloAux.fechaCreacion = fechaCreacion;
            arregloAux.numeroCopasInternacionales = numeroCopasInternacionales;
            arregloAux.campeonActual = campeonActual;
        return arregloAux;
    };


}

export class EquiposFutbol {
    constructor(
        public equipoFutbolId: number,
        public nombre: string,
        public liga: string,
        public fechaCreacion: Date,
        public numeroCopasInternacionales: number,
        public campeonActual: boolean,
    ) {

    }

}



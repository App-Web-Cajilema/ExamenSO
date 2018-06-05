import {Injectable} from '@nestjs/common';

@Injectable()
export class JugadorService {
    jugadores: Jugadores [] = [];

    crear_jugador(jugador: Jugadores): Jugadores[] {
        this.jugadores.push(jugador);
        return this.jugadores;
    }

    mostrar_jugador(): Jugadores [] {
        return this.jugadores;
    }

    obtenerUno(id) {
        return this.jugadores[id - 1];
    }

    editarUno(id, numcamiseta, nomcamiseta, nombreCompleto, poderEspecial, fechaIngreso, goles, equipoFutbolId) {
        let arregloAux = this.obtenerUno(id);
        arregloAux.numeroCamiseta = numcamiseta;
        arregloAux.nombreCamiseta = nomcamiseta;
        arregloAux.nombreCompletoJugador = nombreCompleto;
        arregloAux.poderEspecialDos = poderEspecial;
        arregloAux.fechaIngresoEquipo = fechaIngreso;
        arregloAux.goles = goles;
        arregloAux.equipoFutbolId = equipoFutbolId;
        return arregloAux;
    };

}

export class Jugadores {
    constructor(
        public idJugador: number,
        public numeroCamiseta: number,
        public nombreCamiseta: string,
        public nombreCompletoJugador: string,
        public poderEspecialDos: string,
        public fechaIngresoEquipo: Date,
        public goles: number,
        public equipoFutbolId: number) {

    }
}
import {Injectable} from "@nestjs/common";

@Injectable()
export class AplicacionService {
    aplicaciones: Apliaciones[] = [];

    crearAplicacion(aplicacion: Apliaciones): Apliaciones[] {
        this.aplicaciones.push(aplicacion);
        return this.aplicaciones;
    }

    mostrarAplicacion(): Apliaciones[] {
        return this.aplicaciones;
    }

    obtenerUno(id) {
        return this.aplicaciones[id - 1];
    }

    editarUno(id, pesoEnGigas, version, nombre, urlDescarga,fechaLanzamiento, costo, sistemaOperativoId) {
        let arregloAux = this.obtenerUno(id);
        arregloAux.pesoEnGigas = pesoEnGigas;
        arregloAux.version= version;
        arregloAux.nombre = nombre;
        arregloAux.urlDescarga = urlDescarga;
        arregloAux.fechaLanzamiento = fechaLanzamiento;
        arregloAux.costo = costo;
        arregloAux.sistemaOperativoId = sistemaOperativoId;
        return arregloAux;
    };

}

export class Apliaciones {
    constructor(
        public aplicacionId: number,
        public pesoEnGigas: number,
        public version:number,
        public nombre:string,
        public urlDescarga: string,
        public fechaLanzamiento: string,
        public costo: number,
        public sistemaOperativoId: number,
    ) {

    }

}
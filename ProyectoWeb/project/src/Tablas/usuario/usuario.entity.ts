import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

import {RespuestaCEntity} from "../RespuestasC/respuestaC.entity";

@Entity('Usuario')
export class UsuarioEntity {



    @PrimaryGeneratedColumn()
    idusuario: number;

    @Column({length: 50})
    nombre: string;

    @OneToMany(
        type => RespuestaCEntity,
        respuestaCEntity => respuestaCEntity.usuario)
    resultadoC: RespuestaCEntity[];


}
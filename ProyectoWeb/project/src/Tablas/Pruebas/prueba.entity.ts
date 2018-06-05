import {Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {RespuestaDEntity} from "../RespuestaD/respuestaD.entity";
import {TestEntity} from "../Test/test.entity";
import {RespuestaCEntity} from "../RespuestasC/respuestaC.entity";


@Entity('Prueba')
export class PruebaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('date')
    fecha: string

    @ManyToOne(
        type => RespuestaCEntity,
        respuestaCEntity => respuestaCEntity.prueba)
    rspuestaC:RespuestaCEntity

    usuario: UsuarioEntity;
    @OneToOne(type => TestEntity)
    @JoinColumn()
    testT: TestEntity;
}
import {Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {RespuestaCEntity} from "../RespuestasC/respuestaC.entity";
import {TestEntity} from "../Test/test.entity";


@Entity('RespustaDetalle')
export class RespuestaDEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column('number')
    calificacion: boolean

    @ManyToOne(
        type => TestEntity,
        testEntity => testEntity.resulD)
    testPR:TestEntity



}
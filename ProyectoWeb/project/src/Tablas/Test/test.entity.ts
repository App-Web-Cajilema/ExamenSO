import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

import {RespuestaDEntity} from "../RespuestaD/respuestaD.entity";

@Entity('Test')
export class TestEntity {


    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 1000})
    pregunta: string;

    @OneToMany(
        type => RespuestaDEntity,
        respuestaDEntity => respuestaDEntity.testPR)
    resulD: RespuestaDEntity[];


}
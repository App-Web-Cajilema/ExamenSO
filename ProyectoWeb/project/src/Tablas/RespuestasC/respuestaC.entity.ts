import {Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {RespuestaDEntity} from "../RespuestaD/respuestaD.entity";
import {PruebaEntity} from "../Pruebas/prueba.entity";


@Entity('RespustaCabecera')
export class RespuestaCEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('number')
    resultado: number

    @ManyToOne(
        type => UsuarioEntity,
        usuarioEntity => usuarioEntity.resultadoC)
        uuario:UsuarioEntity

    usuario: UsuarioEntity;
    @OneToOne(type => RespuestaDEntity)
    @JoinColumn()
    respuestaD: RespuestaDEntity;

    @OneToMany(
        type => PruebaEntity,
        pruebaEntity => pruebaEntity.rspuestaC)
    prueba: PruebaEntity[];
}
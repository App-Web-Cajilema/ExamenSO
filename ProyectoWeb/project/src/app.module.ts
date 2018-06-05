import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./Tablas/usuario/usuario.entity";
import {RespuestasCEntity} from "./Tablas/RespuestasC/respuestaC.entity";
import {RespuestaDEntity} from "./Tablas/RespuestaD/respuestaD.entity";
import {TestEntity} from "./Tablas/Test/test.entity";
import {PruebaEntity} from "./Tablas/Pruebas/prueba.entity";

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'proyectowebkmysql.mysql.database.azure.com',
          port: 3306,
          username: 'Kath@proyectowebkmysql',
          password: 'Kate1230',
          database: 'proyecto',
          entities: [
              __dirname +
              '/../**/*.entity{.ts,.js}'
          ],
          synchronize: true,
          ssl: true
      }),
      TypeOrmModule.forFeature([
          UsuarioEntity,RespuestaDEntity,
          TestEntity,PruebaEntity,RespuestasCEntity
      ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EquipofutbolController} from './EquipoFutbol/equipofutbol.controller';
import {EquipofutbolService} from './EquipoFutbol/equipofutbol.service';
import {JugadorService} from './Jugador/jugador.service';
import {JugadorController} from './Jugador/jugador.controller';
import {AutorizacionController} from "./Autorizacion/autorizacion.controller";

@Module({
  imports: [],
  controllers: [AppController, EquipofutbolController,JugadorController, AutorizacionController],
  providers: [AppService, EquipofutbolService,JugadorService],
})
export class AppModule {}

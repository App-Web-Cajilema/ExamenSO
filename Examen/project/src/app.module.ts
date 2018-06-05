import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
;
import {AutorizacionController} from "./Autorizacion/autorizacion.controller";
import {AplicacionController} from "./aplicacion/aplicacion.controller";
import {AplicacionService} from "./aplicacion/aplicacion.service";

import {SistemaOperativoService} from "./sistemaOperativo/sistemaOperativo.service";
import {SistemaOperativoController} from "./sistemaOperativo/sistemaOperativo.controller";

@Module({
  imports: [],
  controllers: [AppController, SistemaOperativoController,AplicacionController, AutorizacionController],
  providers: [AppService, SistemaOperativoService,AplicacionService],
})
export class AppModule {}

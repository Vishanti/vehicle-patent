import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';
import { PatentsModule } from './patents/patents.module';
import { APIInvoke } from './util/http.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    PatentsModule,
    HttpModule
],
  controllers: [AppController],
  providers: [AppService, APIInvoke],
})
export class AppModule { }

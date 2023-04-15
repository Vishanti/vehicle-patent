import { Module } from '@nestjs/common';
import { PatentsService } from './patents.service';
import { PatentsController } from './patents.controller';
import { APIInvoke } from 'src/util/http.service';
import { ConfigService } from '@nestjs/config';
import { HttpModule, HttpService } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [PatentsController],
  providers: [PatentsService, APIInvoke, ConfigService]
})
export class PatentsModule { }

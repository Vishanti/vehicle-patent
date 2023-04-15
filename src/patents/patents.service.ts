import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { APIInvoke } from 'src/util/http.service';
import { AxiosResponse } from 'axios';
import { CreatePatentDto } from './dto/create-patent.dto';
import { UpdatePatentDto } from './dto/update-patent.dto';
var plate = require('patentes-chile')

@Injectable()
export class PatentsService {


  constructor(
    private httpService: APIInvoke,
    private configService: ConfigService,
  ) { }

  // async controller(request: GetPatentRequestEntities): Promise<any> {
  //   let getCentrosResponse = '';
  //   let getPatentRequestEntities = new GetPatentRequestEntities();
  //   await this.httpService
  //     .get(
  //       `${this.configService.get<string>('msCentros.endpoint')}?_id=${request._id}`,
  //     )
  //     .then((res: AxiosResponse<any>) => {
  //       getCentrosResponse = res.data;
  //     })
  //     .catch((error) => {
  //       return error.response
  //     });
  //   return getCentrosResponse;
  // }

  create(createPatentDto: CreatePatentDto) {
    return 'This action adds a new patent';
  }

  findAll() {
    plate.verify('KGGW48').then(value => console.log(value));
    return `This action returns all patents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patent`;
  }

  update(id: number, updatePatentDto: UpdatePatentDto) {
    return `This action updates a #${id} patent`;
  }

  remove(id: number) {
    return `This action removes a #${id} patent`;
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PatentsService } from './patents.service';
import { CreatePatentDto } from './dto/create-patent.dto';
import { UpdatePatentDto } from './dto/update-patent.dto';

@Controller('patents')
export class PatentsController {
  constructor(private readonly patentsService: PatentsService) {}

  @Post()
  create(@Body() createPatentDto: CreatePatentDto) {
    return this.patentsService.create(createPatentDto);
  }

  @Get()
  findAll() {
    return this.patentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatentDto: UpdatePatentDto) {
    return this.patentsService.update(+id, updatePatentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patentsService.remove(+id);
  }
}

import { Test, TestingModule } from '@nestjs/testing';
import { PatentsController } from './patents.controller';
import { PatentsService } from './patents.service';

describe('PatentsController', () => {
  let controller: PatentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatentsController],
      providers: [PatentsService],
    }).compile();

    controller = module.get<PatentsController>(PatentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

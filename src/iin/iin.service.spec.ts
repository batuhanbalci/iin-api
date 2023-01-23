import { Test, TestingModule } from '@nestjs/testing';
import { IinService } from './iin.service';

describe('IinService', () => {
  let service: IinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IinService],
    }).compile();

    service = module.get<IinService>(IinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

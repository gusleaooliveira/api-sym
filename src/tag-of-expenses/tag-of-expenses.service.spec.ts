import { Test, TestingModule } from '@nestjs/testing';
import { TagOfExpensesService } from './tag-of-expenses.service';

describe('TagOfExpensesService', () => {
  let service: TagOfExpensesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TagOfExpensesService],
    }).compile();

    service = module.get<TagOfExpensesService>(TagOfExpensesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

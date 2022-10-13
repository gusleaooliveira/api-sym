import { Test, TestingModule } from '@nestjs/testing';
import { TypeOfExpensesService } from './type-of-expenses.service';

describe('TypeOfExpensesService', () => {
  let service: TypeOfExpensesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeOfExpensesService],
    }).compile();

    service = module.get<TypeOfExpensesService>(TypeOfExpensesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

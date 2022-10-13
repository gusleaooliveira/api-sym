import { Test, TestingModule } from '@nestjs/testing';
import { TypeOfExpensesController } from './type-of-expenses.controller';
import { TypeOfExpensesService } from './type-of-expenses.service';

describe('TypeOfExpensesController', () => {
  let controller: TypeOfExpensesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeOfExpensesController],
      providers: [TypeOfExpensesService],
    }).compile();

    controller = module.get<TypeOfExpensesController>(TypeOfExpensesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

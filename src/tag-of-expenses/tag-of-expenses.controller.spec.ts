import { Test, TestingModule } from '@nestjs/testing';
import { TagOfExpensesController } from './tag-of-expenses.controller';
import { TagOfExpensesService } from './tag-of-expenses.service';

describe('TagOfExpensesController', () => {
  let controller: TagOfExpensesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TagOfExpensesController],
      providers: [TagOfExpensesService],
    }).compile();

    controller = module.get<TagOfExpensesController>(TagOfExpensesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

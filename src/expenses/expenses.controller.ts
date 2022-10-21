import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Put,
} from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly ExpensesService: ExpensesService) { }

  @Post()
  create(@Body() createExpenseDto: CreateExpenseDto) {
    return this.ExpensesService.create(createExpenseDto);
  }

  @Get()
  findAll() {
    return this.ExpensesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ExpensesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateExpenseDto: UpdateExpenseDto) {
    return this.ExpensesService.update(id, updateExpenseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ExpensesService.remove(id);
  }
}

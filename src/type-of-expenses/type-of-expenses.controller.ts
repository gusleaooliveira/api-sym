import { Controller, Get, Post, Body, Patch, Param, Delete,UseGuards, Put } from '@nestjs/common';
import { TypeOfExpensesService } from './type-of-expenses.service';
import { CreateTypeOfExpenseDto } from './dto/create-type-of-expense.dto';
import { UpdateTypeOfExpenseDto } from './dto/update-type-of-expense.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('type-of-expenses')
export class TypeOfExpensesController {
  constructor(private readonly typeOfExpensesService: TypeOfExpensesService) {}

  @Post()
  create(@Body() createTypeOfExpenseDto: CreateTypeOfExpenseDto) {
    return this.typeOfExpensesService.create(createTypeOfExpenseDto);
  }

  @Get()
  findAll() {
    return this.typeOfExpensesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeOfExpensesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTypeOfExpenseDto: UpdateTypeOfExpenseDto) {
    return this.typeOfExpensesService.update(id, updateTypeOfExpenseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeOfExpensesService.remove(id);
  }
}

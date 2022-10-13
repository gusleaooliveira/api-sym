import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { TagOfExpensesService } from './tag-of-expenses.service';
import { CreateTagOfExpenseDto } from './dto/create-tag-of-expense.dto';
import { UpdateTagOfExpenseDto } from './dto/update-tag-of-expense.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('tag-of-expenses')
export class TagOfExpensesController {
  constructor(private readonly tagOfExpensesService: TagOfExpensesService) {}

  @Post()
  create(@Body() createTagOfExpenseDto: CreateTagOfExpenseDto) {
    return this.tagOfExpensesService.create(createTagOfExpenseDto);
  }

  @Get()
  findAll() {
    return this.tagOfExpensesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tagOfExpensesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTagOfExpenseDto: UpdateTagOfExpenseDto) {
    return this.tagOfExpensesService.update(id, updateTagOfExpenseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tagOfExpensesService.remove(id);
  }
}

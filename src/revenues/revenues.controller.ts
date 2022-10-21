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
import { RevenuesService } from './revenues.service';
import { CreateRevenueDto } from './dto/create-revenue.dto';
import { UpdateRevenueDto } from './dto/update-revenue.dto';

@Controller('revenues')
export class RevenuesController {
  constructor(private readonly RevenuesService: RevenuesService) { }

  @Post()
  create(@Body() createRevenueDto: CreateRevenueDto) {
    return this.RevenuesService.create(createRevenueDto);
  }

  @Get()
  findAll() {
    return this.RevenuesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.RevenuesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateRevenueDto: UpdateRevenueDto) {
    return this.RevenuesService.update(id, updateRevenueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.RevenuesService.remove(id);
  }
}

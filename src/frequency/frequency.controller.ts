import { Controller, Get, Post, Body, Patch, Param, Delete,UseGuards, Put } from '@nestjs/common';
import { FrequencyService } from './frequency.service';
import { CreateFrequencyDto } from './dto/create-frequency.dto';
import { UpdateFrequencyDto } from './dto/update-frequency.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard) 
@Controller('frequency')
export class FrequencyController {
  constructor(private readonly frequencyService: FrequencyService) {}

  @Post()
  create(@Body() createFrequencyDto: CreateFrequencyDto) {
    return this.frequencyService.create(createFrequencyDto);
  }

  @Get()
  findAll() {
    return this.frequencyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.frequencyService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateFrequencyDto: UpdateFrequencyDto) {
    return this.frequencyService.update(id, updateFrequencyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.frequencyService.remove(id);
  }
}

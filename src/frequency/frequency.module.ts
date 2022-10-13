import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { FrequencyService } from './frequency.service';
import { FrequencyController } from './frequency.controller';
import { Frequency, FrequencySchema } from './entities/frequency.entity';

@Module({

  imports: [
    MongooseModule.forFeature([
      {
        name: Frequency.name,
        schema: FrequencySchema
      }
    ])
  ],
  controllers: [FrequencyController],
  providers: [FrequencyService]
})
export class FrequencyModule {}

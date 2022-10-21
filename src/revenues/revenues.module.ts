import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { RevenuesService } from './revenues.service';
import { RevenuesController } from './revenues.controller';
import { Revenues, RevenuesSchema } from './entities/revenue.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Revenues.name,
        schema: RevenuesSchema,
      },
    ]),
  ],
  controllers: [RevenuesController],
  providers: [RevenuesService],
})
export class RevenuesModule { }

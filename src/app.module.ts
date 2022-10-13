import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { SessionModule } from './session/session.module';
import { ExpensesModule } from './expenses/expenses.module';
import { TypeOfExpensesModule } from './type-of-expenses/type-of-expenses.module';
import { TagOfExpensesModule } from './tag-of-expenses/tag-of-expenses.module';
import { FrequencyModule } from './frequency/frequency.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    MongooseModule.forRoot(`${process.env.MONGO_URL}`,{
      connectionFactory: (connection) => {
        connection.plugin(require('mongoose-autopopulate'))
        return connection
      }
    }),
    UsersModule,
    AuthModule,
    SessionModule,
    ExpensesModule,
    TypeOfExpensesModule,
    TagOfExpensesModule,
    FrequencyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

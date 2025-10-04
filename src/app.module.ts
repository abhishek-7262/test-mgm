import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { QuestionsModule } from './questions/questions.module';
import { TestsModule } from './tests/tests.module';
import { ResultsModule } from './results/results.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { connection } from 'mongoose';
import { AuthModule } from './auth/auth.module';
import { SectionModule } from './section/section.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: process.env.MONGODB_URI,
        connectionFactory: (connection) => {
          connection.on('connected', () => {
            console.log('connected to db')
          });
          return connection;
        }
      })
    }),


    UsersModule, QuestionsModule, TestsModule, ResultsModule, AuthModule, SectionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

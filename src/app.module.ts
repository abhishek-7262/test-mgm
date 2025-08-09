import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { QuestionsModule } from './questions/questions.module';
import { TestsModule } from './tests/tests.module';
import { ResultsModule } from './results/results.module';

@Module({
  imports: [UsersModule, QuestionsModule, TestsModule, ResultsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

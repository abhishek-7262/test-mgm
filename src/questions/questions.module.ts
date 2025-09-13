// src/question/questions.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionsController } from './questions.controller';
import { QuestionsService } from './questions.service';
import { Question, QuestionSchema } from './questions.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Question', schema: QuestionSchema }
    ])
  ],
  controllers: [QuestionsController],
  providers: [QuestionsService],
  exports: [QuestionsService] // optional, only if used in other modules
})
export class QuestionsModule { }

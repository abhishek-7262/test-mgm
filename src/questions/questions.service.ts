import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Question, QuestionDocument } from './questions.schema';
import { Model } from 'mongoose';

@Injectable()
export class QuestionsService {
    constructor(@InjectModel(Question.name) private QuestionModel: Model<QuestionDocument>) { }

    async newQuestion(questionDto: Partial<Question>) {
        const { questionText, options, correctAnswer, marks } = questionDto
    }
}

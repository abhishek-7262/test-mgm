import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Question, QuestionDocument } from './questions.schema';
import { Model } from 'mongoose';
import { CreateQuestionDto } from './dto/create-question.dto';

@Injectable()
export class QuestionsService {
    constructor(@InjectModel(Question.name) private questionModel: Model<QuestionDocument>) { }

    async create(createQuestionDto: CreateQuestionDto, userId: string): Promise<Question> {
        const newQuestion = new this.questionModel({
            ...createQuestionDto,
            createdBy: userId
        });
        return await newQuestion.save()
    }
}

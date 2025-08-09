// src/result/schemas/result.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ResultDocument = Result & Document;

@Schema({ timestamps: true })
export class Answer {
    @Prop({ type: Types.ObjectId, ref: 'Question' })
    question: Types.ObjectId;

    @Prop()
    selectedOption: number;  // index of selected option
}

const AnswerSchema = SchemaFactory.createForClass(Answer);

@Schema({ timestamps: { createdAt: 'submittedAt', updatedAt: false } })
export class Result {
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    student: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'Test', required: true })
    test: Types.ObjectId;

    @Prop({ type: [AnswerSchema] })
    answers: Answer[];

    @Prop()
    score: number;

    // `submittedAt` is set via timestamps above
    submittedAt?: Date;
}

export const ResultSchema = SchemaFactory.createForClass(Result);

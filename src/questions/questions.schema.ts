// src/question/schemas/question.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/users/users.schema'; // adjust path based on your structure

export type QuestionDocument = Question & Document;

@Schema({ timestamps: true })  // adds createdAt and updatedAt automatically
export class Question {
    @Prop({ required: true })
    questionText: string;

    @Prop({ type: [String], required: true })
    options: string[];

    @Prop({ type: Number, required: true })
    correctAnswer: number;  // index of the correct option

    @Prop({ default: 1 })
    marks: number;

    @Prop({ type: Types.ObjectId, ref: 'User' })  // reference to User
    createdBy: Types.ObjectId;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);

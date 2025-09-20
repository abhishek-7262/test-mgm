// src/result/schemas/result.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ResultDocument = Result & Document;

@Schema({ timestamps: true })
export class Result {
    @Prop({ type: Types.ObjectId, ref: 'Test', required: true })
    test: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    student: Types.ObjectId;

    @Prop([
        {
            question: { type: Types.ObjectId, ref: 'Question' },
            selectedOption: Number
        }
    ])
    answers: {
        question: Types.ObjectId;
        selectedOption: number;
    }[];

    @Prop()
    score: number;
}

export const ResultSchema = SchemaFactory.createForClass(Result);

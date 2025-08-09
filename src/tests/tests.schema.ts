// src/test/schemas/test.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Question } from 'src/questions/questions.schema'; // Adjust paths as needed
import { User } from 'src/users/users.schema';

export type TestDocument = Test & Document;

@Schema({ timestamps: true })  // Automatically adds createdAt and updatedAt
export class Test {
    @Prop({ required: true })
    title: string;

    @Prop()
    description?: string;

    @Prop()
    subject?: string;

    @Prop()
    grade?: string;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Question' }] })
    questions: Types.ObjectId[];

    @Prop({ type: Types.ObjectId, ref: 'User' })
    createdBy: Types.ObjectId;

    @Prop()
    timeLimit?: number; // in minutes

    // You can omit this because timestamps will handle createdAt automatically
    createdAt?: Date;
    updatedAt?: Date;
}

export const TestSchema = SchemaFactory.createForClass(Test);

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { User } from "src/users/users.schema";

export type SectionDocument = Section & Document;

@Schema({ timestamps: true })
export class Section {

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    grade: string;

    @Prop({ type: [{ type: Types.ObjectId, ref: () => User }] })
    students: Types.ObjectId[];

    @Prop({ type: [{ type: Types.ObjectId, ref: () => User }] })
    classTeacher?: Types.ObjectId; // Optional: assign a teacher

    @Prop({ required: false })
    academicYear?: string; // e.g., "2025-2026"
}

export const SectionSchema = SchemaFactory.createForClass(Section)
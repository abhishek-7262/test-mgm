import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Test, TestDocument } from './tests.schema';
import { Model, Types } from 'mongoose';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';

@Injectable()
export class TestsService {
    constructor(
        @InjectModel(Test.name)
        private readonly testModel: Model<TestDocument>
    ) { }

    async create(createTestDto: CreateTestDto, userId: Types.ObjectId): Promise<Test> {
        const createdTest = new this.testModel({
            ...createTestDto,
            createdBy: userId,
        });

        return await createdTest.save()
    };

    async findAll({ page = 1,
        limit = 10,
        filters = {}
    }: {
        page: number,
        limit: number,
        filters?: { subject?: string; grade?: string }
    }): Promise<{ data: Test[]; total: number }> {
        const query: any = {};

        if (filters.subject) query.subject = filters.subject;
        if (filters.grade) query.grade = filters.grade;

        const [data, total] = await Promise.all([
            this.testModel
                .find(query)
                .populate('questions')
                .populate('createdBy', '-password')
                .skip((page - 1) * limit)
                .limit(limit)
                .sort({ createdAt: -1 }),
            this.testModel.countDocuments(query),
        ]);

        return { data, total }
    };

    async findOne(id: string): Promise<Test | null> {
        return this.testModel
            .findById(id)
            .populate('questions')
            .populate('createdBy', '-password')
            .exec();
    };

    async update(id: string, updateTestDto: UpdateTestDto, userId: Types.ObjectId): Promise<Test | null> {
        const test = await this.testModel.findById(id);
        if (!test) throw new NotFoundException('Test not found');

        // Ensure only the creator can update
        if (!test.createdBy.equals(userId)) {
            throw new ForbiddenException('You are not authorized to update this test');
        }

        Object.assign(test, updateTestDto);
        return await test.save();
    };

    async remove(id: string, userId: Types.ObjectId): Promise<boolean> {
        const test = await this.testModel.findById(id);
        if (!test) return false;

        // Ensure only the creator can delete
        if (!test.createdBy.equals(userId)) {
            throw new ForbiddenException('You are not authorized to delete this test');
        }

        await this.testModel.deleteOne({ _id: id });
        return true;
    };
}

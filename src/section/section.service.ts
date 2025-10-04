import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Section, SectionDocument } from './section.schema';
import { Model, Types } from 'mongoose';
import { CreateSectionDto } from './dto/create-section.dto';

@Injectable()
export class SectionService {
    constructor(
        @InjectModel(Section.name)
        private readonly sectionModel: Model<SectionDocument>
    ) { }

    async create(createSectionDto: CreateSectionDto, userId: Types.ObjectId): Promise<Section> {
        const createSection = new this.sectionModel({
            ...createSectionDto,
            createdBy: userId
        });

        return await createSection.save();
    }
}

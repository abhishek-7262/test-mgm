import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Section, SectionDocument } from './section.schema';
import { Model } from 'mongoose';

@Injectable()
export class SectionService {
    constructor(
        @InjectModel(Section.name)
        private readonly sectionModel: Model<SectionDocument>
    ) { }

    async create() { }
}

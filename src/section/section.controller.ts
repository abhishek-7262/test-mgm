import { BadRequestException, Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { SectionService } from './section.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateSectionDto } from './dto/create-section.dto';

@Controller('section')
export class SectionController {
    constructor(private readonly sectionService: SectionService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() createSectionDto: CreateSectionDto, @Request() req: any) {
        const userId = req.user._id;

        try {
            return this.sectionService.create(createSectionDto, userId)
        } catch (error) {
            throw new BadRequestException(error.message)
        }
    }
}

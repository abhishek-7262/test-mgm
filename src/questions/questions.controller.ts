import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('questions')
export class QuestionsController {
    constructor(private readonly questionsService: QuestionsService) { }

    @UseGuards(JwtAuthGuard)        // Protect this route with JWT auth
    @Post()                         // Respond to POST /questions
    async create(
        @Body() createQuestionDto: CreateQuestionDto,
        @Request() req: any
    ) {
        const userId = req.user._id;   // get user ID from JWT payload

        const question = await this.questionsService.create(createQuestionDto, userId);

        return {
            message: 'Question created successfully',
            data: question,
        };
    }
}

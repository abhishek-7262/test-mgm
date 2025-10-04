import { BadRequestException, Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { TestsService } from './tests.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateTestDto } from './dto/create-test.dto';
import e from 'express';

@Controller('tests')
export class TestsController {
    constructor(private readonly testsService: TestsService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() createTestDto: CreateTestDto, @Request() req: any) {
        const userId = req.user._id;   // get user ID from JWT payload

        //console.log(userId, " testsssss")

        try {
            return this.testsService.create(createTestDto, userId)
        } catch (error) {
            throw new BadRequestException(error.message)
        }
    }
}

import { IsArray, IsNotEmpty, IsNumber, IsString, ArrayMinSize, Min } from 'class-validator';

export class CreateQuestionDto {
    @IsString()
    @IsNotEmpty()
    questionText: string;

    @IsArray()
    @ArrayMinSize(2)
    @IsString({ each: true })
    options: string[];

    @IsNumber()
    @Min(0)
    correctAnswer: number;

    @IsNumber()
    @Min(1)
    marks?: number;
}

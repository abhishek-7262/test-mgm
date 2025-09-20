import {
    IsString,
    IsOptional,
    IsArray,
    IsMongoId,
    IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTestDto {
    @IsString()
    title: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    subject?: string;

    @IsString()
    @IsOptional()
    grade?: string;

    @IsArray()
    @IsMongoId({ each: true })
    @IsOptional()
    questions?: string[];

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    timeLimit?: number;
}

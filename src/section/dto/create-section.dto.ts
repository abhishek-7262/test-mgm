import { IsArray, IsMongoId, IsOptional, IsString } from "class-validator";

export class CreateSectionDto {

    @IsString()
    name: string;

    @IsString()
    grade: string;

    @IsArray()
    @IsMongoId({ each: true })
    @IsOptional()
    students?: string;

    @IsArray()
    @IsMongoId({ each: true })
    @IsOptional()
    classTeacher?: string;

    @IsString()
    @IsOptional()
    academicYear: string;
}
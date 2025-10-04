import { Module } from '@nestjs/common';
import { SectionController } from './section.controller';
import { SectionService } from './section.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SectionSchema } from './section.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Section', schema: SectionSchema }
    ]),
    AuthModule,
  ],
  controllers: [SectionController],
  providers: [SectionService]
})
export class SectionModule { }

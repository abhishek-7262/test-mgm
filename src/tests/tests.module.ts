import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TestsController } from './tests.controller';
import { TestsService } from './tests.service';
import { Test, TestSchema } from './tests.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Test.name, schema: TestSchema }
    ]),
    AuthModule,
  ],
  controllers: [TestsController],
  providers: [TestsService],
  exports: [TestsService], // Optional, only if needed in other modules
})
export class TestsModule { }

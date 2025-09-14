import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Enable CORS (if you're calling APIs from a frontend)
  app.enableCors();

  // ✅ Enable global validation for DTOs (e.g., class-validator)
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // ✅ Optional: Set a global prefix like /api
  // app.setGlobalPrefix('api');

  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  console.log(`🚀 Server running on http://localhost:${port}`);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Feedback Form')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('feedback')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 3000, function () {
    console.log('Express server listening on port %d in %s mode');
  });
  // await app.listen(process.env.PORT || 3000);
}
bootstrap();

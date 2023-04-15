import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  /**
   * pipes for field validation
   */
  // app.useGlobalPipes(new ValidationPipe());

  /**
   * Swagger
   */
  const options = new DocumentBuilder()
    .setTitle('Vehicle Patent')
    .setDescription('MS Patent')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('vehicle-patent/patent/swagger', app, document);

  /**
   * Config port
   */
  const port = process.env.PORT || 3001;
  await app.listen(port, () => {
    Logger.log(`Microservicio de Patentes iniciado en puerto ${port}`);
  })

}
bootstrap().then();

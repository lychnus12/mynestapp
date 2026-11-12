import { NestFactory } from '@nestjs/core';
import { ObserveInstrument } from './app.module.js';
import { Controller, Get, Module } from '@nestjs/common';

@Controller()
class AppController {
  @Get()
  getHello(): string {
    return "<h1>Hello, World3</h1>"
  }
}

@Module({
  controllers: [AppController]
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });

  app.enableCors({
    origin: true,
    credentials: true
  })

  await app.listen(process.env.PORT ?? 10000);
}
await bootstrap();

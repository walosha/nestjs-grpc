import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { join } from 'path';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AUTH } from 'libs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AuthModule,
    {
      transport: Transport.GRPC,
      options: {
        package: AUTH,
        protoPath: join(__dirname, '../auth.proto'),
      },
    },
  );
  await app.listen();
}
bootstrap();

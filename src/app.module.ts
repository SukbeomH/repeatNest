import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { ApiControllerController } from './api-controller/api-controller.controller';

@Module({
  imports: [UsersModule],
  controllers: [UsersController, ApiControllerController],
  providers: [],
})
export class AppModule {}

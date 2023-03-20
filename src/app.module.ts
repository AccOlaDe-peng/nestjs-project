import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './modules/user/user.controller';
import { UserService } from './modules/user/user.service';
// 引入 Mongoose
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), UserModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}

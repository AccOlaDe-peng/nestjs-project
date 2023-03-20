import { User, UserSchema } from '@/schemas/user.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.username, schema: UserSchema }]),
  ],
})
export class UserModule {}

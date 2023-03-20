import { User, UserDocument } from '@/schemas/user.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UserService {
  // 注册Schema后，可以使用 @InjectModel() 装饰器将 User 模型注入到 UserService 中:
  constructor(@InjectModel('user') private userModel: Model<UserDocument>) {}

  // 添加
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const createUser = new this.userModel(createUserDto);
    const temp = await createUser.save();
    console.log(temp);
    return temp;
  }

  validateToken(token: string): boolean {
    return true;
  }

  getUserByToken(token: string) {
    return false;
  }
}

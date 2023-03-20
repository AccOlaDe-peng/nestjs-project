import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(@InjectModel(Cat.name) private);
  validateToken(token: string): boolean {
    return true;
  }

  getUserByToken(token: string) {
    return false;
  }
}

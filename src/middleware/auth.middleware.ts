// 中间件职责：读取请求头Authorization，如果存在且有效的话，设置user对象到request中
import { Injectable, NestMiddleware } from '@nestjs/common';
import { UserService } from '@/modules/user/user.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware<Request | any> {
  constructor(private readonly userService: UserService) {}
  async use(req: Request | any, res: Response, next: () => void) {
    const token: string = req.header('authorization');
    if (!token) {
      next();
      return;
    }
    const user = await this.userService.getUserByToken(token);
    if (!user) {
      next();
      return;
    }
    req.user = user;
    next();
  }
}

import { UserService } from '@/modules/user/user.service';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request | any>();
    // 读取token
    const authorization = request.header('authorization');
    if (!authorization) {
      return false;
    }
    // 直接检测是否有user对象，因为无user对象证明无token或者token无效
    return this.userService.validateToken(authorization);
  }
}

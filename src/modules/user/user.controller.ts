import { AuthGuard } from '@/guard/auth/auth.guard';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { userRegisterType } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // 请求登录
  @Post('login')
  login() {
    return { token: 'fake_token' }; // 直接下发token，真实场景下需要验证账号密码
  }

  // 注册
  @Post('register')
  register(@Body() body: userRegisterType) {
    return { token: 'fake_token' }; // 直接下发token，真实场景下需要验证账号密码
  }

  // 查看当前用户信息
  @Get('info')
  @UseGuards(AuthGuard) // 方法级路由守卫
  info() {
    return { username: 'fake_user' };
  }
}

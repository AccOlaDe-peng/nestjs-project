import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  //配置静态资源目录
  app.useStaticAssets('public');
  app.setBaseViewsDir('views');
  app.setViewEngine('ejs');
  //配置cookie中间件
  app.use(cookieParser());
  app.use(
    session({
      secret: 'keyword',
      cookie: { maxAge: 60000, httpOnly: true },
      rolling: true, //操作后更新时间，如果到时间未操作则会销毁session，
    }),
  );
  await app.listen(3000);
}
bootstrap();

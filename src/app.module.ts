import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      // nao é ideal ser true, mas inicialmente pra ver rodando tudo bem, dps deve criar migrations
      synchronize: true,
      entities: [`${__dirname}/**/*.entity{.js,.ts}`]
    }), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule { }

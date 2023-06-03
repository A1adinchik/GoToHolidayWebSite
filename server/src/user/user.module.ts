import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [DatasourceModule,
  TypeOrmModule.forFeature([User]),
  JwtModule.registerAsync({
    imports: [ConfigModule],
    useFactory: (config: ConfigService) => ({
      secret: config.get("JWT_SECRET"),
      signOptions: { expiresIn: '30d'},
    }),
    inject: [ConfigService],
  }),],
  exports: [UserService],
})
export class UserModule {}

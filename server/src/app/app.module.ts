import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { TypeOrmConfig } from '../configs/typeorm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../modules/user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmConfig), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}

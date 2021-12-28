import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'ding888888',
  database: 'nestStarter',
  synchronize: true,
  autoLoadEntities: true,
};

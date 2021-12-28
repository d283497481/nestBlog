import { PartialType } from '@nestjs/swagger';

import { CreateUserDto } from './create-user.dto';

// PartialType<T>: 返回 T 类型，并且每个字段都是可选的
export class UpdateUserDto extends PartialType(CreateUserDto) {}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiForbiddenResponse,
  ApiHeader,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: '创建一个新用户',
    description: '使用用户信息新建用户',
    deprecated: false,
    externalDocs: {
      description: '从下面链接获取信息',
      url: 'URL',
    },
  })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiOperation({
    summary: '获取所有用户',
    description: '获取所有用户，返回一个用户数组',
    deprecated: true,
    externalDocs: {
      description: '从下面链接获取信息',
      url: 'URL',
    },
  })
  @ApiHeader({
    name: 'token',
    description: '用户 Token',
  })
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: '成功获取所有用户',
  })
  @ApiForbiddenResponse({
    status: HttpStatus.FORBIDDEN,
    description: '没有权限获取用户列表',
  })
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}

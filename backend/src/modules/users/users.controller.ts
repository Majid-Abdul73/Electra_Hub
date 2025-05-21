import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User as UserModel } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<UserModel> {
    const user = await this.usersService.user({ id: Number(id) });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  @Post()
  async createUser(
    @Body() userData: { name: string; email: string; password: string }
  ): Promise<UserModel> {
    return this.usersService.createUser(userData);
  }
}
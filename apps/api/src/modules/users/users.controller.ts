import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users') // Base URL definida na doc: /v1/users
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        // Chama o service para processar a criação
        return this.usersService.create(createUserDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.usersService.findById(id);
    }
}
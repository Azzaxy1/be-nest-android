import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MembersService } from './members.service';
import { Prisma } from '@prisma/client';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Get()
  findAll() {
    return this.membersService.findAll();
  }

  @Post()
  create(@Body() data: Prisma.MemberCreateInput) {
    return this.membersService.create(data);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.membersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Prisma.MemberUpdateInput) {
    return this.membersService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.membersService.delete(+id);
  }
}

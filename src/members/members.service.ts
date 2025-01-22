import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class MembersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.member.findMany();
  }

  async create(data: Prisma.MemberCreateInput) {
    return this.prisma.member.create({ data });
  }

  async findOne(id: number) {
    return this.prisma.member.findUnique({ where: { id } });
  }

  async update(id: number, data: Prisma.MemberUpdateInput) {
    return this.prisma.member.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return this.prisma.member.delete({ where: { id } });
  }
}

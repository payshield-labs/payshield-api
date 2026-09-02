import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class JobsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createJobDto: CreateJobDto) {
    return this.prisma.job.create({
      data: {
        ...createJobDto,
        jobId: BigInt(createJobDto.jobId),
        amount: BigInt(createJobDto.amount),
      },
    });
  }

  findAll() {
    return this.prisma.job.findMany();
  }

  async findOne(jobId: bigint) {
    const job = await this.prisma.job.findUnique({ where: { jobId } });
    if (!job) {
      throw new NotFoundException(`Job with jobId ${jobId} not found`);
    }
    return job;
  }

  async update(jobId: bigint, updateJobDto: UpdateJobDto) {
    await this.findOne(jobId);
    const { jobId: newJobId, amount, ...rest } = updateJobDto;
    return this.prisma.job.update({
      where: { jobId },
      data: {
        ...rest,
        ...(newJobId !== undefined && { jobId: BigInt(newJobId) }),
        ...(amount !== undefined && { amount: BigInt(amount) }),
      },
    });
  }

  async remove(jobId: bigint) {
    await this.findOne(jobId);
    return this.prisma.job.delete({ where: { jobId } });
  }
}
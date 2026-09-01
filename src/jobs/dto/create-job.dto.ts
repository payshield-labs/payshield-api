import { IsString, IsOptional, IsEnum, IsNumber } from 'class-validator';
import { JobStatus } from '@prisma/client';

export class CreateJobDto {
  @IsNumber()
  jobId: number;

  @IsString()
  clientWallet: string;

  @IsString()
  @IsOptional()
  workerWallet?: string;

  @IsNumber()
  amount: number;

  @IsString()
  tokenAddress: string;

  @IsEnum(JobStatus)
  @IsOptional()
  status?: JobStatus;
}

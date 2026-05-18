import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EscrowModule } from './escrow/escrow.module';
import { JobsModule } from './jobs/jobs.module';
import { StellarModule } from './stellar/stellar.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [EscrowModule, JobsModule, StellarModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

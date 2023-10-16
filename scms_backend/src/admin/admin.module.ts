import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducerEntity } from './producer.entity';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([ProducerEntity])],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}

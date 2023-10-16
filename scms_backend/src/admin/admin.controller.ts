import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { ProducerInfo } from './producer.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('producer')
  getHello() {
    return this.adminService.getAll();
  }

  @Post('addproducer')
  addProducer(@Body() producerInfo: ProducerInfo): object {
    return this.adminService.addProducer(producerInfo);
  }
  @Get('/searchproducerby/:id')
  searchProducer(@Param('id') userID: number): Promise<AdminEntity> {
    return this.adminService.getProducerByID(userID);
  }

  @Put('producer/update/:id')
  updateProducer(@Param('id') id: number, @Body() producerInfo: ProducerInfo) {
    return this.adminService.updateProducer(id, producerInfo);
  }

  @Delete('producer/:id')
  deleteProducer(@Param('id') id: number): object {
    const user = this.adminService.remove(id);
    return {
      message: 'Successfully Deleted User',
    };
  }
}

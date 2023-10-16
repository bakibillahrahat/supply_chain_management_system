import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProducerEntity } from './producer.dto';
import { Repository } from 'typeorm';
import { ProducerInfo } from './producer.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(ProducerEntity)
    private producerRepo: Repository<ProducerEntity>,
  ) {}
  // for show all producer
  getAll(): Promise<ProducerEntity[]> {
    return this.producerRepo.find({
      select: {
        username: true,
      },
    });
  }
  // search producer by id
  getProducerByID(id: number): Promise<ProducerEntity> {
    return this.producerRepo.findOneBy({ id: id });
  }
  // add Producer
  async addProducer(producerInfo: ProducerInfo): Promise<ProducerEntity[]> {
    const res = await this.producerRepo.save(producerInfo);
    return this.producerRepo.find();
  }
  // update producer info
  updateProducer(
    id: number,
    producerInfo: ProducerInfo,
  ): Promise<ProducerEntity> {
    const res = this.producerRepo.update(id, producerInfo);

    return this.producerRepo.findOneBy({ id });
  }
  // delete producer info
  async remove(id: number): Promise<void> {
    await this.producerRepo.delete(id);
  }

}

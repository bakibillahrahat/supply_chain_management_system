import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('producer')
export class ProducerEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'name', type: 'character varying' })
  name: string;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  address: string;
  @Column()
  productname: string;
  @Column()
  productquantity: number;
}

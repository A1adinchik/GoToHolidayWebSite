import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { Booking } from '../../booking/entities/booking.entity';
import { Tour } from '../../tour/entities/tour.entity';

@Entity()
export class Hotel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  location: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @OneToMany(() => Booking, (booking) => booking.hotel)
  bookings: Booking[];

  @ManyToMany(() => Tour, (tour) => tour.hotels)
  tours: Tour[];
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Tour } from '../../tour/entities/tour.entity';
import { Hotel } from '../../hotel/entities/hotel.entity';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @ManyToOne(() => User, (user) => user.bookings)
  user: User;

  @ManyToOne(() => Tour, (tour) => tour.bookings)
  tour: Tour;

  @ManyToOne(() => Hotel, (hotel) => hotel.bookings)
  hotel: Hotel;
  booking: Date;
}
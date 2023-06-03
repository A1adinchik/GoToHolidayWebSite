import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Booking } from '../../booking/entities/booking.entity';
import { Hotel } from '../../hotel/entities/hotel.entity';

@Entity()
export class Tour {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  duration: number;

  @Column()
  description: string;

  @Column()
  price: number;

  @OneToMany(() => Booking, (booking) => booking.tour)
  bookings: Booking[];

  @ManyToMany(() => Hotel, (hotel) => hotel.tours)
  @JoinTable()
  hotels: Hotel[];
}
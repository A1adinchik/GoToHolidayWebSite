import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Booking } from './entities/booking.entity';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { User } from '../user/entities/user.entity';
import { Tour } from '../tour/entities/tour.entity';
import { Hotel } from '../hotel/entities/hotel.entity';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Tour)
    private tourRepository: Repository<Tour>,
    @InjectRepository(Hotel)
    private hotelRepository: Repository<Hotel>,
  ) {}

  async findAll(): Promise<Booking[]> {
    const booking = await this.bookingRepository.find({

    });
    return booking;
  }

  findOne(id: number): Promise<Booking> {
    return this.bookingRepository.findOne({
      where: {id},
    });
  }

  async remove(id: number): Promise<void> {
    await this.bookingRepository.delete(id);
  }

  async create(bookingDto: CreateBookingDto): Promise<Booking> {
    const booking = this.bookingRepository.create();
    booking.date = bookingDto.date ? new Date(bookingDto.date) : new Date();
    booking.user = await this.userRepository.findOne({ where: { id: bookingDto.userId } });
    booking.tour = await this.tourRepository.findOne({ where: { id: bookingDto.tourId } });
    booking.hotel = await this.hotelRepository.findOne({ where: { id: bookingDto.hotelId } });

    if (!booking.user || !booking.tour || !booking.hotel) {
      throw new Error('User, tour or hotel not found');
    }

    await this.bookingRepository.save(booking);
    return booking;
  }

  async update(id: number, bookingDto: UpdateBookingDto): Promise<Booking> {
    const booking = await this.bookingRepository.findOne({ where: { id: id } });

    if (!booking) {
      throw new Error('Booking not found');
    }

    if (bookingDto.userId) {
      booking.user = await this.userRepository.findOne({ where: { id: bookingDto.userId } });
    }
    
    if (bookingDto.tourId) {
      booking.tour = await this.tourRepository.findOne({ where: { id: bookingDto.tourId } });
    }
    
    if (bookingDto.hotelId) {
      booking.hotel = await this.hotelRepository.findOne({ where: { id: bookingDto.hotelId } });
    }
    

    if (!booking.user || !booking.tour || !booking.hotel) {
      throw new Error('User, tour or hotel not found');
    }

    await this.bookingRepository.save(booking);
    return booking;
  }
}

import { Repository } from 'typeorm';
import { Booking } from './entities/booking.entity';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { User } from '../user/entities/user.entity';
import { Tour } from '../tour/entities/tour.entity';
import { Hotel } from '../hotel/entities/hotel.entity';
export declare class BookingService {
    private bookingRepository;
    private userRepository;
    private tourRepository;
    private hotelRepository;
    constructor(bookingRepository: Repository<Booking>, userRepository: Repository<User>, tourRepository: Repository<Tour>, hotelRepository: Repository<Hotel>);
    findAll(): Promise<Booking[]>;
    findOne(id: number): Promise<Booking>;
    remove(id: number): Promise<void>;
    create(bookingDto: CreateBookingDto): Promise<Booking>;
    update(id: number, bookingDto: UpdateBookingDto): Promise<Booking>;
}

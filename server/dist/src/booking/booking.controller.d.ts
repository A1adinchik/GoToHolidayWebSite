import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
export declare class BookingController {
    private readonly bookingService;
    constructor(bookingService: BookingService);
    create(createBookingDto: CreateBookingDto): Promise<import("./entities/booking.entity").Booking>;
    findAll(): Promise<import("./entities/booking.entity").Booking[]>;
    findOne(id: string): Promise<import("./entities/booking.entity").Booking>;
    update(id: string, updateBookingDto: UpdateBookingDto): Promise<import("./entities/booking.entity").Booking>;
    remove(id: string): Promise<void>;
}

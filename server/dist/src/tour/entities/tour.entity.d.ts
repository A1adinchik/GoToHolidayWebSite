import { Booking } from '../../booking/entities/booking.entity';
import { Hotel } from '../../hotel/entities/hotel.entity';
export declare class Tour {
    id: number;
    fullName: string;
    duration: number;
    description: string;
    price: number;
    bookings: Booking[];
    hotels: Hotel[];
}

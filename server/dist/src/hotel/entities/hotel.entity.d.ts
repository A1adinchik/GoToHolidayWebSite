import { Booking } from '../../booking/entities/booking.entity';
import { Tour } from '../../tour/entities/tour.entity';
export declare class Hotel {
    id: number;
    name: string;
    location: string;
    description: string;
    price: number;
    bookings: Booking[];
    tours: Tour[];
}

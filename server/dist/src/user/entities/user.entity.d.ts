import { Booking } from '../../booking/entities/booking.entity';
export declare class User {
    id: number;
    fullName: string;
    age: number;
    gender: string;
    email: string;
    password: string;
    bookings: Booking[];
}

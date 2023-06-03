import { User } from '../../user/entities/user.entity';
import { Tour } from '../../tour/entities/tour.entity';
import { Hotel } from '../../hotel/entities/hotel.entity';
export declare class Booking {
    id: number;
    date: Date;
    user: User;
    tour: Tour;
    hotel: Hotel;
    booking: Date;
}

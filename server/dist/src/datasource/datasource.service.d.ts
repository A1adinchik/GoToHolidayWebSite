import { Hotel } from "src/hotel/entities/hotel.entity";
import { Tour } from "src/tour/entities/tour.entity";
import { User } from "src/user/entities/user.entity";
export declare class DatasourceService {
    private routes;
    getRoutes(): Tour[];
    private hotel;
    getHotel(): Hotel[];
    private users;
    getUsers(): User[];
}

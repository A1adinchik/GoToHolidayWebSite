import {Injectable} from "@nestjs/common";
import { Hotel } from "src/hotel/entities/hotel.entity";
import { Tour } from "src/tour/entities/tour.entity";
import { User } from "src/user/entities/user.entity";


@Injectable()
export class DatasourceService
{
    private routes: Tour[] = [];
    getRoutes(): Tour[]
    {
        return this.routes
    }

    private hotel: Hotel[] = [];
    getHotel(): Hotel[]
    {
        return this.hotel
    }
    
    private users: User[] = [];
    getUsers(): User[]
    {
        return this.users;
    }
}
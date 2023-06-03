import { Repository } from "typeorm";
import { Hotel } from "./entities/hotel.entity";
import { CreateHotelDto } from "./dto/create-hotel.dto";
import { UpdateHotelDto } from "./dto/update-hotel.dto";
export declare class HotelService {
    private readonly hotelRepository;
    constructor(hotelRepository: Repository<Hotel>);
    create(hotelDto: CreateHotelDto): Promise<Hotel>;
    findOne(id: number): Promise<Hotel>;
    findAll(): Promise<Hotel[]>;
    update(id: number, updateHotel: UpdateHotelDto): Promise<Hotel>;
    remove(id: number): Promise<void>;
}

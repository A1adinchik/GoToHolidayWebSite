import { HotelService } from './hotel.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
export declare class HotelController {
    private readonly hotelService;
    constructor(hotelService: HotelService);
    create(createHotelDto: CreateHotelDto): Promise<import("./entities/hotel.entity").Hotel>;
    findAll(): Promise<import("./entities/hotel.entity").Hotel[]>;
    findOne(id: string): Promise<import("./entities/hotel.entity").Hotel>;
    update(id: string, updateHotelDto: UpdateHotelDto): Promise<import("./entities/hotel.entity").Hotel>;
    remove(id: string): Promise<void>;
}

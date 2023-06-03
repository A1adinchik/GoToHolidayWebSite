import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
import { Repository } from 'typeorm';
import { Tour } from './entities/tour.entity';
import { Hotel } from 'src/hotel/entities/hotel.entity';
export declare class TourService {
    private readonly tourRepository;
    private hotelRepository;
    constructor(tourRepository: Repository<Tour>, hotelRepository: Repository<Hotel>);
    create(tourDto: CreateTourDto): Promise<Tour>;
    findAll(): Promise<Tour[]>;
    findOne(id: number): Promise<Tour>;
    update(id: number, updateTourDto: UpdateTourDto): Promise<Tour>;
    remove(id: number): Promise<void>;
}

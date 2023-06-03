import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Hotel } from "./entities/hotel.entity";
import { CreateHotelDto } from "./dto/create-hotel.dto";
import { UpdateHotelDto } from "./dto/update-hotel.dto";


@Injectable()
export class HotelService
{
    constructor(@InjectRepository(Hotel)
    private readonly hotelRepository: Repository<Hotel>) {}

    async create(hotelDto: CreateHotelDto): Promise<Hotel>
    {
        const hotel = this.hotelRepository.create();
        hotel.name = hotelDto.name;
        hotel.location = hotelDto.location;
        hotel.description = hotelDto.description;
        hotel.price = hotelDto.price;
        await this.hotelRepository.save(hotel);
        return hotel;
    }
    
    async findOne(id:number)
    {
        return this.hotelRepository.findOne({
            where: {id},
        })
    }

    async findAll() : Promise<Hotel[]>
    {
        const hotel = await this.hotelRepository.find({

        })
        return hotel;
    }

    async update(id: number, updateHotel: UpdateHotelDto)
    {
        const hotel = await this.hotelRepository.findOne({where:{id}});
        hotel.name = updateHotel.name;
        hotel.location = updateHotel.location;
        hotel.description = updateHotel.description;
        hotel.price = updateHotel.price;
        await this.hotelRepository.save(hotel);
        return hotel;
    }
    
    async remove(id: number)
    {
        this.hotelRepository.delete({id});
    }
}
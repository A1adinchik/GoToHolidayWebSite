import { Injectable } from '@nestjs/common';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Tour } from './entities/tour.entity';
import { Hotel } from 'src/hotel/entities/hotel.entity';

@Injectable()
export class TourService 
{
  constructor(@InjectRepository(Tour)
  private readonly tourRepository: Repository<Tour>,
  @InjectRepository(Hotel)
  private hotelRepository: Repository<Hotel>) {}

  async create(tourDto: CreateTourDto): Promise<Tour>
  {
    const tour = this.tourRepository.create();
    tour.fullName = tourDto.fullName;
    tour.duration = tourDto.duration;
    tour.description = tourDto.description;
    tour.price = tourDto.price;
    if (tourDto.hotelIds) {
      tour.hotels = await this.hotelRepository.findByIds(tourDto.hotelIds);
    }

    return this.tourRepository.save(tour);
  }

  async findAll() {
    const tour = await this.tourRepository.find({
      
    })
    return tour;
  }

  async findOne(id: number) {
    return this.tourRepository.findOne({
      where: {id},
    })
  }

  async update(id: number, updateTourDto: UpdateTourDto) {
    const tour = await this.tourRepository.findOne( {where: {id}} );
    tour.fullName = updateTourDto.fullName;
    tour.duration = updateTourDto.duration;
    tour.description = updateTourDto.description;
    tour.price = updateTourDto.price;
    await this.tourRepository.save(tour);
    return tour;
  }

  async remove(id: number) {
    this.tourRepository.delete( {id} );
  }
}
import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { User } from 'src/user/entities/user.entity';
import { Tour } from 'src/tour/entities/tour.entity';
import { Hotel } from 'src/hotel/entities/hotel.entity';

@Module({
  controllers: [BookingController],
  providers: [BookingService],
  imports: [DatasourceModule,
  TypeOrmModule.forFeature([Booking, Tour, Hotel, User])]
})
export class BookingModule {}

import { Module } from '@nestjs/common';
import { TourService } from './tour.service';
import { TourController } from './tour.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tour } from './entities/tour.entity';
import { User } from 'src/user/entities/user.entity';
import { Hotel } from 'src/hotel/entities/hotel.entity';

@Module({
  controllers: [TourController],
  providers: [TourService],
  imports: [DatasourceModule,
  TypeOrmModule.forFeature([Tour, User, Hotel])]
})
export class TourModule {}
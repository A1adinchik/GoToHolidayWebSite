import { Module } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelController } from './hotel.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hotel } from './entities/hotel.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  controllers: [HotelController],
  providers: [HotelService],
  imports:[DatasourceModule,
  TypeOrmModule.forFeature([Hotel, User])]
})
export class HotelModule {}

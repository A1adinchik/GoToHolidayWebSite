import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTourDto {
    @IsString()
    readonly fullName: string;
  
    @IsNumber()
    readonly duration: number;
  
    @IsString()
    readonly description: string;
  
    @IsNumber()
    readonly price: number;
  
    @IsNumber({}, { each: true })
    @IsOptional()
    readonly hotelIds: number[];
}
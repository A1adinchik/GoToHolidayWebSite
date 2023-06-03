"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const hotel_entity_1 = require("./entities/hotel.entity");
let HotelService = class HotelService {
    constructor(hotelRepository) {
        this.hotelRepository = hotelRepository;
    }
    async create(hotelDto) {
        const hotel = this.hotelRepository.create();
        hotel.name = hotelDto.name;
        hotel.location = hotelDto.location;
        hotel.description = hotelDto.description;
        hotel.price = hotelDto.price;
        await this.hotelRepository.save(hotel);
        return hotel;
    }
    async findOne(id) {
        return this.hotelRepository.findOne({
            where: { id },
        });
    }
    async findAll() {
        const hotel = await this.hotelRepository.find({});
        return hotel;
    }
    async update(id, updateHotel) {
        const hotel = await this.hotelRepository.findOne({ where: { id } });
        hotel.name = updateHotel.name;
        hotel.location = updateHotel.location;
        hotel.description = updateHotel.description;
        hotel.price = updateHotel.price;
        await this.hotelRepository.save(hotel);
        return hotel;
    }
    async remove(id) {
        this.hotelRepository.delete({ id });
    }
};
HotelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(hotel_entity_1.Hotel)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], HotelService);
exports.HotelService = HotelService;
//# sourceMappingURL=hotel.service.js.map
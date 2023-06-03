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
exports.TourService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const tour_entity_1 = require("./entities/tour.entity");
const hotel_entity_1 = require("../hotel/entities/hotel.entity");
let TourService = class TourService {
    constructor(tourRepository, hotelRepository) {
        this.tourRepository = tourRepository;
        this.hotelRepository = hotelRepository;
    }
    async create(tourDto) {
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
        const tour = await this.tourRepository.find({});
        return tour;
    }
    async findOne(id) {
        return this.tourRepository.findOne({
            where: { id },
        });
    }
    async update(id, updateTourDto) {
        const tour = await this.tourRepository.findOne({ where: { id } });
        tour.fullName = updateTourDto.fullName;
        tour.duration = updateTourDto.duration;
        tour.description = updateTourDto.description;
        tour.price = updateTourDto.price;
        await this.tourRepository.save(tour);
        return tour;
    }
    async remove(id) {
        this.tourRepository.delete({ id });
    }
};
TourService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(tour_entity_1.Tour)),
    __param(1, (0, typeorm_2.InjectRepository)(hotel_entity_1.Hotel)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], TourService);
exports.TourService = TourService;
//# sourceMappingURL=tour.service.js.map
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
exports.BookingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const booking_entity_1 = require("./entities/booking.entity");
const user_entity_1 = require("../user/entities/user.entity");
const tour_entity_1 = require("../tour/entities/tour.entity");
const hotel_entity_1 = require("../hotel/entities/hotel.entity");
let BookingService = class BookingService {
    constructor(bookingRepository, userRepository, tourRepository, hotelRepository) {
        this.bookingRepository = bookingRepository;
        this.userRepository = userRepository;
        this.tourRepository = tourRepository;
        this.hotelRepository = hotelRepository;
    }
    async findAll() {
        const booking = await this.bookingRepository.find({});
        return booking;
    }
    findOne(id) {
        return this.bookingRepository.findOne({
            where: { id },
        });
    }
    async remove(id) {
        await this.bookingRepository.delete(id);
    }
    async create(bookingDto) {
        const booking = this.bookingRepository.create();
        booking.date = bookingDto.date ? new Date(bookingDto.date) : new Date();
        booking.user = await this.userRepository.findOne({ where: { id: bookingDto.userId } });
        booking.tour = await this.tourRepository.findOne({ where: { id: bookingDto.tourId } });
        booking.hotel = await this.hotelRepository.findOne({ where: { id: bookingDto.hotelId } });
        if (!booking.user || !booking.tour || !booking.hotel) {
            throw new Error('User, tour or hotel not found');
        }
        await this.bookingRepository.save(booking);
        return booking;
    }
    async update(id, bookingDto) {
        const booking = await this.bookingRepository.findOne({ where: { id: id } });
        if (!booking) {
            throw new Error('Booking not found');
        }
        if (bookingDto.userId) {
            booking.user = await this.userRepository.findOne({ where: { id: bookingDto.userId } });
        }
        if (bookingDto.tourId) {
            booking.tour = await this.tourRepository.findOne({ where: { id: bookingDto.tourId } });
        }
        if (bookingDto.hotelId) {
            booking.hotel = await this.hotelRepository.findOne({ where: { id: bookingDto.hotelId } });
        }
        if (!booking.user || !booking.tour || !booking.hotel) {
            throw new Error('User, tour or hotel not found');
        }
        await this.bookingRepository.save(booking);
        return booking;
    }
};
BookingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(booking_entity_1.Booking)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(tour_entity_1.Tour)),
    __param(3, (0, typeorm_1.InjectRepository)(hotel_entity_1.Hotel)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], BookingService);
exports.BookingService = BookingService;
//# sourceMappingURL=booking.service.js.map
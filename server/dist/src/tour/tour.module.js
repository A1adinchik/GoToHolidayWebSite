"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourModule = void 0;
const common_1 = require("@nestjs/common");
const tour_service_1 = require("./tour.service");
const tour_controller_1 = require("./tour.controller");
const datasource_module_1 = require("../datasource/datasource.module");
const typeorm_1 = require("@nestjs/typeorm");
const tour_entity_1 = require("./entities/tour.entity");
const user_entity_1 = require("../user/entities/user.entity");
const hotel_entity_1 = require("../hotel/entities/hotel.entity");
let TourModule = class TourModule {
};
TourModule = __decorate([
    (0, common_1.Module)({
        controllers: [tour_controller_1.TourController],
        providers: [tour_service_1.TourService],
        imports: [datasource_module_1.DatasourceModule,
            typeorm_1.TypeOrmModule.forFeature([tour_entity_1.Tour, user_entity_1.User, hotel_entity_1.Hotel])]
    })
], TourModule);
exports.TourModule = TourModule;
//# sourceMappingURL=tour.module.js.map
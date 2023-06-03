"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelModule = void 0;
const common_1 = require("@nestjs/common");
const hotel_service_1 = require("./hotel.service");
const hotel_controller_1 = require("./hotel.controller");
const datasource_module_1 = require("../datasource/datasource.module");
const typeorm_1 = require("@nestjs/typeorm");
const hotel_entity_1 = require("./entities/hotel.entity");
const user_entity_1 = require("../user/entities/user.entity");
let HotelModule = class HotelModule {
};
HotelModule = __decorate([
    (0, common_1.Module)({
        controllers: [hotel_controller_1.HotelController],
        providers: [hotel_service_1.HotelService],
        imports: [datasource_module_1.DatasourceModule,
            typeorm_1.TypeOrmModule.forFeature([hotel_entity_1.Hotel, user_entity_1.User])]
    })
], HotelModule);
exports.HotelModule = HotelModule;
//# sourceMappingURL=hotel.module.js.map
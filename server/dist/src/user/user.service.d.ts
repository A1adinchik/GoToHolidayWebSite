import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findByEmail(email: string): Promise<User>;
    create(userDto: CreateUserDto): Promise<User>;
    findOne(id: number): Promise<User>;
    findAll(): Promise<User[]>;
    update(id: number, updateUser: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<void>;
}

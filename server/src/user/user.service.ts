import { ConflictException, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import * as argon2 from "argon2";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class UserService
{
    constructor(@InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService) {}

    async findByEmail(email: string): Promise<User> {
        return await this.userRepository.findOne({
          where: {
            email,
          },
        });
    }      

    async create(userDto: CreateUserDto): Promise<{ user: User, token: string }>
    {
        const existingUser = await this.findByEmail(userDto.email);

        if (existingUser) {
          throw new ConflictException('User with this email already exists');
        }

        const user = this.userRepository.create();
        user.fullName = userDto.fullName;
        user.age = userDto.age;
        user.gender = userDto.gender;
        user.email = userDto.email;
        user.password = await argon2.hash(userDto.password);

        const token = this.jwtService.sign({ email: userDto.email })

        await this.userRepository.save(user);
        return { user, token };
    }
    
    async findOne(id:number)
    {
        return this.userRepository.findOne({
            where: {id},
        })
    }

    async findAll() : Promise<User[]>
    {
        const user = await this.userRepository.find({

        })
        return user;
    }

    async update(id: number, updateUser: UpdateUserDto)
    {
        const user = await this.userRepository.findOne({where:{id}});
        user.fullName = updateUser.fullName;
        user.age = updateUser.age;
        user.gender = updateUser.gender;
        await this.userRepository.save(user);
        return user;
    }
    
    async remove(id: number)
    {
        this.userRepository.delete({id});
    }
}

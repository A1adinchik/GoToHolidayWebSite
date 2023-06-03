import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/types/types';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    login(user: IUser): Promise<{
        id: string;
        email: string;
        token: string;
    }>;
}

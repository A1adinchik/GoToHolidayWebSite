import { IsEmail, MinLength } from "class-validator";

export class CreateUserDto {
    fullName: string;
    age: number;
    gender: string;

    @IsEmail()
    email: string;

    @MinLength(6, { message: 'Пароль должен быть больше 6 символов!' })
    password: string;
}

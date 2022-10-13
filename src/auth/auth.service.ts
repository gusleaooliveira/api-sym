import { CreateUserDto } from './../users/dto/create-user.dto';
import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';
import { Exeptions } from './auth.exeptions';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {

    }

    async validateUser({ email, password }: { email: string, password: string }) {
        const user = await this.usersService.findByEmail(email)
        if (!user) Exeptions.EmailIsNotFound()
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) Exeptions.InvalidPassword()
        return !!user && isMatch ? user : null
    }

    async singUp(user: CreateUserDto) {
        const existingEmail = await this.usersService.findByEmail(user.email)
        if (!!existingEmail === true) Exeptions.EmailAlreadyRegistered()

        return await this.usersService.create(user)

    }
}

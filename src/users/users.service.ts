import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) { }

    async createUser(userDto: Partial<User>): Promise<User> {
        const { email } = userDto;

        const checkUser = await this.UserModel.findOne({ email }).exec()

        if (checkUser) {
            throw new BadRequestException('Email already in use')
        }

        const user = new this.UserModel(userDto)

        return user.save()
    }
}

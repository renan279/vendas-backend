import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './interfaces/user.interface';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  private users: User[] = [];

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const saltOrRounds = 10;
    const passwordHashed = await hash(createUserDto.password, saltOrRounds);

    const user: User = {
      ...createUserDto,
      id: this.users.length + 1,
      password: passwordHashed
    }

    this.users.push(user);

    return user;

    // console.log('passwordHashed', passwordHashed);

    // return ({
    //   ...createUserDto,
    //   id: 1,
    // })
  }

  async getAllUser(): Promise<User[]> {
    return this.users;
  }

}

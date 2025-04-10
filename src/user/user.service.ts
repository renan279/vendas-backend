import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './interfaces/user.entity';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) { }
  // esse salva em memória
  // private users: UserEntity[] = [];

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const saltOrRounds = 10;
    const passwordHashed = await hash(createUserDto.password, saltOrRounds);

    return this.userRepository.save({
      ...createUserDto,
      type_user: 1,
      password: passwordHashed,
    });

    // const user: UserEntity = {
    //   ...createUserDto,
    //   id: this.users.length + 1,
    //   password: passwordHashed
    // }

    // this.users.push(user);

    // return user;

    // console.log('passwordHashed', passwordHashed);

    // return ({
    //   ...createUserDto,
    //   id: 1,
    // })
  }

  async getAllUser(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

}

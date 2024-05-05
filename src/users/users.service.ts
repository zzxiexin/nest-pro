import { Injectable, UseGuards } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '../users/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  findOne(username: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        username,
      },
    });
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.create({
      username: createUserDto.username,
      password: createUserDto.password,
    });
  }

  update(id: number, updateData: Partial<CreateUserDto>): Promise<any> {
    return this.userModel.update(updateData, { where: { id } });
  }

  removeOne(id: number): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: number): Promise<void> {
    const user = await this.removeOne(id);
    await user.destroy();
  }
}

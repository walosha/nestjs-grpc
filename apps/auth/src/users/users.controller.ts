import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import {
  CreateUserDto,
  FindOnelUserDto,
  PaginationDto,
  UpdateOneUserDto,
  User,
  UserServiceController,
  UserServiceControllerMethods,
} from 'libs/common';
import { Observable } from 'rxjs';

@Controller()
@UserServiceControllerMethods()
export class UsersController implements UserServiceController {
  constructor(private readonly usersService: UsersService) {}

  createUser(createUserDto: CreateUserDto): User {
    return this.usersService.create(createUserDto);
  }

  findAllUsers() {
    return this.usersService.findAll();
  }

  findOnelUser(findOnelUserDto: FindOnelUserDto): User {
    return this.usersService.findOne(findOnelUserDto.id);
  }

  updateOneUser(updateUserDto: UpdateOneUserDto) {
    return this.usersService.update(updateUserDto.id, updateUserDto);
  }

  removeUser(findOnelUserDto: FindOnelUserDto) {
    return this.usersService.remove(findOnelUserDto.id);
  }

  queryUsers(paginationDtoStream: Observable<PaginationDto>) {
    return this.usersService.queryUsers(paginationDtoStream);
  }
}

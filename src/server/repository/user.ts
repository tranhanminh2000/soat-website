import User, { IUser } from "../models/users";
import { BaseRepository, IUserRepository } from "./base-repository";

class UserRepository extends BaseRepository<IUser> implements IUserRepository {
  constructor() {
    super(User);
  }
  async getByEmail(email: string) {
    console.log("getByEmail", email);
    return await this.__model.findOne({ email });
  }
}

export default UserRepository;

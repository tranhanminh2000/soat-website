import { format } from "./../utils/string";
import { HttpStatusCode } from "axios";
import { IUserRepository } from "../repository/base-repository";
import { Message } from "../utils/constants/message";
import { generateAccessToken, generateRefreshToken } from "../utils/cypher";
import { SystemValidationError } from "../utils/error";

class UserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async validateAndSignUpUser(email: string, password: string) {
    const user = await this.userRepository.getByEmail(email);
    if (user) {
      throw new SystemValidationError(
        format(Message.ERROR.ALREADY_EXISTS.TXT, "email"),
        HttpStatusCode.Conflict
      );
    }

    const newUser = await this.userRepository.add({ email, password });

    return {
      accessToken: generateAccessToken(newUser),
      refreshToken: generateRefreshToken(newUser),
      data: { username: newUser.username, email: newUser.email },
    };
  }
}

export default UserService;

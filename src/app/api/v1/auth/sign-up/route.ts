// api/v1/auth/sign-up
import { withErrorHandling } from "@/server/utils/api/handler";
import UserService from "@/server/services/user";
import { signUpSchema } from "@/server/models/schemas";
import UserRepository from "@/server/repository/user";
import { responseJson } from "@/server/utils/api/response";

export const POST = withErrorHandling(async (req: Request) => {
  const { email, password } = await req.json();
  await signUpSchema.validate({ email, password });

  const userRepository = new UserRepository();
  const userService = new UserService(userRepository);
  const responseData = userService.validateAndSignUpUser(email, password);
  return responseJson(responseData);
});

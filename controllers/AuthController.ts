import { RouterContext } from "../deps.ts";
import { usersCollection } from "../mongo.ts";

class AuthController {
  login() {}
  register(ctx: RouterContext) {
    console.log("Resgitser");
  }
}

const authController = new AuthController();

export default authController;

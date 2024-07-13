import * as graphql from "@nestjs/graphql";
import { AuthenticationService } from "./authentication.service";

export class AuthenticationResolver {
  constructor(protected readonly service: AuthenticationService) {}

  @graphql.Mutation(() => String)
  async MetamaskLogin(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.MetamaskLogin(args);
  }
}

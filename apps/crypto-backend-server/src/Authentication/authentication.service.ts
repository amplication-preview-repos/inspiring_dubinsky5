import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthenticationService {
  constructor() {}
  async MetamaskLogin(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}

import * as graphql from "@nestjs/graphql";
import { CheckinResolverBase } from "./base/checkin.resolver.base";
import { Checkin } from "./base/Checkin";
import { CheckinService } from "./checkin.service";

@graphql.Resolver(() => Checkin)
export class CheckinResolver extends CheckinResolverBase {
  constructor(protected readonly service: CheckinService) {
    super(service);
  }
}

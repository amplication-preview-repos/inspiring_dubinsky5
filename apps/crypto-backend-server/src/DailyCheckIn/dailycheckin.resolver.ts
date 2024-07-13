import * as graphql from "@nestjs/graphql";
import { CheckInDto } from "../dailyCheckIn/CheckInDto";
import { DailyCheckInService } from "./dailycheckin.service";

export class DailyCheckInResolver {
  constructor(protected readonly service: DailyCheckInService) {}

  @graphql.Mutation(() => CheckInDto)
  async DailyCheckIn(
    @graphql.Args()
    args: CheckInDto
  ): Promise<CheckInDto> {
    return this.service.DailyCheckIn(args);
  }
}

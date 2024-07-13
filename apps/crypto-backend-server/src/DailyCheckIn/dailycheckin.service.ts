import { Injectable } from "@nestjs/common";
import { CheckInDto } from "../dailyCheckIn/CheckInDto";

@Injectable()
export class DailyCheckInService {
  constructor() {}
  async DailyCheckIn(args: CheckInDto): Promise<CheckInDto> {
    throw new Error("Not implemented");
  }
}

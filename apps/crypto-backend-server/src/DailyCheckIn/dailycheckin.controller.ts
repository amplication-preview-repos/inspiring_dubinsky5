import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DailyCheckInService } from "./dailycheckin.service";
import { CheckInDto } from "../dailyCheckIn/CheckInDto";

@swagger.ApiTags("dailyCheckIns")
@common.Controller("dailyCheckIns")
export class DailyCheckInController {
  constructor(protected readonly service: DailyCheckInService) {}

  @common.Post("/checkin")
  @swagger.ApiOkResponse({
    type: CheckInDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DailyCheckIn(
    @common.Body()
    body: CheckInDto
  ): Promise<CheckInDto> {
        return this.service.DailyCheckIn(body);
      }
}

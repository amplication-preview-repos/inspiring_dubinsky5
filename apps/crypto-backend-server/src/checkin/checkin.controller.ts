import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CheckinService } from "./checkin.service";
import { CheckinControllerBase } from "./base/checkin.controller.base";

@swagger.ApiTags("checkins")
@common.Controller("checkins")
export class CheckinController extends CheckinControllerBase {
  constructor(protected readonly service: CheckinService) {
    super(service);
  }
}

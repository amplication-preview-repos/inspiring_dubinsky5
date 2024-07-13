import { Module } from "@nestjs/common";
import { CheckinModuleBase } from "./base/checkin.module.base";
import { CheckinService } from "./checkin.service";
import { CheckinController } from "./checkin.controller";
import { CheckinResolver } from "./checkin.resolver";

@Module({
  imports: [CheckinModuleBase],
  controllers: [CheckinController],
  providers: [CheckinService, CheckinResolver],
  exports: [CheckinService],
})
export class CheckinModule {}

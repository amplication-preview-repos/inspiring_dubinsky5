import { Module } from "@nestjs/common";
import { DailyCheckInService } from "./dailycheckin.service";
import { DailyCheckInController } from "./dailycheckin.controller";
import { DailyCheckInResolver } from "./dailycheckin.resolver";

@Module({
  controllers: [DailyCheckInController],
  providers: [DailyCheckInService, DailyCheckInResolver],
  exports: [DailyCheckInService],
})
export class DailyCheckInModule {}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CheckinServiceBase } from "./base/checkin.service.base";

@Injectable()
export class CheckinService extends CheckinServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

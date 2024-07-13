import { CheckinWhereUniqueInput } from "./CheckinWhereUniqueInput";
import { CheckinUpdateInput } from "./CheckinUpdateInput";

export type UpdateCheckinArgs = {
  where: CheckinWhereUniqueInput;
  data: CheckinUpdateInput;
};

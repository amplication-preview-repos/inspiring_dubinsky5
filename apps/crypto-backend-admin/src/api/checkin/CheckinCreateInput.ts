import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CheckinCreateInput = {
  date?: Date | null;
  points?: number | null;
  user?: UserWhereUniqueInput | null;
};

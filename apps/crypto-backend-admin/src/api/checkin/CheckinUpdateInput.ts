import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CheckinUpdateInput = {
  date?: Date | null;
  points?: number | null;
  user?: UserWhereUniqueInput | null;
};

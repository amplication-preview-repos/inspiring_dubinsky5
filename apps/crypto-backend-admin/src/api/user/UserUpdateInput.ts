import { InputJsonValue } from "../../types";
import { CheckinUpdateManyWithoutUsersInput } from "./CheckinUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  metamaskId?: string | null;
  avatar?: string | null;
  checkinDays?: number | null;
  points?: number | null;
  checkins?: CheckinUpdateManyWithoutUsersInput;
};

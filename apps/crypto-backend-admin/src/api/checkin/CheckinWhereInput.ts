import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CheckinWhereInput = {
  id?: StringFilter;
  date?: DateTimeNullableFilter;
  points?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};

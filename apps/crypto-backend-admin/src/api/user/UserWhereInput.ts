import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { CheckinListRelationFilter } from "../checkin/CheckinListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  metamaskId?: StringNullableFilter;
  avatar?: StringNullableFilter;
  checkinDays?: IntNullableFilter;
  points?: IntNullableFilter;
  checkins?: CheckinListRelationFilter;
};

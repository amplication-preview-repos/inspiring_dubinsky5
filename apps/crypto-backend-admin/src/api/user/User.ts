import { JsonValue } from "type-fest";
import { Checkin } from "../checkin/Checkin";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  metamaskId: string | null;
  avatar: string | null;
  checkinDays: number | null;
  points: number | null;
  checkins?: Array<Checkin>;
};

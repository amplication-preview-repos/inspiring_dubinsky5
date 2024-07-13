import { User } from "../user/User";

export type Checkin = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  points: number | null;
  user?: User | null;
};

import { Checkin as TCheckin } from "../api/checkin/Checkin";

export const CHECKIN_TITLE_FIELD = "id";

export const CheckinTitle = (record: TCheckin): string => {
  return record.id?.toString() || String(record.id);
};

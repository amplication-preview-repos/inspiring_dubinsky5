import { SortOrder } from "../../util/SortOrder";

export type CheckinOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  date?: SortOrder;
  points?: SortOrder;
  userId?: SortOrder;
};

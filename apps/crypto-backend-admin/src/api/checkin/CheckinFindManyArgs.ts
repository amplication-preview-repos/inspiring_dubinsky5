import { CheckinWhereInput } from "./CheckinWhereInput";
import { CheckinOrderByInput } from "./CheckinOrderByInput";

export type CheckinFindManyArgs = {
  where?: CheckinWhereInput;
  orderBy?: Array<CheckinOrderByInput>;
  skip?: number;
  take?: number;
};

import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  firstname?: SortOrder;
  id?: SortOrder;
  lastname?: SortOrder;
  updatedAt?: SortOrder;
};

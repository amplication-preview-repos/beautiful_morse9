import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  firstname?: StringNullableFilter;
  id?: StringFilter;
  lastname?: StringNullableFilter;
};

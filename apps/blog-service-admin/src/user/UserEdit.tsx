import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="firstname" source="firstname" />
        <TextInput label="lastname" source="lastname" />
      </SimpleForm>
    </Edit>
  );
};

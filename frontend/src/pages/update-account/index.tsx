import { data } from "@assets/data/account-detail";
import FormLayout from "@components/forms/FormLayout";
import UpdateAccountForm from "@components/forms/UpdateAccountForm";
import React, { useEffect } from "react";

const UpdateAccount = () => {
  useEffect(() => {
    document.title = `Account - Edit (${data.username})`;
  }, []);
  return (
    <FormLayout>
      {/* <UpdateAccountForm /> */}
      Update Account
    </FormLayout>
  );
};

export default UpdateAccount;

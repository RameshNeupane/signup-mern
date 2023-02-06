import React, { useEffect } from "react";

const Account = () => {
  useEffect(() => {
    document.title = "Account - User";
  }, []);

  return <div>Account Detail</div>;
};

export default Account;

import React from "react";
import Facebook from "../icons/Facebook";
import Github from "../icons/Github";
import Instagram from "../icons/Instagram";
import IconLabelInput from "./IconLabelInput";

type SocialAccountsInputProps = {
  accounts: {
    facebook: string;
    instagram: string;
    github: string;
  };
};

const SocialAccountsInput: React.FC<SocialAccountsInputProps> = ({
  accounts,
}) => {
  return (
    <div className="flex flex-col w-full gap-1">
      <p>Social Accounts</p>
      <div className="flex flex-col gap-3">
        {/* facebook */}
        <IconLabelInput
          name="facebook"
          labelIcon={<Facebook />}
          url={accounts.facebook}
        />

        {/* instagram */}
        <IconLabelInput
          name="instagram"
          labelIcon={<Instagram />}
          url={accounts.instagram}
        />

        {/* github */}
        <IconLabelInput
          name="github"
          labelIcon={<Github />}
          url={accounts.github}
        />
      </div>
    </div>
  );
};

export default SocialAccountsInput;

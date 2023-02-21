import React from "react";
import { data } from "@/assets/data/account-detail";
import Button from "@/components/form-inputs/Button";
import { useNavigate } from "react-router-dom";
import InputText from "../form-inputs/InputText";
import InputEmail from "../form-inputs/InputEmail";
import Textarea from "../form-inputs/Textarea";
import Radio from "../form-inputs/Radio";
import RadioGroup from "../form-inputs/RadioGroup";
import UpdateImage from "../form-inputs/UpdateImage";
import SocialAccountsInput from "../form-inputs/SocialAccountsInput";
import LocationInputs from "../form-inputs/LocationInputs";
import UpdateDOB from "../form-inputs/UpdateDOB";

const UpdateAccountForm = () => {
  const navigate = useNavigate();

  // handle cancel
  const handleCancel = () => {
    navigate(`/account/${data.username}`);
  };

  return (
    <div className="w-full flex flex-col gap-8 items-center justify-center">
      <h1 className=" text-h1 font-bold">Update Account</h1>
      <form className=" w-full flex flex-col gap-4 items-center">
        {/* profile picture */}
        <UpdateImage imgSrc={data?.profile_picture} username={data?.username} />
        {/* username */}
        <InputText
          name="username"
          value={data?.username}
          placeholder="aaryn098"
        />

        {/* fullname */}
        <InputText
          name="fullname"
          value={data?.fullname}
          placeholder="Ramesh Neupane"
        />

        {/* email */}
        <InputEmail
          name="email"
          value={data?.email}
          placeholder="test@example.com"
        />

        {/* bio */}
        <Textarea name="bio" value={data?.bio} placeholder="explain yourself" />

        {/* date of birth */}
        <UpdateDOB dob={data.date_of_birth} />

        {/* mobile */}
        <InputText
          name="mobile"
          value={data?.mobile}
          placeholder="9876543210"
        />
        {/* gender */}
        <RadioGroup name="gender" checked={data?.gender} />

        {/* location */}
        <LocationInputs location={data.address} />

        {/* job */}
        <InputText
          name="job"
          value={data?.job}
          placeholder="software engineer"
        />

        {/* skills */}
        <InputText
          name="skills"
          value={data?.skills.join(", ")}
          placeholder="JS, React"
        />

        {/* social accounts */}
        <SocialAccountsInput accounts={data.social_accounts} />

        {/* website */}
        <InputText
          name="website"
          value={data?.website}
          placeholder="https://rameshneupane.github.io/"
        />

        {/* buttons */}
        <div className=" w-full flex items-center justify-center gap-2">
          <Button onClick={handleCancel}>Cancel</Button>
          <Button>Update</Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateAccountForm;

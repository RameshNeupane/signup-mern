import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Globe from "@components/icons/Globe";
import Github from "@components/icons/Github";
import Facebook from "@components/icons/Facebook";
import { data } from "@assets/data/account-detail";
import Button from "@components/form-inputs/Button";
import Instagram from "@components/icons/Instagram";
import MenuDropdown from "@components/MenuDropdown";
import LinkButton from "@components/links/LinkButton";

import { useSelector } from "react-redux";
import { RootState } from "@redux/root-reducer";
import { usersStateType } from "../../../src/types/user";

const Account = () => {
  const navigate = useNavigate();
  const usersState = useSelector<RootState, usersStateType>(
    (state) => state.users
  );

  const handleUpdate = () => {
    navigate(`/account/${usersState?.data?.username}/edit`);
  };

  useEffect(() => {
    document.title = `Account - ${usersState?.data?.username}`;
  }, []);

  useEffect(() => {
    if (usersState.status === "idle") {
      navigate("/");
    }
  }, [usersState.status, navigate]);

  if (usersState.status === "loading") {
    return <p>Loading...</p>;
  }

  if (usersState.status === "failed") {
    return <p>{usersState.error.message}</p>;
  }

  return (
    <div className=" w-[800px] p-8 mb-8 border-2 rounded-lg border-slate-600 dark:bg-slate-800 flex flex-col gap-4">
      {/* account header */}
      <div className="flex flex-row items-center justify-between px-2 border-b-2 border-b-black dark:border-b-slate-600">
        <h1 className=" text-h2 font-semibold">Account Detail</h1>
        <MenuDropdown />
      </div>

      {/* data display */}
      <div className="flex flex-col gap-4">
        <div className="flex float-row items-end justify-start gap-6 pl-6 pb-1 border-b-2 border-b-black dark:border-b-slate-600">
          {/* profile picture */}
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-black dark:border-white">
            <img
              src={data?.profile_picture}
              alt={usersState?.data?.username}
              className="object-cover object-center w-48 h-48"
              title={usersState?.data?.username}
            />
          </div>

          <div className="mb-4 flex flex-col gap-2">
            {/* username and fullname */}
            <div>
              {data?.username && (
                <h3 className="text-h3 font-medium">
                  {usersState?.data?.username}
                </h3>
              )}
              {data?.fullname && (
                <h4 className="text-h4 font-medium">
                  {usersState?.data?.fullname}
                </h4>
              )}
            </div>

            {/* social accounts */}
            <div className="flex flex-row items-center gap-3">
              {/* facebook */}
              {usersState?.data?.social_accounts?.facebook && (
                <LinkButton
                  href={usersState?.data?.social_accounts.facebook}
                  title="Facebook"
                >
                  <Facebook />
                </LinkButton>
              )}

              {/* instagram */}
              {usersState?.data?.social_accounts?.instagram && (
                <LinkButton
                  href={usersState?.data?.social_accounts.instagram}
                  title="Instagram"
                >
                  <Instagram />
                </LinkButton>
              )}

              {/* github */}
              {usersState?.data?.social_accounts?.github && (
                <LinkButton
                  href={usersState?.data?.social_accounts.github}
                  title="Github"
                >
                  <Github />
                </LinkButton>
              )}

              {/* website */}
              {usersState?.data?.website && (
                <LinkButton href={usersState?.data?.website} title="Website">
                  <Globe />
                </LinkButton>
              )}
            </div>
          </div>
        </div>

        {/* bio */}
        <div className="flex flex-col px-4 gap-1">
          <span className="w-max text-h6 font-medium border-b-2 border-b-black dark:border-b-slate-600">
            Bio
          </span>
          <span>{usersState?.data?.bio ? usersState?.data?.bio : "---"}</span>
        </div>

        {/* email */}
        <div className="flex flex-col px-4 gap-1">
          <span className="w-max text-h6 font-medium border-b-2 border-b-black dark:border-b-slate-600">
            Email
          </span>
          <span>
            {usersState?.data?.email ? usersState?.data?.email : "---"}
          </span>
        </div>

        {/* mobile */}
        <div className="flex flex-col px-4 gap-1">
          <span className="w-max text-h6 font-medium border-b-2 border-b-black dark:border-b-slate-600">
            Mobile
          </span>
          <span>
            {usersState?.data?.mobile ? usersState?.data?.mobile : "---"}
          </span>
        </div>

        {/* date of birth */}
        <div className="flex flex-col px-4 gap-1">
          <span className="w-max text-h6 font-medium border-b-2 border-b-black dark:border-b-slate-600">
            Date of Birth
          </span>
          <span>
            {usersState?.data?.date_of_birth
              ? new Date(usersState?.data?.date_of_birth)
                  .toISOString()
                  .slice(0, 10)
              : "---"}
          </span>
        </div>

        {/* gender */}
        <div className="flex flex-col px-4 gap-1">
          <span className="w-max text-h6 font-medium border-b-2 border-b-black dark:border-b-slate-600">
            Gender
          </span>
          <span>
            {usersState?.data?.gender ? usersState?.data?.gender : "---"}
          </span>
        </div>

        {/* location */}
        <div className="flex flex-col px-4 gap-1">
          <span className="w-max text-h6 font-medium border-b-2 border-b-black dark:border-b-slate-600">
            Location
          </span>
          <span>
            {usersState?.data?.address?.city &&
            usersState?.data?.address?.country
              ? `${usersState?.data?.address.city}, ${usersState?.data?.address.country}`
              : "---"}
          </span>
        </div>

        {/* job */}
        <div className="flex flex-col px-4 gap-1">
          <span className="w-max text-h6 font-medium border-b-2 border-b-black dark:border-b-slate-600">
            Job
          </span>
          <span>{usersState?.data?.job ? usersState?.data?.job : "---"}</span>
        </div>

        {/* skills */}
        <div className="flex flex-col px-4 gap-1">
          <span className="w-max text-h6 font-medium border-b-2 border-b-black dark:border-b-slate-600">
            Skills
          </span>
          <span>
            {usersState?.data?.skills?.length
              ? usersState?.data?.skills.join(", ")
              : "---"}
          </span>
        </div>

        {/* update account button */}
        <Button onClick={handleUpdate}>Update Account</Button>
      </div>
    </div>
  );
};

export default Account;

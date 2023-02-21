import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Globe from "@/components/icons/Globe";
import Github from "@/components/icons/Github";
import Facebook from "@/components/icons/Facebook";
import { data } from "@/assets/data/account-detail";
import MenuDropdown from "@/components/MenuDropdown";
import Button from "@/components/form-inputs/Button";
import Instagram from "@/components/icons/Instagram";
import LinkButton from "@/components/links/LinkButton";

const Account = () => {
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`/account/${data.username}/edit`);
  };

  useEffect(() => {
    document.title = `Account - ${data.username}`;
  }, []);

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
              alt={data.username}
              className="object-cover object-center w-48 h-48"
              title={data.username}
            />
          </div>

          <div className="mb-4 flex flex-col gap-2">
            {/* username and fullname */}
            <div>
              {data?.username && (
                <h3 className="text-h3 font-medium">{data?.username}</h3>
              )}
              {data?.fullname && (
                <h4 className="text-h4 font-medium">{data?.fullname}</h4>
              )}
            </div>

            {/* social accounts */}
            <div className="flex flex-row items-center gap-3">
              {/* facebook */}
              {data?.social_accounts?.facebook && (
                <LinkButton
                  href={data.social_accounts.facebook}
                  title="Facebook"
                >
                  <Facebook />
                </LinkButton>
              )}

              {/* instagram */}
              {data?.social_accounts?.instagram && (
                <LinkButton
                  href={data.social_accounts.instagram}
                  title="Instagram"
                >
                  <Instagram />
                </LinkButton>
              )}

              {/* github */}
              {data?.social_accounts?.github && (
                <LinkButton href={data.social_accounts.github} title="Github">
                  <Github />
                </LinkButton>
              )}

              {/* website */}
              {data?.website && (
                <LinkButton href={data.website} title="Website">
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
          <span>{data?.bio ? data.bio : "---"}</span>
        </div>

        {/* email */}
        <div className="flex flex-col px-4 gap-1">
          <span className="w-max text-h6 font-medium border-b-2 border-b-black dark:border-b-slate-600">
            Email
          </span>
          <span>{data?.email ? data.email : "---"}</span>
        </div>

        {/* mobile */}
        <div className="flex flex-col px-4 gap-1">
          <span className="w-max text-h6 font-medium border-b-2 border-b-black dark:border-b-slate-600">
            Mobile
          </span>
          <span>{data?.mobile ? data.mobile : "---"}</span>
        </div>

        {/* date of birth */}
        <div className="flex flex-col px-4 gap-1">
          <span className="w-max text-h6 font-medium border-b-2 border-b-black dark:border-b-slate-600">
            Date of Birth
          </span>
          <span>{data?.date_of_birth ? data.date_of_birth : "---"}</span>
        </div>

        {/* gender */}
        <div className="flex flex-col px-4 gap-1">
          <span className="w-max text-h6 font-medium border-b-2 border-b-black dark:border-b-slate-600">
            Gender
          </span>
          <span>{data?.gender ? data.gender : "---"}</span>
        </div>

        {/* location */}
        <div className="flex flex-col px-4 gap-1">
          <span className="w-max text-h6 font-medium border-b-2 border-b-black dark:border-b-slate-600">
            Location
          </span>
          <span>
            {data?.address?.city && data?.address?.country
              ? `${data.address.city}, ${data.address.country}`
              : "---"}
          </span>
        </div>

        {/* job */}
        <div className="flex flex-col px-4 gap-1">
          <span className="w-max text-h6 font-medium border-b-2 border-b-black dark:border-b-slate-600">
            Job
          </span>
          <span>{data?.job ? data.job : "---"}</span>
        </div>

        {/* skills */}
        <div className="flex flex-col px-4 gap-1">
          <span className="w-max text-h6 font-medium border-b-2 border-b-black dark:border-b-slate-600">
            Skills
          </span>
          <span>{data?.skills?.length ? data.skills.join(", ") : "---"}</span>
        </div>

        {/* update account button */}
        <Button onClick={handleUpdate}>Update Account</Button>
      </div>
    </div>
  );
};

export default Account;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Globe from "@/components/icons/Globe";
import Github from "@/components/icons/Github";
import Facebook from "@/components/icons/Facebook";
import { data } from "@/assets/data/account-detail";
import MenuDropdown from "@/components/MenuDropdown";
import Button from "@/components/form-inputs/Button";
import Instagram from "@/components/icons/Instagram";

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
        {/* image and username section */}
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

          {/* username and fullname */}
          <div className="mb-4">
            {data?.username && (
              <h3 className="text-h3 font-medium">{data?.username}</h3>
            )}
            {data?.fullname && (
              <h4 className="text-h4 font-medium">{data?.fullname}</h4>
            )}
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
          <span>
            {data?.skills?.length
              ? data.skills.map((skill: string, index) => {
                  return index !== data.skills.length - 1
                    ? `${skill} | `
                    : skill;
                })
              : "---"}
          </span>
        </div>

        {/* social accounts */}
        <div className="flex flex-col px-4 gap-1">
          <span className="w-max text-h6 font-medium border-b-2 border-b-black dark:border-b-slate-600">
            Social Accounts
          </span>
          {data?.social_accounts?.facebook ||
          data?.social_accounts?.instagram ||
          data?.social_accounts?.github ? (
            <div className="flex flex-col gap-2">
              {/* facebook */}
              {data?.social_accounts?.facebook && (
                <a
                  href={data.social_accounts.facebook}
                  target="_blank"
                  className="relative w-max flex items-center gap-2 hover:text-cyan-600"
                >
                  <span className="inline w-6 h-6">
                    <Facebook />
                  </span>
                  <span>{data.social_accounts.facebook}</span>
                </a>
              )}
              {/* instagram */}
              {data?.social_accounts?.instagram && (
                <a
                  href={data.social_accounts.instagram}
                  target="_blank"
                  className="relative w-max flex items-center gap-2 hover:text-cyan-600"
                >
                  <span className="inline w-6 h-6">
                    <Instagram />
                  </span>
                  <span>{data.social_accounts.instagram}</span>
                </a>
              )}
              {/* github */}
              {data?.social_accounts?.github && (
                <a
                  href={data.social_accounts.github}
                  target="_blank"
                  className="relative w-max flex items-center gap-2 hover:text-cyan-600"
                >
                  <span className="inline w-6 h-6">
                    <Github />
                  </span>
                  <span>{data.social_accounts.github}</span>
                </a>
              )}
            </div>
          ) : (
            <span>---</span>
          )}
        </div>

        {/* portfolio website */}
        <div className="flex flex-col px-4 gap-1">
          <span className="w-max text-h6 font-medium border-b-2 border-b-black dark:border-b-slate-600">
            Website
          </span>
          {data?.website ? (
            <a
              href={data.website}
              target="_blank"
              className="relative w-max flex items-center gap-2 hover:text-cyan-600"
            >
              <span className="inline w-6 h-6">
                <Globe />
              </span>
              <span>{data.website}</span>
            </a>
          ) : (
            <span>---</span>
          )}
        </div>
        {/* update account button */}
        <Button onClick={handleUpdate}>Update Account</Button>
      </div>
    </div>
  );
};

export default Account;

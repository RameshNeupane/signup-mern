import React, { useEffect } from "react";

import { data } from "@/assets/data/account-detail";
import MenuDropdown from "@/components/MenuDropdown";

const Account = () => {
  useEffect(() => {
    document.title = `Account - ${data.username}`;
  }, []);

  return (
    <div className=" w-[800px] p-8 border-2 rounded-lg border-slate-600 dark:bg-slate-800 flex flex-col gap-4">
      {/* header */}
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
        {data?.bio && (
          <div className="flex flex-col px-4 gap-1">
            <span className="w-max text-h6 font-medium border-b-2 border-b-black dark:border-b-slate-600">
              Bio
            </span>
            <span>{data?.bio}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;

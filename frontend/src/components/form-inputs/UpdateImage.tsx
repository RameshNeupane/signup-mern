import React from "react";
import Camera from "../icons/Camera";

type UpdateImageProps = {
  imgSrc: string;
  username: string;
};

const UpdateImage: React.FC<UpdateImageProps> = ({ imgSrc, username }) => {
  return (
    <div className=" w-48 h-48 relative">
      <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-black dark:border-white">
        <img
          src={imgSrc}
          alt={username}
          className="object-cover object-center w-48 h-48"
          title={username}
        />
      </div>

      <div
        role="button"
        tabIndex={0}
        className=" w-12 h-12 p-2 absolute -bottom-1 left-1/2 -translate-x-1/2 rounded bg-slate-800 flex items-center justify-center border-2 border-slate-600 hover:bg-slate-600"
      >
        <Camera />
      </div>
    </div>
  );
};

export default UpdateImage;

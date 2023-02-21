import React, { ChangeEvent, useState } from "react";
import Camera from "../icons/Camera";

type UpdateImageProps = {
  imgSrc: string;
  username: string;
};

const UpdateImage: React.FC<UpdateImageProps> = ({ imgSrc, username }) => {
  const [selectImage, setSelectImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState(imgSrc);

  // handle update image
  const handleImageSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectImage(file);
      const objUrl = URL.createObjectURL(file);
      setImageUrl(objUrl);
    }
  };

  return (
    <div className="w-full flex flex-col gap-2 items-center justify-center">
      <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-black dark:border-white">
        <img
          src={imageUrl}
          alt={username}
          className="object-cover object-center w-48 h-48"
          title={username}
        />
      </div>

      <div className="w-10 h-10 relative -translate-y-8 -translate-x-8">
        <label
          htmlFor="uploadImage"
          className="w-full h-full p-1.5 bg-slate-800 border-2 border-slate-600 absolute rounded hover:bg-slate-600 cursor-pointer"
          title="Change Profile Picture"
        >
          <Camera />
        </label>
        <input
          type="file"
          name="uploadImage"
          id="uploadImage"
          accept="image/png, image/jpeg"
          onChange={handleImageSelect}
          className="hidden w-full h-full"
        />
      </div>
    </div>
  );
};

export default UpdateImage;

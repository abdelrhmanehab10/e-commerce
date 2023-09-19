"use client";

import { FC, useState } from "react";
import { CldImage, CldUploadButton, CldUploadWidget } from "next-cloudinary";
import { Button } from "./ui/button";
import { X } from "lucide-react";

type UploadButtonProps = {
  onChange: (id?: string) => void;
};

type UploadResult = {
  info: { public_id: string };
};

const UploadButton: FC<UploadButtonProps> = ({ onChange }) => {
  const [imageId, setImageId] = useState("");
  return (
    <div className="">
      {imageId ? (
        <div className="relative w-fit">
          <CldImage
            width="100"
            height="100"
            src={imageId}
            sizes="100vw"
            alt="Description of my image"
            className="rounded my-2 border-2 border-black/80 p-3"
          />
          <X
            onClick={() => setImageId("")}
            className="absolute top-0 -right-6 w-5 h-5 cursor-pointer"
          />
        </div>
      ) : (
        <Button
          asChild
          variant={"outline"}
          className="w-full border border-[#23A6F0]"
        >
          <CldUploadButton
            onUpload={(result: UploadResult) => {
              setImageId(result.info.public_id);
              onChange(result.info.public_id);
            }}
            uploadPreset="gvrnszjm"
          />
        </Button>
      )}
    </div>
  );
};

export default UploadButton;

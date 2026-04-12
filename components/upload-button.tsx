"use client";

import { FC, useState } from "react";
import {
  CldImage,
  CldUploadButton,
  type CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { Button } from "./ui/button";
import { X } from "lucide-react";

type UploadButtonProps = {
  onChange: (id?: string) => void;
};

function getPublicId(result: CloudinaryUploadWidgetResults): string | undefined {
  if (!result.info || typeof result.info === "string") {
    return undefined;
  }

  return "public_id" in result.info ? result.info.public_id : undefined;
}

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
            onClick={() => {
              setImageId("");
              onChange(undefined);
            }}
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
            onSuccess={(result) => {
              const publicId = getPublicId(result);
              if (!publicId) {
                return;
              }

              setImageId(publicId);
              onChange(publicId);
            }}
            uploadPreset="gvrnszjm"
          />
        </Button>
      )}
    </div>
  );
};

export default UploadButton;

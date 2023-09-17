import { useState } from "react";
import { CldImage, CldUploadButton } from "next-cloudinary";
import { Button } from "./ui/button";

const UploadButton = () => {
  const [imgInfo, setImgInfo] = useState<any>();

  return (
    <div className="">
      {imgInfo ? (
        <CldImage
          width="100"
          height="100"
          src={imgInfo?.public_id}
          sizes="100vw"
          alt="Description of my image"
          className="rounded my-2"
        />
      ) : (
        <Button
          asChild
          variant={"outline"}
          className="w-full border border-[#23A6F0]"
        >
          <CldUploadButton
            onUpload={(result) => {
              setImgInfo(result.info);
            }}
            uploadPreset="gvrnszjm"
          />
        </Button>
      )}
    </div>
  );
};

export default UploadButton;

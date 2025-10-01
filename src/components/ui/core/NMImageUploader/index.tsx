"use client"
import { Dispatch, SetStateAction, useState } from "react";
import { Input } from "../../input";

import { cn } from "@/lib/utils";

type TImageUploaderProps={
    label?:string,
    className?:string,
    setImageFile:Dispatch<SetStateAction<[] | File[]>>,
    setImagePreview:Dispatch<SetStateAction< [] | string[]>>
}

const NMImageUploader = ({label="Upload Image",setImageFile,setImagePreview,className}:TImageUploaderProps) => {

    
const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const files = event.target.files;
  if (!files) return;

  const fileArray = Array.from(files);

  setImageFile((prev) => [...prev, ...fileArray]);

  fileArray.forEach((file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview((prev) => [...prev, reader.result as string]);
    };
    reader.readAsDataURL(file);
  });

  event.target.value = "";
};

    return (
        <div className={cn("flex flex-col items-center w-full gap-4", className)}>
            <Input 
            onChange={handleImageChange} 
            type="file" multiple 
            accept="image/*"
            className="hidden"
            id="image-uploader"/>
            <label  className="w-full h-36 md:size-36 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer text-center text-sm text-gray-500 hover:bg-gray-50 transition" htmlFor="image-uploader"> {label}</label>
           
        </div>
    );
};

export default NMImageUploader;
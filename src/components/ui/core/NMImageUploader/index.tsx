"use client"
import { useState } from "react";
import { Input } from "../../input";

const NMImageUploader = () => {

    const [imageFile,setImageFile]=useState<File[] | [] >([])
    const handleImageChange=(event : React.ChangeEvent<HTMLInputElement> )=>{
        const files=event.target.files![0] ;
        setImageFile((prev)=>[...prev,files])
    }

    console.log(imageFile)

    return (
        <div>
            <Input 
            onChange={handleImageChange} 
            type="file" multiple 
            accept="image/*"
            className="hidden"
            id="image-uploader"/>
            <label  className="w-full h-36 md:size-36 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer text-center text-sm text-gray-500 hover:bg-gray-50 transition" htmlFor="image-uploader"> image upload</label>
        </div>
    );
};

export default NMImageUploader;
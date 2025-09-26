"use client"
import { Dispatch, SetStateAction, useState } from "react";
import { Input } from "../../input";
import Image from "next/image";

type TImageUploaderProps={
    imageFile:File[],
    setImageFile:Dispatch<SetStateAction<[] | File[]>>
}

const NMImageUploader = ({imageFile,setImageFile}:TImageUploaderProps) => {

    
    const [imagePreview,setImagePreview]=useState<string[] | [] >([])

    const handleImageChange=(event : React.ChangeEvent<HTMLInputElement> )=>{
        const file=event.target.files![0] ;
        setImageFile((prev)=>[...prev,file])

        if(file){
            const reader=new FileReader()
            reader.onloadend=()=>{
                setImagePreview((prev)=>[...prev,reader.result as string])
            }

            reader.readAsDataURL(file)

        }

        event.target.value =''
    }

   

    return (
        <div>
            <Input 
            onChange={handleImageChange} 
            type="file" multiple 
            accept="image/*"
            className="hidden"
            id="image-uploader"/>
            <label  className="w-full h-36 md:size-36 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer text-center text-sm text-gray-500 hover:bg-gray-50 transition" htmlFor="image-uploader"> image upload</label>
            <div>
                {
                    imagePreview.map((preview,index)=><Image key={index} src={preview} alt="Image" width={400} height={400} />)
                }
            </div>
        </div>
    );
};

export default NMImageUploader;
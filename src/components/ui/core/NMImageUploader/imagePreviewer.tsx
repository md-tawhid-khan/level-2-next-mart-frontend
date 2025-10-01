import { X } from "lucide-react";
import { Button } from "../../button";
import { Dispatch } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type TImagePreviewer={
    setImageFiles:Dispatch<React.SetStateAction<File[]>>;
    imagePreview:string[];
    setImagePreview:Dispatch<React.SetStateAction<string[]>>;
    className?:string
}


const ImagePreviewer=({
    setImageFiles,
    imagePreview,
    setImagePreview,
    className
}:TImagePreviewer)=>{

   const handleRemove=(index:number)=>{
       setImageFiles((prev)=>prev.filter((_,idx)=>idx !==index)) ;
       setImagePreview((prev)=>prev.filter((_,idx)=>idx !==index))
   } ;

   return (
    <div className={cn({className})}>
        {
            imagePreview.map((preview,index)=>(<div key={index} className="relative  w-36 h-36 rounded-md overflow-hidden border border-dashed border-gray-300">
               <Image width={500} height={500} src={preview} alt={`Preview ${index+1}`}/> 
                <Button
                onClick={()=>handleRemove(index)}
                 className="bg-red-300 hover:bg-red-400 absolute -top-0 -right-0 w-6 h-6 p-0 rounded-full">
                    <X className="w-4 h-4" />
                </Button>
            </div>))
        }
    </div>
   )
}

export default ImagePreviewer
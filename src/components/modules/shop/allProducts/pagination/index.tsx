import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const TablePagination = ({totalPages}:{totalPages:number}) => {
    const [currentPage,setCurrentPage]=useState(1)
    const pathName=usePathname()
    const router=useRouter()
   
    
    

    const handlePre=()=>{
        if(currentPage>1){
            router.push(`${pathName}?page=${currentPage-1}`)
            setCurrentPage(currentPage-1)
        }
    }

    const handleNext=()=>{
        if(currentPage<10){
             router.push(`${pathName}?page=${currentPage+1}`)
            setCurrentPage(currentPage+1)
        }
    }

    return (
        <div className="flex items-center justify-center my-5">
            <Button
            disabled={currentPage<=1}
            onClick={handlePre}
            variant='outline'
            size='sm'
            className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
            ><ArrowLeft/></Button>
            {
                [...Array(totalPages)]?.map((_,index)=>(<Button
            onClick={()=>{
                router.push(`${pathName}?page=${index+1}`)
                setCurrentPage(index+1)
            }}
            variant={currentPage == (index+1) ?"default" : "outline"}
            size='sm'
            className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
             key={index}>{index+1}</Button>))
            }
            <Button 
             disabled={currentPage>=totalPages}
            onClick={handleNext}
            variant="outline"
            size='sm'
            className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"><ArrowRight/></Button>
        </div>
    );
};

export default TablePagination;
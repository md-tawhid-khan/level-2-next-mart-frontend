"use client"
import { NMTable } from "@/components/ui/core/NHTable";
import CreateBrandModel from "./CreateBrandModel";
import { ColumnDef } from "@tanstack/react-table";
import { Trash } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import { TBrandData } from "@/types";
import { DeleteBrandModal } from "./deleteBrandModal";
import { deleteSingleBrand } from "@/services/brand";

const ManageBrand = ({brandData}) => {
  const [brandId,setBrandId]=useState(null)
    const [brandName,setBrandName]=useState(null)
    const [isModalOpen,setIsModalOpen]=useState(false)
    const [isLoading,setIsLoading]=useState(false)
  
    const handleDelete=async(data)=>{
      setBrandId(data?._id) ;
       setBrandName(data?.name)
      setIsModalOpen(true)
    }


    const handleDeleteConfirm=async()=>{
    try {
      setIsLoading(true)
      if(brandId){
        
     const res=await deleteSingleBrand(brandId!);
     console.log(res)
     if(res.success){
      toast.success(res.message)
     }else{
      toast.error(res.message)
     }
    }
      
    } catch (error) {
     console.log(error) 
    }
    setIsLoading(false)
  }


 

     const columns: ColumnDef<TBrandData>[] = [
    {
      accessorKey: "name",
      header: () => <div>Brand Name</div>,
      cell: ({ row }) => (
          <div className="flex items-center space-x-3">
          <Image
            src={row.original.logo}
            alt={row.original.name}
            width={40}
            height={40}
            className="w-8 h-8 rounded-full"
          />
          <span className="truncate">{row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: "isActive",
      header: () => <div>isActive</div>,
      cell: ({ row }) => (
           <div>
          {row.original.isActive ? (
            <p className="text-green-500 border bg-green-100 w-14 text-center px-1 rounded">
              True
            </p>
          ) : (
            <p className="text-red-500 border bg-red-100 w-14 text-center px-1 rounded">
              False
            </p>
          )}
        </div>
      ),
    },
    {
      accessorKey: "action",
      header: () => <div>Action</div>,
      cell: ({ row }) => (
          <button
          className="text-red-500 cursor-pointer"
          title="Delete" 
          onClick={()=>handleDelete(row.original)}
        >
          <Trash className="w-5 h-5" />
        </button>
      ),
    },
  ];


    return (
        <div>
            <div className="flex justify-between items-center p-5">
            <h1>Manage Brand </h1>
            <CreateBrandModel/>
            </div>
            <NMTable columns={columns} data={brandData} />
      <DeleteBrandModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} onConfirm={handleDeleteConfirm} categoryName={brandName} isLoading={isLoading}/>
        </div>
    );
};

export default ManageBrand;
"use client"
import { NMTable } from "@/components/ui/core/NHTable";
import CreateCategoryModal from "./createCategoryModal";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { ICategory } from "@/types";

import { Trash } from "lucide-react";
import { useState } from "react";
import DeleteCategoryModal from "./deleteCategoryModal";
import { deleteSingleCategory } from "@/services/category";
import { toast } from "sonner";


type TCategoriesProps = {
  categories: ICategory[];
};

const ManageCategories = ({ categories }:TCategoriesProps) => {

  const [categoryId,setCategoryId]=useState(null)
  const [categoryName,setCategoryName]=useState(null)
  const [isModalOpen,setIsModalOpen]=useState(false)
  const [isLoading,setIsLoading]=useState(false)

  const handleDelete=async(data)=>{
    setCategoryId(data?._id) ;
     setCategoryName(data?.name)
    setIsModalOpen(true)
  }

  

  const handleDeleteConfirm=async()=>{
    try {
      setIsLoading(true)
      if(categoryId){
        
     const res=await deleteSingleCategory(categoryId!);
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

  const columns: ColumnDef<ICategory>[] = [
    {
      accessorKey: "name",
      header: () => <div>Category Name</div>,
      cell: ({ row }) => (
          <div className="flex items-center space-x-3">
          <Image
            src={row.original.icon}
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
      <div className="flex items-center justify-between p-5">
        <h1 className="text-2xl font-bold">Manage Category</h1>
        <CreateCategoryModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
      </div>
      <NMTable columns={columns} data={categories} />
      <DeleteCategoryModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} onConfirm={handleDeleteConfirm} categoryName={categoryName} isLoading={isLoading}/>
    </div>
  );
};

export default ManageCategories;

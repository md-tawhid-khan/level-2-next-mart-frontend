"use client"
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { NMTable } from "@/components/ui/core/NHTable";
import { TPorduct } from "@/types";
import { Edit, Eye, Plus, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DiscountModal from "./discountModal";
import PaginationProduct from "./pagination";


const ManageProducts= ({products}:{products:TPorduct[]}) => {
  const [selectProductId , setSelectProductId]=useState<string[] | []>([])
   const router=useRouter()

    const handleView=(data)=>{
        console.log('this is handle view',data)
    }

    const handleDelete=(data)=>{
      console.log('handle product delete ',data)
    }

    const columns = [
       {
    id: "select",
    header: ({ table }:any) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }:any) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => {
          if(value){
            setSelectProductId((prev) => [...prev, row.original._id]);
          }else{
           setSelectProductId(selectProductId.filter(id=>id !== row?.original?._id))
          }
          row.toggleSelected(!!value)}
        }
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },


    {
      accessorKey: "name",
      header: "Product Name",
      cell: ({ row }:any) => (
        <div className="flex items-center space-x-3">
          <Image
            src={row.original.imageUrls[0]}
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
      accessorKey: "category",
      header: "Category",
      cell: ({ row }:any) => <span>{row.original.category.name}</span>,
    },
    {
      accessorKey: "brand",
      header: "Brand",
      cell: ({ row }:any) => <span>{row.original.brand.name}</span>,
    },
    {
      accessorKey: "stock",
      header: "Stock",
      cell: ({ row }:any) => <span>{row.original.stock}</span>,
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }:any) => <span>$ {row.original.price.toFixed(2)}</span>,
    },
    {
      accessorKey: "offerPrice",
      header: "Ofter Price",
      cell: ({ row }:any) => (
        <span>
          $ {row.original.offerPrice ? row.original.offerPrice.toFixed(2) : "0"}
        </span>
      ),
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }:any) => (
        <div className="flex items-center space-x-3">
          <button
            className="text-gray-500 hover:text-blue-500"
            title="View"
            onClick={() => handleView(row?.original)}
          >
            <Eye className="w-5 h-5" />
          </button>

          <button
            className="text-gray-500 hover:text-green-500"
            title="Edit"
        onClick={() =>
            router.push(
            `/user/shop/all-products/update-product/${row.original._id}`
            )
        }
          >
            <Edit className="w-5 h-5" />
          </button>

          <button
            className="text-gray-500 hover:text-red-500"
            title="Delete"
            onClick={() => handleDelete(row.original._id)}
          >
            <Trash className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];
    return (
        <div>
        <div className="flex justify-between items-center p-5">
            <h1>Manage Products </h1>
            <div className="flex gap-3">
              <Link href="/user/shop/all-products/add-product">
            <Button className="cursor-pointer">create products <Plus/></Button>          
            </Link>
          <DiscountModal selectProductId={selectProductId} setSelectProductId={setSelectProductId}/>
            </div>
            
        </div>
         
         <NMTable columns={columns} data={products || []} />
         <PaginationProduct/>
         </div>
    );
};

export default ManageProducts;
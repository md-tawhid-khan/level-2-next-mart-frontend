"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { NMTable } from "@/components/ui/core/NHTable";
import TablePagination from "@/components/ui/core/NHTable/tablePagination";
import { TCoupon, TMeta,} from "@/types";
import {format} from "date-fns"
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Eye, Trash } from "lucide-react";

import { useRouter } from "next/navigation";
import { useState } from "react";




const CouponTable = ({
  coupons,
  meta,
}: {
  coupons: TCoupon[];
  meta: TMeta;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProductsId, setSelectedProductsId] = useState<string[]>([]);

  const router = useRouter();

 console.log(coupons)

  const handleView = (coupon: TCoupon) => {
    console.log("Viewing product:", coupon);
  };

  const handleDelete = (productId: string) => {
    console.log("Deleting product with ID:", productId);
  };

 

  const columns: ColumnDef <TCoupon>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => {
            table.toggleAllPageRowsSelected(!!value);
          }}
          aria-label="Select all"
        />
      ),
      cell: ({ row }:{row:any}) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value:any) => {
            if (value) {
              setSelectedProductsId([...selectedProductsId, row.original._id]);
            } else {
              setSelectedProductsId(
                selectedProductsId.filter((id) => id !== row.original._id)
              );
            }

            row.toggleSelected(!!value);
          }}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "code",
      header: "coupon code",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">         
          <span className="truncate">{row.original.code}</span>
        </div>
      ),
    },
    {
      accessorKey: "discountType",
      header: "discountType",
      cell: ({ row }) => <span>{row.original.discountType}</span>,
    },
    {
      accessorKey: "discountValue",
      header: "discountValue",
      cell: ({ row }) => <span>{row.original.discountValue}</span>,
    },
    {
      accessorKey: "maxDiscountAmount",
      header: "maxDiscountAmount",
      cell: ({ row }) => <span>{row.original.maxDiscountAmount}</span>,
    },
    {
      accessorKey: "minOrderAmount",
      header: "minOrderAmount",
      cell: ({ row }) => <span>$ {row.original.minOrderAmount}</span>,
    },
    {
      accessorKey: "startDate",
      header: "startDate",
      cell: ({ row }) => 
        {
          const date=new Date(row.original.startDate)
          return  <span>
               {format(date,"MM/dd/yyyy")}
        </span>
        }
    },
    {
      accessorKey: "endDate",
      header: "endDate",
      cell: ({ row }) =>  {
          const date=new Date(row.original.endDate)
          return  <span>
               {format(date,"MM/dd/yyyy")}
        </span>
        }
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }:{row:any}) => (
        <div className="flex items-center space-x-3">
          <button
            className="text-gray-500 hover:text-blue-500"
            title="View"
            onClick={() => handleView(row.original)}
          >
            <Eye className="w-5 h-5" />
          </button>

          <button
            className="text-gray-500 hover:text-green-500"
            title="Edit"
            onClick={() =>
              router.push(`/user/shop/update-product/${row.original._id}`)
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

//   coupons ||

  return (
    <div className="my-5">
      <NMTable columns={columns} data={coupons} />
      <TablePagination
       
        totalPage={meta?.totalPage}
        // onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default CouponTable;
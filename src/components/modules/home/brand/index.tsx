"use server"
import { Button } from "@/components/ui/button";
import NHContainer from "@/components/ui/core/NHContainer";
import { getAllBrand } from "@/services/brand";

import Image from "next/image";
import { TBrandData } from "@/types";
import Link from "next/link";

const Brand = async() => {
    const  {data : brands } = await getAllBrand();
   
     
    return (
         <NHContainer className='my-20'>
         
      <div className="flex items-center justify-between ">
        <h2 className="font-bold text-2xl">Top Brand</h2>
        <Link href="/products">
          <Button variant="outline" className="rounded-full cursor-pointer">
            View All
          </Button>
       </Link>
      </div>
      <div className="grid grid-cols-4 gap-6 my-10 ">
        {brands?.slice(0, 4)?.map((brand: TBrandData, idx: number) => (
          <div className="bg-white p-3 rounded-xl" key={idx}>
            <div className="bg-gray-100 p-2 rounded-xl h-30 w-full  flex flex-col justify-center items-center">
             <div>
                 <Image
                src={brand?.logo}
                width={50}
                height={50}
                alt="category icon"
                className="mx-auto h-full w-full object-contain"
              />
             </div>
              <h1 className="text-3xl font-bold">{brand.name}</h1>
            </div>
   
          </div>
        ))}
      </div>
    </NHContainer>
    );
};

export default Brand;
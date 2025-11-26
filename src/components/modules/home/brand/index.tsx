"use server"
import { Button } from "@/components/ui/button";
import NHContainer from "@/components/ui/core/NHContainer";
import { getAllBrand } from "@/services/brand";

import Image from "next/image";
import { TBrandData } from "@/types";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Brand = async() => {
  let brands:any = [];
  let meta:any = {} ;
  try {
    const  res = await getAllBrand();
    brands=res?.data || [] ;
    meta = res?.meta || {} ;
  } catch (error:any) {
      console.log(error) ;
  }

console.log(meta) ;
     
    return (
         <NHContainer className='my-20 '>
         
      <div className="flex items-center justify-between ">
        <h2 className="font-bold text-2xl">Top Brand</h2>
        <Link href="/products">
          <Button variant="outline" className="rounded-full cursor-pointer">
            View All
          </Button>
       </Link>
      </div>
    {/* use cursor  */}

        <Carousel
      opts={{
        align: "start",
      }}
      className="mx-16"
    >
      <CarouselContent>
        {brands.map((brand:TBrandData, index:number) => (
          <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/5 ">
            <div className="p-1">
               <Link href={`/brand/${brand._id}`}>
              <Card>
                <CardContent >
                   <div className="bg-white p-3 rounded-xl" >
           
            
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
                  
                </CardContent>
              </Card>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    {/* use non cursor */}
      {/* <div className="grid grid-cols-4 gap-6 my-10 ">
        {brands?.slice(0, 6)?.map((brand: TBrandData, idx: number) => (
          <div className="bg-white p-3 rounded-xl" key={idx}>
            <Link href={`/brand/${brand._id}`}>
            
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
           
            </Link>
          </div>
        ))}
      </div> */}
    </NHContainer>
    );
};

export default Brand;
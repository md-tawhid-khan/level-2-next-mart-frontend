import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import CategoryCard from '@/components/ui/core/CategoryCard';
import NHContainer from '@/components/ui/core/NHContainer';
import { getAllCategories } from '@/services/category';
import { ICategory } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Category = async() => {
      let categories = [];
  try {
    const res = await getAllCategories();
    categories = res?.data || [];
  } catch (err) {
    console.error('Category fetch error:', err);
  }

  console.log("category", categories[0]) ;
    return (
         <NHContainer className='my-20'>
      <div className="flex items-center justify-between ">
        <h2 className="font-bold text-2xl">Category</h2>
        <Link href="/products">
          <Button variant="outline" className="rounded-full cursor-pointer">
            View All
          </Button>
        </Link>
      </div>
      {/* use curousel  */}
      <Carousel
      opts={{
        align: "start",
      }}
      className="mx-16"
    >
      <CarouselContent>
        {categories.map((category:ICategory, index:number) => (
          <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/5 ">
            <div className="p-1">
               <Link href={`/products?category=${category._id}`}>
              <Card>
                <CardContent >
                   <div className="bg-white p-3 rounded-xl" >
           
            
            <div className=" p-2  h-30 w-full  flex flex-col justify-center items-center object-contain">
             <div>
                 <Image
                src={category?.icon}
                width={50}
                height={50}
                alt="category icon"
                className="mx-auto h-full w-full "
              />
             </div>
              <h1 className="text-3xl font-bold">{category.name}</h1>
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
      <CarouselNext/>
    </Carousel>

      {/*  no curousel use  */}
      {/* <div className="grid grid-cols-6 gap-8 my-5">
        {
          categories?.slice(0,6).map((category: ICategory, idx: number) => (
            <CategoryCard key={idx} category={category} />
          ))}
      </div> */}
    </NHContainer>
    );
};

export default Category;
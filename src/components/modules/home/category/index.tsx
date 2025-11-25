import { Button } from '@/components/ui/button';
import CategoryCard from '@/components/ui/core/CategoryCard';
import NHContainer from '@/components/ui/core/NHContainer';
import { getAllCategories } from '@/services/category';
import { ICategory } from '@/types';
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
      <div className="grid grid-cols-6 gap-8 my-5">
        {
          categories?.slice(0,6).map((category: ICategory, idx: number) => (
            <CategoryCard key={idx} category={category} />
          ))}
      </div>
    </NHContainer>
    );
};

export default Category;
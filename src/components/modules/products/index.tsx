import React from 'react';
import SidebarFilter from './filterSidebar';

import ProductCard from '@/components/ui/core/productCard';
import { TPorduct } from '@/types';

const AllProducts = ({products}:{products:TPorduct[]}) => {

  // console.log(products) ;
    return (
       
        <div className='flex gap-8 '>
            <div className="w-full max-w-sm">
        <SidebarFilter />
      </div>
              <div className="grid grid-cols-3 gap-8">
          {
            products?.map((product, idx: number) => (
              <ProductCard key={idx} product={product} />
            ))}
        </div>
        </div>
       
    );
};

export default AllProducts;
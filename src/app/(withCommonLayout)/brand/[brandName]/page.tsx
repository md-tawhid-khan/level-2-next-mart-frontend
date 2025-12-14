"use server"
import AllProducts from '@/components/modules/products';
import { getAllProducts } from '@/services/product';
// import SpecificBrandProducts from '@/components/modules/specificBrandProduct';

import React from 'react';

const DynamicBrandProduct =async ({params}:any) => {
    const {brandName} = await params ;
   const products= await getAllProducts('_','_',{brand:`${brandName}`}) ;
   console.log(products) ;

    return (
        <div>
            
            <AllProducts products={products.data}/>
        </div>
    );
};

export default DynamicBrandProduct;
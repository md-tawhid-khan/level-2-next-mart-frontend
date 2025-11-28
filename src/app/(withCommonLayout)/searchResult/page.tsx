import AllProducts from '@/components/modules/products';
import { getSearchTermProducts } from '@/services/product';
import React from 'react';

const SearchResult = async({searchParams}:any) => {
    const {query}= await searchParams ;
    let products=[];
    try {
        const result=await getSearchTermProducts(query) ;
         products=result.data ;
        
    } catch (error) {
        
    }
    return (
        <div>
            {
                products.length == 0 ? <div className='flex items-center justify-center h-screen'> <h1 className='font-bold text-2xl text-blue-300'>No Product Found</h1></div> : <AllProducts products={products}/>
            }
           
        </div>
    );
};

export default SearchResult;
import AllProducts from '@/components/modules/products';
import { getSearchTermProducts } from '@/services/product';
import React from 'react';

const SearchResult = async({searchParams}) => {
    const {query}= await searchParams ;
    let products=[];
    try {
        const result=await getSearchTermProducts(query) ;
         products=result.data ;
        
    } catch (error) {
        
    }
    return (
        <div>
           <AllProducts products={products}/>
        </div>
    );
};

export default SearchResult;
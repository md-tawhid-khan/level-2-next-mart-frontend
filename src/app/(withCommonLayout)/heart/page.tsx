"use client"
import { loveProductSelector } from '@/redux/features/cartSlice';
import { useAppSelector } from '@/redux/hooks';
import { Divide } from 'lucide-react';
import React from 'react';

const HeartPage = () => {
    const products =useAppSelector(loveProductSelector)
    
    return (
        <div className='grid grid-cols-4 gap-4 '>
           {
           products.length != 0 ? products.map((product,index)=>(<div className='bg-amber-100 p-3 flex flex-col gap-3' key={index}>
               <h1>{product?.name}</h1>
               <h1>{product?.description}</h1>
               <h1>{product?.price}</h1>
            </div>)) : <div className='flex justify-center items-center'> <h1 className='text-3xl text-blue-300'> there is no heart Product</h1></div>
        }
        </div>
    );
};

export default HeartPage;
import MyShop from '@/components/modules/shop/myShop';
import { getMyShop } from '@/services/shop';
import React from 'react';

const MyShopPage = async() => {
    const {data}=await getMyShop();
    // console.log(data) ;
    return (
        <div className='my-9'>
            <MyShop myshop={data}/>
        </div>
    );
};

export default MyShopPage;
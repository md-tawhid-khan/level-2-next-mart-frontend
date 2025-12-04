import React from 'react';

const OrderData = ({orderData}:any) => {
    return (
        <div className='bg-blue-300 flex flex-col justify-between items-center h-full p-4'>
            <h1>your order data</h1>
            {
                orderData != 0 ? <h1 className='text-2xl text-amber-600'>number : {orderData.totalOrders}</h1> : <h1 className='text-2xl text-amber-600'> number : 0</h1>
            }
        </div>
    );
};

export default OrderData;
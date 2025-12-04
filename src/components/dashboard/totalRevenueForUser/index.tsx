import React from 'react';

const TotalRevenueForUser = ({totalRevenueForUser}:any) => {
    return (
        <div className='bg-blue-300 flex flex-col justify-between items-center h-full p-4'>
            <h1>total Revenue for user </h1>
            {
              totalRevenueForUser != 0 ?<h1 className='text-2xl text-amber-600'>{totalRevenueForUser}</h1> : <h1 className='text-2xl text-amber-600'>$ 0</h1> 
            }    
           
        </div>
    );
};

export default TotalRevenueForUser;
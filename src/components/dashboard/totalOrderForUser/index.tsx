import React from 'react';

const TotalOrdersForUser = ({totalOrdersForUser}:any) => {
    return (
       <div className='bg-blue-300 flex flex-col justify-between items-center h-full p-4'>
            <h1>total order for user </h1>
            {
              totalOrdersForUser != 0 ?<h1 className='text-2xl text-amber-600'>{totalOrdersForUser}</h1> : <h1 className='text-2xl text-amber-600'>$ 0</h1> 
            }    
           
        </div>
    );
};

export default TotalOrdersForUser;
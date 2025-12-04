import React from 'react';

const TodaysSalesAmount = ({todaysSalesAmount}:any) => {
    return (
        <div className='bg-blue-300 flex flex-col justify-between items-center h-full p-4'>
            <h1>todays sales amount </h1>
            {
              todaysSalesAmount != 0 ?<h1 className='text-2xl text-amber-600'>{todaysSalesAmount}</h1> : <h1 className='text-2xl text-amber-600'>$ 0</h1> 
            }    
           
        </div>
    );
};

export default TodaysSalesAmount;
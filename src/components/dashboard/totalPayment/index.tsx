import React from 'react';

const TotalPayment = ({paymentData}:any) => {

    return (
        <div className='bg-blue-300 flex flex-col justify-between items-center h-full p-4'>
            <h1>your total payment data</h1>
            {
              paymentData != 0 ?<h1 className='text-2xl text-amber-600'>{paymentData.totalPayment}</h1> : <h1 className='text-2xl text-amber-600'>$ 0</h1> 
            }    
           
        </div>
    );
};

export default TotalPayment;

import { getMetaData } from '@/services/dashboard';
import React from 'react';

const AdminDashboardPage = async() => {
    const {data} = await getMetaData() ;
   const { totalShops,totalUsers,totalOrders,totalProducts,totalRevenue,totalPayments,paymentStatusCounts,activeShops,inactiveShops} = data ;

    return (        
      <div className=" grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted flex flex-col justify-between items-center p-5" >
            
                <h1 className='text-xl '> total shops</h1>
            <h1 className='text-5xl text-blue-300'> {totalShops}</h1>
            
        </div>
        <div className="aspect-video rounded-xl bg-muted flex flex-col justify-between items-center p-5" >
            
                <h1 className='text-xl '> total users</h1>
            <h1 className='text-5xl text-blue-300'> {totalUsers}</h1>
            
        </div>
        <div className="aspect-video rounded-xl bg-muted flex flex-col justify-between items-center p-5" >
            
                <h1 className='text-xl '> total orders</h1>
            <h1 className='text-5xl text-blue-300'> {totalOrders}</h1>
            
        </div>
        <div className="aspect-video rounded-xl bg-muted flex flex-col justify-between items-center p-5" >
            
                <h1 className='text-xl '> total products</h1>
            <h1 className='text-5xl text-blue-300'> {totalProducts}</h1>
            
        </div>
        <div className="aspect-video rounded-xl bg-muted flex flex-col justify-between items-center p-5" >
            
                <h1 className='text-xl '> total revenue</h1>
            <h1 className='text-5xl text-blue-300'> {totalRevenue}</h1>
            
        </div>
        <div className="aspect-video rounded-xl bg-muted flex flex-col justify-between items-center p-5" >
            
                <h1 className='text-xl '> total payment</h1>
            <h1 className='text-5xl text-blue-300'> {totalPayments}</h1>
            
        </div>
        <div className="aspect-video rounded-xl bg-muted flex flex-col justify-between items-center p-5" >
            
                <h1 className='text-xl '> total status count</h1>
             {
                paymentStatusCounts.length != 0 ?
            paymentStatusCounts?.map((status:any,index:number)=>(
                <div key={index}>
                       <h1  className='text-5xl text-blue-300'>{status.status}</h1>
                       <h1>{status.totalPayments}</h1>
                </div> )) : <h1 className='text-5xl text-blue-300'>0</h1>
            }
            
        </div>
        <div className="aspect-video rounded-xl bg-muted flex flex-col justify-between items-center p-5" >
            
                <h1 className='text-xl '> actives shops</h1>
            <h1 className='text-5xl text-blue-300'> {activeShops}</h1>
            
        </div>
        <div className="aspect-video rounded-xl bg-muted flex flex-col justify-between items-center p-5" >
            
                <h1 className='text-xl '> inactive shops</h1>
            <h1 className='text-5xl text-blue-300'> {inactiveShops}</h1>
            
        </div>
      </div>
    );
};

export default AdminDashboardPage;

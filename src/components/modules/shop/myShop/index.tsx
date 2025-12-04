import Image from 'next/image';
import React from 'react';

const MyShop = async({myshop}:any) => {
    //    console.log(myshop);
    return (
        <div className='flex flex-col h-screen justify-center items-center gap-4 '>
            <Image src={myshop.logo} height={500} width={500} alt='No Image' className='w-52 rounded-2xl' />
            <h1>shopName : {myshop.shopName} </h1>
            <h1>address : {myshop.address} </h1>
            <h1>contactNumber : {myshop.contactNumber} </h1>
            <h1>businessLicenseNumber : {myshop.businessLicenseNumber} </h1>
            <h1>taxIdentificationNumber : {myshop.taxIdentificationNumber} </h1>
            <h1>socialMediaLinks :
                <p> facebook : {myshop?.socialMediaLinks?.facebook}</p>   
                <p> twitter : {myshop?.socialMediaLinks?.twitter}</p>   
                <p> instagram : {myshop?.socialMediaLinks?.instagram}</p>   
                </h1>
            <h1>website : {myshop.website} </h1>
            <h1>establishedYear : {myshop.establishedYear}</h1>
            <h1>servicesOffered : {myshop.servicesOffered}</h1>
        </div>
    );
};

export default MyShop;

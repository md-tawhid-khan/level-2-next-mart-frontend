"use client"
import { SquarePen } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { ProfileUpdateModal } from './profileUpdateModal';
import ImageUpdateModal from './imageUpdateModal';

const ProfileInfo = ({profile}:any) => {

    const [isOpen,setOpenChange] = useState();

   
    return (
        <div className='flex flex-col justify-center items-center h-screen gap-5'>
            {
                
                profile?.profile?.photo ? <div> <Image src={profile?.profile?.photo} alt='No Image' height={500} width={500} className="ring-primary ring-offset-base-100 w-48 rounded-full ring-2 ring-offset-2" />
                <div >
                   <ImageUpdateModal profile={profile}/>
                </div>
                </div> : <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
  </div>
  <ImageUpdateModal profile={profile}/>
</div>
            }
            <div className='flex gap-2'>
                <h1>name : {profile?.name} </h1>
                <ProfileUpdateModal profile={profile}/>
            </div>
            <h1 className='text-xl text-blue-300'>email : {profile?.email} </h1> 
           <div className='flex gap-2'>
            <h1>gender : {profile?.profile?.gender || " "}</h1>
            
           </div>
            <div className='flex gap-2'>               
               <h1>date of birth : <p >{profile?.profile?.dateOfBirth || " "}</p> </h1>
               
            </div>
           <div className='flex gap-2'>         
            <h1>phone number : {profile?.profile?.phoneNo || " "}</h1>
            
           </div>
           <div className='flex gap-2'>         
            <h1>Address : {profile?.profile?.address || " "}</h1>
            
           </div>
            
        </div>
    );
};

export default ProfileInfo;
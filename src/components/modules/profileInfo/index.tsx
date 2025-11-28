import Image from 'next/image';
import React from 'react';

const ProfileInfo = async({profile}:any) => {
    // console.log(profile) ;
    
    return (
        <div className='flex flex-col justify-center items-center h-screen gap-5'>
            {
                profile?.profile?.photo ? <Image src={profile?.profile?.photo} alt='No Image' height={500} width={500} className="ring-primary ring-offset-base-100 w-48 rounded-full ring-2 ring-offset-2" /> : <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
  </div>
</div>
            }
            <h1>name : {profile?.name} </h1>
            <h1>email : {profile?.email}</h1>
            <h1>gender : {profile?.profile?.gender || " "}</h1>
            <h1>date of birth : {profile?.profile?.dateOfBirth || " "} </h1>
            <h1>phone number : {profile?.profile?.phoneNo || " "}</h1>
        </div>
    );
};

export default ProfileInfo;
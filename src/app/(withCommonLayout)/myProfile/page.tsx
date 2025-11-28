import ProfileInfo from '@/components/modules/profileInfo';
import { getProfileInfo } from '@/services/profileInfo';
import React from 'react';

const MyProfile = async() => {
    const profileInfo = await getProfileInfo() ;
    const profile = profileInfo.data ;
    // console.log(profile) ;
    return (
        <div>
            <ProfileInfo profile={profile} />
        </div>
    );
};

export default MyProfile;
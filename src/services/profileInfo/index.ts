import { getValidToken } from "@/lib/verifyToken"

export const getProfileInfo =async() =>{
    const token = await getValidToken() ;
    
    try {
         const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/me`,{
           method:'GET',
           headers:{
            Authorization:token
           } ,
         }) ;
    const result = await res.json() ;
    return result ;
    } catch (error) {
        console.log(error) ;
    }
    
}
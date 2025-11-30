"use server"
import { revalidateTag } from 'next/cache';
import { getValidToken } from "@/lib/verifyToken"

export const getProfileInfo =async() =>{
    const token = await getValidToken() ;
    
    try {
         const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/me`,{
           method:'GET',
           headers:{
            Authorization:token
           } ,
           next:{
            tags:["profile"]
           }
         }) ;
    const result = await res.json() ;
    return result ;
    } catch (error) {
        console.log(error) ;
    }
    
} ;

export const updateProfileInfo = async (data:any) =>{
 try {
    const token =await getValidToken()
  const update = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/update-profile`,{
    method: "PATCH",
    headers:{
      authorization:token 
    },
    body:data 
  })
  revalidateTag("profile") ;
  return update.json() ;
 } catch (error) {
     console.log(error) ;
 }
}
"use server"

import jwt_decode from "jwt-decode";
import { cookies } from "next/headers"
import { FieldValues } from "react-hook-form"

export const registerUser=async(userData:FieldValues)=>{

   try {
        const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userData)
        })
         const result=await res.json()
          if(result?.success){
            (await cookies()).set("accessToken",result?.data?.accessToken);
            (await cookies()).set("refreshToken",result?.data?.refreshToken)
        }
        return result
   } catch (error:any) {
    return Error(error)
   }
}


export const loginUser=async(userData:FieldValues)=>{

   try {
        const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userData)
        })

        const result=await res.json()
        if(result?.success){
            (await cookies()).set("accessToken",result?.data?.accessToken) ;
            (await cookies()).set("refreshToken",result?.data?.refreshToken)
        }
        return result
   } catch (error:any) {
    return Error(error)
   }
}

export const getCurrentUser=async()=>{
   const accessToken=(await cookies()).get('accessToken')?.value;
   if(!accessToken){
    return null
   }
   try {
    const user=jwt_decode(accessToken as any)
   return user
   } catch (error) {
     console.error("Invalid token", error);
    return null;
   }
   
}


export const recaptchaTokenVerification=async(token:string)=>{

    
    try {
         const res=await fetch('https://www.google.com/recaptcha/api/siteverify',{
        method:"POST",
        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        },
        body:new URLSearchParams({
            secret:process.env.NEXT_PUBLIC_RECAPTCHA_SERVER_KEY!,
            response:token
        })
    })
    const result= await res.json()
      console.log({result})
    return result
    } catch (error:any) {
       return Error(error)
    }
   
}

export const logout=async()=>{
    (await cookies()).delete('accessToken')
}

export const getNewAccessToken=async()=>{
    try {
    const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/refresh-token`,{
            method:"POST",
            headers:{
               Authorization:(await cookies()).get('refreshToken')!.value
            },    
        }) 
        return await res.json()   
    }
        catch (error:any) {
        console.log(error);
    }
}
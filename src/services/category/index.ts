"use server"

import { cookies } from "next/headers"

const createCategory=async(data:FormData)=>{
 try {
     const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category`,{
        method:'POST',
        headers:{
             Authorization:(await cookies()).get('accessToken')!.value
        },
        body:data
     }) ;

     const  result = await res.json()

     return result

 } catch (error) {
    console.log(error)
 }
}

export default createCategory
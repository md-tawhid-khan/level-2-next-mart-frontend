"use server"


import { revalidateTag } from "next/cache";
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
    revalidateTag('categories')
     const  result = await res.json()

     return result

 } catch (error) {
    console.log(error)
 }
}

export default createCategory

export const getAllCategories=async()=>{
   const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category`,{
      method:"GET",
      next:{
         tags:['categories']
      }
   }) ;

   const result =await res.json()
  
   return result
}

export const deleteSingleCategory=async(id:string )=>{
   
   const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category/${id}`,{
      method:'DELETE',
      headers:{
         Authorization:(await cookies()).get('accessToken')!.value
      }
   }) ;
    revalidateTag('categories')
   return res.json();
}
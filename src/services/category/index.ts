"use server"


import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers"

const createCategory=async(data:FormData)=>{
   const token=await getValidToken() ;
 try {
     const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category`,{
        method:'POST',
        headers:{
             Authorization:token
        },
        body:data
     }) ;
    revalidateTag('categories',"page")
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
   const token = await getValidToken() ;
   const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category/${id}`,{
      method:'DELETE',
      headers:{
         Authorization:token 
      }
   }) ;
    revalidateTag('categories',"page")
   return res.json();
}
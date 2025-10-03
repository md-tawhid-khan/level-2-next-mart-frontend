"use server"
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const CreateBrand=async(data:FormData)=>{
    try {
        const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/brand`,{
           method:'POST',
           headers:{
                Authorization:(await cookies()).get('accessToken')!.value
           },
           body:data
        }) ;
   
         revalidateTag("brand")
        const  result = await res.json()
   
        return result
   
    } catch (error) {
       console.log(error)
    }
   }

   // check url to get all brand
   export const getAllBrand = async()=>{
       try {
          const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/brand`,{
            method:"GET",
           next:{
            tags:["brand"]
           }
          })
          return await res.json()
       } catch (error) {
          console.log(error)
       }
   }


   export const deleteSingleBrand=async(id:string )=>{
      
      const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/brand/${id}`,{
         method:'DELETE',
         headers:{
            Authorization:(await cookies()).get('accessToken')!.value
         }
      }) ;
       revalidateTag("brand")
      return res.json();
   }


"use server"
import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";





export const CreateBrand=async(data:FormData)=>{

   const token=await getValidToken();

    try {
        const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/brand`,{
           method:'POST',
           headers:{
                Authorization:token
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

      const token=await getValidToken();
      
      const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/brand/${id}`,{
         method:'DELETE',
         headers:{
            Authorization:token
         }
      }) ;
       revalidateTag("brand")
      return res.json();
   } ;

   // get specific brand product 
   


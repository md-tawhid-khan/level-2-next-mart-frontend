"use server"
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers"

export const addFlashSales=async(data:any)=>{
    try {
         const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/flash-sale`,
            {
                method:'POST',
                headers:{
                     Authorization: (await cookies()).get("accessToken")!.value,
                     "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            }
         );
         revalidateTag('PRODUCT',"page")
       return await res.json()
    } catch (error) {
        console.log(error)
    }

}

export const getAllFlashSales=async()=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/flash-sale`,{
        method:'GET',
        next:{
            tags:["PRODUCT"]
        }
    })
    return await res.json()
}
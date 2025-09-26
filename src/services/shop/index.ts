'use server'
import { cookies } from 'next/headers';
export const createShop=async(data:FormData)=>{
    // console.log({data})
    // console.log(Object.fromEntries(data))
    try {
         
         const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/shop`,{
        method:"POST",
        headers:{
            Authorization:(await cookies()).get('accessToken')!.value
        },
        body:data
       })
      const   result = await res.json()
      console.log({result})
       return result
        
    } catch (error) {
         console.log({error})
    }
      
}
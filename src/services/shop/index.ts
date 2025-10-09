'use server'
import { getValidToken } from '@/lib/verifyToken';




export const createShop=async(data:FormData)=>{
    // console.log({data})
    // console.log(Object.fromEntries(data))
    const token = await getValidToken() ;
    try {
         
         const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/shop`,{
        method:"POST",
        headers:{
            Authorization:token
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
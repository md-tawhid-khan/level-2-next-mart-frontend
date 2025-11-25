"use server"
import { TCoupon } from "@/types"
import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"

export const createCoupon=async(couponData:TCoupon)=>{
    try {
         const cookieStore = await cookies()
    const token = cookieStore.get("accessToken")?.value ?? "" ;
        const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/coupon`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Authorization: token,
            },
            body:JSON.stringify(couponData)
        })
        revalidateTag("COUPON")
        return await res.json()
    } catch (error) {
        console.log(error)
    }
}

export const getAllCoupon=async()=>{
    try {
         const cookieStore = await cookies()
    const token = cookieStore.get("accessToken")?.value ?? "" ;
        const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/coupon`,{
            method:"GET",
            headers:{
                Authorization:token,
            },
            next:{
                tags:["COUPON"]
            }
        })
        return await res.json()
    } catch (error) {
        console.log(error)
    }
}

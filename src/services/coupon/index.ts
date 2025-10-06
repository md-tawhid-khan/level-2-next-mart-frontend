"use server"
import { TCoupon } from "@/types"
import { cookies } from "next/headers"

export const createCoupon=async(couponData:TCoupon)=>{
    try {
        const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/coupon`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Authorization: (await cookies()).get("accessToken")!.value,
            },
            body:JSON.stringify(couponData)
        })
        return await res.json()
    } catch (error) {
        console.log(error)
    }
}

export const getAllCoupon=async()=>{
    try {
        const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/coupon`,{
            method:"GET",
            headers:{
                Authorization: (await cookies()).get("accessToken")!.value,
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
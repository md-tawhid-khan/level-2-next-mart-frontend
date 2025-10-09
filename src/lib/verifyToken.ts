"use server"
import { getNewAccessToken } from "@/services/authServices";
import jwtDecode from "jwt-decode";
import { cookies } from "next/headers";

export const isTokenExpire=async(token:string):Promise<boolean>=>{
    if(!token){
        return true
    }
    try {
        const decoded:{exp:number}=jwtDecode(token)
        return  decoded.exp *1000 < Date.now()
    } catch (error) {
        console.log(error) ;
        return true;
    }
}

export const getValidToken=async():Promise<string>=>{
    const cookiesStore=await cookies() ;
    let token=cookiesStore.get("accessToken")!.value;
    if(!token || await isTokenExpire(token)){
        const {data}=await getNewAccessToken();
        token=data?.accessToken ;
        cookiesStore.set("accessToken",token)
    }
    return token 
}
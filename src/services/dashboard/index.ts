import { getValidToken } from "@/lib/verifyToken"

export const getMetaData = async()=>{
    const token = await getValidToken() ;

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/meta`,{
        method:"GET",
        headers:{
            authorization: token
        }
    }) ;
    const result =await res.json() ;
    return result ;
    } catch (error) {
        console.log(error) ;
    }

    
}
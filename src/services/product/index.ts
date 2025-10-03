"use server"
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers"

// get all products
export const getAllProducts = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product`,
      {
        method:"GET",
        next: {
          tags: ["PRODUCT"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

// add product
export const addProduct = async (productData: FormData): Promise<any> => {
 
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/product`, {
      method: "POST",
      body: productData,
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      
    });
    revalidateTag("PRODUCT");
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const updateProduct=async(productData:FormData,
  productId:string)=>{
 try {
       const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/product/${productId}`,{
        method:"PATCH",
        headers:{
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        body:productData
       })
       revalidateTag("PRODUCT")
       return await res.json()
 } catch (error) {
   console.log(error)
 }
} 




export const getSingleProduct=async(productId:string)=>{
    try {
        const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/product/${productId}`,{
            method:"GET",   
              next: {
          tags: ["PRODUCT"],
        },
        })
        
        return await res.json()
    } catch (error) {
         console.log(error)
    }
}
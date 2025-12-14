
"use server"
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers"

// get all products
export const getAllProducts = async (page?:string,limit?:string,query?:{[key:string]:string|number|undefined}) => {
  const params =new URLSearchParams()
  if(query?.price){
    params.append("minPrice","0")
    params.append("maxPrice",query?.price.toString())
  }
  if(query?.category){
    params.append("categories",query?.category.toString())
  }
  if(query?.brand){
    params.append("brands",query?.brand.toString())
  }
  if(query?.rating){
    params.append("ratings",query?.rating.toString())
  }
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product?page=${page}&limit=${limit}&${params}`,
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
    revalidateTag("PRODUCT","max");
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
       revalidateTag("PRODUCT","page")
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
} ;

export const getSearchTermProducts=async(queryData:string)=>{
  try {
    const res=await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product?searchTerm=${queryData}`,
      {
        method:"GET",
        next: {
          tags: ["PRODUCT"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
     console.log(error) ;
  }
}

export const getMyShopProducts = async()=>{
     try {
      const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product/my-shop-products`,
      {
        method:"GET",
        headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
        next: {
          tags: ["PRODUCT"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error?.message);
     } 
} ;

export const deleteMyShopProduct = async(productId : string )=>{
  
  try {
    
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product/${productId}`,
      {
        method:"DELETE",
        headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      }
    );
    revalidateTag("PRODUCT","max");
    const data = await res.json();
    
    return data;
    
  } catch (error:any) {
     return Error(error?.message)
  }

}
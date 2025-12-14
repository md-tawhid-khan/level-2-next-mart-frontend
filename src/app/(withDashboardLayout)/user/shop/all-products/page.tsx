"use server"
import ManageProducts from "@/components/modules/shop/allProducts";
import { getMyShopProducts } from "@/services/product";




const AllProductsPage = async({searchParams}:{searchParams:Promise<{page:string}>}) => {
          const {page}=await searchParams
         
    const {data:products,meta}= await getMyShopProducts() ;
    // const {data:products,meta}= await getAllProducts(page,"1")

    return (
        <div>
             <ManageProducts products={products} meta={meta}/>
        </div>
    );
};

export default AllProductsPage;
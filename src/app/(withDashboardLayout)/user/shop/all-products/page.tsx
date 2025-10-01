"use server"
import ManageProducts from "@/components/modules/shop/allProducts";
import { getAllProducts } from "@/services/product";


const AllProductsPage = async() => {
    const {data:products,meta}= await getAllProducts()
   
    return (
        <div>
             <ManageProducts products={products}/>
        </div>
    );
};

export default AllProductsPage;
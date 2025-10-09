import AllProducts from "@/components/modules/products";
import ProductsBanner from "@/components/modules/products/banner";
import CategoryCard from "@/components/ui/core/CategoryCard";
import { getAllCategories } from "@/services/category";
import { getAllProducts } from "@/services/product";
import { ICategory } from "@/types";

type TSearchParams=Promise<{[key:string]:string|number|undefined}>

const ProductsPags = async({searchParams}:{searchParams:TSearchParams}) => {
  const query =await searchParams ;
    const {data:categories}=await getAllCategories()
    const {data:products}=await getAllProducts(undefined,undefined,query)
    return (
        <div className="container mx-auto">
            <ProductsBanner title="All Products" path="Home-Products"/>
             <h2 className="text-xl font-bold my-5">Featured Collection </h2>
      <div className="grid grid-cols-6 gap-6">
        {categories?.slice(0, 6).map((category: ICategory, idx: number) => (
          <CategoryCard key={idx} category={category} />
        ))}
      </div>
      <AllProducts products={products}/>
        </div>
    );
};

export default ProductsPags;
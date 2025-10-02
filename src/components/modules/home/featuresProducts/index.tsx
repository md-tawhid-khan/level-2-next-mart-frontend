import { Button } from "@/components/ui/button";
import NHContainer from "@/components/ui/core/NHContainer";
import ProductCard from "@/components/ui/core/productCard";
import { getAllProducts } from "@/services/product";
import Link from "next/link";

const FeaturesProducts = async() => {
     const { data: products } = await getAllProducts();
    return (
        <div className="bg-white bg-opacity-50 py-10">
      <NHContainer className="my-20" >
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl">Featured Products</h2>
          <Link href="/products">
            <Button variant="outline" className="rounded-full cursor-pointer">
              All Collection
            </Button>
          </Link>
        </div>
          <div className="grid grid-cols-5 gap-8 my-5">
          {
            products?.slice(0,5)?.map((product, idx: number) => (
              <ProductCard key={idx} product={product} />
            ))}
        </div>
      </NHContainer>
    </div>
    );
};

export default FeaturesProducts;
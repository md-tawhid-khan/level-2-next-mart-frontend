import { Button } from "@/components/ui/button";
import NHContainer from "@/components/ui/core/NHContainer";
import ProductCard from "@/components/ui/core/productCard";
import { getAllFlashSales } from "@/services/FlashSales";
import CountDown from "./countDown";
import Link from "next/link";


const FlashSales = async() => {
   const { data: products } = await getAllFlashSales();
      return (
          <div className="bg-white bg-opacity-50 py-10">
        <NHContainer className="my-20" >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <h2 className="font-bold text-2xl">Flash sales Products</h2>
            <CountDown/>
            </div>
            <Link href="/products">
              <Button variant="outline" className="rounded-full cursor-pointer">
                All Collection
              </Button>
            </Link>
          </div>
            <div className="grid grid-cols-5 gap-8 my-5">
            {products?.slice(0,5)?.map((product, idx: number) => (
                <ProductCard key={idx} product={product} />
              ))}
          </div>
        </NHContainer>
      </div>
      );
  };

export default FlashSales;
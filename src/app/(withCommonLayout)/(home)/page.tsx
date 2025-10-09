import Brand from "@/components/modules/home/brand";
import Category from "@/components/modules/home/category";
import FeaturesProducts from "@/components/modules/home/featuresProducts";
import FlashSales from "@/components/modules/home/flashSales";
import HeroSection from "@/components/modules/home/heroSection";



const HomePage =async() => {
      
  return (
    <div className=" mt-10">
       <HeroSection/>
       <Category/>
       <FeaturesProducts/>
       <FlashSales/>
       <Brand/>
    </div>
  );
};

export default HomePage;
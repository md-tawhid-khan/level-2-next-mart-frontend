
import Category from "@/components/modules/home/category";
import FeaturesProducts from "@/components/modules/home/featuresProducts";
import FlashSales from "@/components/modules/home/flashSales";
import HeroSection from "@/components/modules/home/heroSection";


const HomePage =() => {
 
  return (
    <div className=" mt-10">
       <HeroSection/>
       <Category/>
       <FeaturesProducts/>
       <FlashSales/>
    </div>
  );
};

export default HomePage;
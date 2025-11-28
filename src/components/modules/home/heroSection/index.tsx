
import { Button } from "@/components/ui/button";
import styles from "./HeroSection.module.css"
import Image from "next/image";
import CupImage from "@/assets/cup-with-headphone.png"
import NHContainer from "@/components/ui/core/NHContainer";
import Link from "next/link";

const HeroSection = () => {
    return (
        <NHContainer className={`${styles.banner}  border-2 border-white rounded-3xl mt-10`}>
            <div className="grid grid-cols-2 gap-4 items-center">
        <div className="pl-12" >
        <h1 className="text-4xl font-bold leading-normal">Don&apos;t Miss Out on 
These Unbeatable Black Friday Deals!</h1>
<p className="my-3">  Save big this Black Friday with unbeatable deals on tech, home
            essentials, fashion, and more! Limited stock.</p>
<Button className="rounded-full mr-2 cursor-pointer">Buy Now</Button>
<Link href={'/products'}>
<Button className="rounded-full cursor-pointer" variant={"outline"}>All Products</Button>
</Link>
        </div>
               <div className="flex items-center justify-center">
                <Image src={CupImage} alt="Cup image"/>
               </div>

             </div>
        </NHContainer>
    );
};

export default HeroSection;
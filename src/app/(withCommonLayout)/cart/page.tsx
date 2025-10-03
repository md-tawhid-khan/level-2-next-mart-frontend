import CartProducts from "@/components/modules/cart/cartproducts";
import Coupon from "@/components/modules/cart/coupon";
import PaymentDetails from "@/components/modules/cart/paymentDetails";
import ProductsBanner from "@/components/modules/products/banner";
import NHContainer from "@/components/ui/core/NHContainer";


const CartsPage = () => {
    return (
        <NHContainer className="">
            <ProductsBanner title="Cart Page" path="Home - Cart"/>
            <div className="grid grid-cols-12 gap-8 my-5">
            <CartProducts/>
           
                <Coupon/>
               <PaymentDetails/> 
           
            
            </div>
        </NHContainer>
    );
};

export default CartsPage;
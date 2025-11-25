export const dynamic = "force-dynamic";
import CouponTable from "@/components/modules/shop/manage-coupon/couponTable";
import CreateCouponModal from "@/components/modules/shop/manage-coupon/createCouponModal";
import { getAllCoupon } from "@/services/coupon";

const ManageCouponPage = async() => {
    const {data:coupons}=await getAllCoupon()
    
    return (
        <div>
          <div className="flex justify-between items-center">
               <h1 className="font-semibold text-xl">Manage Coupon</h1>
               <CreateCouponModal/>
           </div>
           <CouponTable coupons={coupons.result || []} meta={coupons.meta}/>
        </div>
    );
};

export default ManageCouponPage;
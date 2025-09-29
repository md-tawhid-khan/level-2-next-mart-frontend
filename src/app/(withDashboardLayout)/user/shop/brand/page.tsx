import CreateBrand from "@/components/modules/shop/brand";
import { getAllBrand } from "@/services/brand";



const BrandPage = async() => {
      const {data:brandData ,meta}=await getAllBrand()
    return (
        <div >
           <CreateBrand brandData={brandData}/>
        </div>
    );
};

export default BrandPage;
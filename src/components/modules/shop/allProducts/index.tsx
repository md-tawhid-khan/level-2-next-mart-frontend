import { Button } from "@/components/ui/button";
import Link from "next/link";


const ManageProducts= () => {
    return (
        <div className="flex justify-between items-center p-5">
            <h1>Manage Products </h1>
            <Link href="/user/shop/all-products/add-product">
            <Button className="cursor-pointer">create products</Button>
            </Link>
            
        </div>
    );
};

export default ManageProducts;
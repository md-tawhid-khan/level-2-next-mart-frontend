"use client"
import { Button } from "@/components/ui/button";
import { currencyFormater } from "@/lib/currencyFormater";
import { citySelector, grandTotalSeclector, orderedProductSelector, orderSelector, shippingAddressSelector, shippingCostSelector, subTotalSelector, } from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import { toast } from "sonner";



const PaymentDetails = () => {

  const subTotal=useAppSelector(subTotalSelector) 
  const shippingCost=useAppSelector(shippingCostSelector)
  const grandTotalCost=useAppSelector(grandTotalSeclector)
  const order=useAppSelector(orderSelector)
  const city=useAppSelector(citySelector)
  const shippingAddress=useAppSelector(shippingAddressSelector)
  const products=useAppSelector(orderedProductSelector)
        
    const handleOrder=()=>{
      const orderLoading=toast.loading('order is being placed')
      try {
          if(!city){
        throw new Error("city is missing")
      }
      if(!shippingAddress){
        throw new Error("shipping address is missing")
      }
       if(!products){
        throw new Error("whart are you order, order card is empty")
       }
       toast.success('Order create successfully',{id:orderLoading})
      console.log('handleOrder',order)
      } catch (error:any) {
         toast.error(error.message,{id:orderLoading})
      }
    
        
    }
    return (
        <div className="border-2 border-white bg-background brightness-105 rounded-md col-span-4 h-fit p-5">
      <h1 className="text-2xl font-bold">Payment Details</h1>
      <div className="space-y-2 mt-4">
        <div className="flex justify-between">
          <p className="text-gray-500 ">Subtotal</p>
          <p className="font-semibold">{currencyFormater(subTotal)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 ">Discount</p>
        <p className="font-semibold">{currencyFormater(0)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 ">Shipment Cost</p>
          <p className="font-semibold">{currencyFormater(shippingCost)}</p>
        </div>
      </div>
      <div className="flex justify-between mt-10 mb-5">
        <p className="text-gray-500 ">Grand Total</p>
        <p className="font-semibold">{currencyFormater(grandTotalCost)}</p>
      </div>
      <Button
        onClick={handleOrder}
        className="w-full text-xl font-semibold py-5"
      >
        Order Now
      </Button>
    </div>
    );
};

export default PaymentDetails;
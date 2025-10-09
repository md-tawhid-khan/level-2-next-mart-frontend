"use client"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { couponSelector, fetchCoupon, shopSelector, subTotalSelector } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Trash } from "lucide-react";
import {  FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";


const Coupon = () => {
   const dispatch=useAppDispatch()
  const subTotal=useAppSelector(subTotalSelector)
  const shopId=useAppSelector(shopSelector)
  const {discountAmount,error,code,isLoading}=useAppSelector(couponSelector)

    const form=useForm()
     const couponInput = form.watch("coupon");

       const handleRemoveCoupon = () => {
    form.reset();
  };

  

    const onSubmit:SubmitHandler<FieldValues>=async(data:any)=>{
           const couponData = {
    couponCode: data.coupon as string,
    shopId,
    subTotal,
  };      
        try {       
        const res = await dispatch(fetchCoupon(couponData)  as unknown as any ).unwrap()
        
        console.log("inside component",res)
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
    }
    return (
         <div className="border-2 border-white bg-background brightness-105 rounded-md col-span-4  p-5 ">
      <div className="flex flex-col justify-between h-full">
        <h1 className="text-2xl font-bold">Use Coupon code</h1>
        <p className="text-gray-500">Enter your coupon code if you have one.</p>

        <Form {...form}>
          <form className="mt-3" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="coupon"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      className="rounded-full"
                      placeholder="Promo / Coupon code"
                      value={field.value || code}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex gap-3 mt-3">
              <Button
                disabled={!couponInput || isLoading}
                type="submit"
                className="w-full text-xl font-semibold py-5 "
              >
              {
                isLoading?  <div className="flex items-center justify-center min-h-screen">
                  <div className="w-8 h-8 border-8 border-white border-dotted rounded-full animate-spin"></div>
                </div> : "Apply"
            }
              </Button>
              {couponInput && (
                <Button
                  onClick={handleRemoveCoupon}
                  variant="outline"
                  className="bg-red-100 rounded-full size-10"
                >
                  <Trash size={24} className="text-red-500" />
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>
    </div>
    );
};

export default Coupon;
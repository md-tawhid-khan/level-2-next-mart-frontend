"use client"
import { Button } from "@/components/ui/button";
import { Dialog,  DialogContent,  DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addFlashSales } from "@/services/FlashSales";
import { Dispatch, SetStateAction } from "react";

import { useForm } from "react-hook-form";
import { toast } from "sonner";

type TModalProps ={
    selectProductId:string[];
    setSelectProductId:Dispatch<SetStateAction<string[] | []>>
}

const DiscountModal = ({selectProductId,setSelectProductId}:TModalProps) => {
    const form=useForm({
        defaultValues:{
        discountPercentage:0
    } 
    })

    const {formState:{isSubmitting}}=form;
       
    const onSubmit=async(data)=>{
        const modifiedData={
            products:[...selectProductId] ,
            discountPercentage:parseFloat(data?.discountPercentage),
        }

       try {
        const res=await addFlashSales(modifiedData)
         if(res.success){
            toast.success(res.message)
            setSelectProductId([])
         } else{
            toast.error(res.message)
         }
       } catch (error) {
          console.log(error)
       }

    }

    return (
         <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="cursor-pointer"
          disabled={!selectProductId?.length} 
          variant="outline">Add Flash Sales</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Flash Sales</DialogTitle>
         
          </DialogHeader>
           <Form {...form}>
          <form
            className="flex items-center gap-3"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="discountPercentage"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                       type="number"
                      {...field}
                      value={field.value || ""}
                      className="rounded-sm w-56"
                      placeholder="Discount Percentage"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
              <Button type="submit" className="w-2/5 rounded-sm">
              {isSubmitting ? "Adding...." : "Add"}
            </Button>
          </form>
        </Form> 
          
        </DialogContent>
      </form>
    </Dialog>
    );
};

export default DiscountModal;
"use client";

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
 
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { updateProfileInfo } from "@/services/profileInfo";
import { SquarePen } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner";

const ImageUpdateModal = ({ profile }:any) => {
  const [isOpen, onOpenChange] = useState(false);

  const form = useForm({
    defaultValues: {
      gender: profile?.profile?.gender || "",
    phoneNo: profile?.profile?.phoneNo || "",
    dateOfBirth: profile?.profile?.dateOfBirth || "",
    address: profile?.profile?.address || "",
      photo:profile?.profile?.photo || ""
    }
  });

  const {formState:{isSubmitting}} = form ;


  const onSubmit = async (data:any) => {
    const bodyData={
      gender: profile?.profile?.gender || "",
    phoneNo: profile?.profile?.phoneNo || "",
    dateOfBirth: profile?.profile?.dateOfBirth || "",
    address: profile?.profile?.address || "",
    }
    const formData = new FormData();
    formData.append('data',JSON.stringify(bodyData)) ;
    formData.append("profilePhoto", data?.photo[0]);

    // console.log(Object.fromEntries(formData.entries()));
    try {
        const res=await updateProfileInfo(formData);
        if(res.success){
          onOpenChange(false);
        }else {
          toast.error(res.message)
        }
        
    } catch (error) {
        console.log(error);
    }

    
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <SquarePen />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Photo</DialogTitle>
          
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="photo"
              render={({ field }) => (
                <FormItem>
                  
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => field.onChange(e.target.files)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button  disabled={isSubmitting}
              type="submit"
              className="w-full"
            >{
                isSubmitting ? (
                <div className="flex items-center justify-center min-h-screen">
                  <div className="w-8 h-8 border-8 border-white border-dotted rounded-full animate-spin"></div>
                </div>
              ) : (
                "save update"
              )
              }</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ImageUpdateModal;

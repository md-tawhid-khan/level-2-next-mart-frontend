"use client"
import { Button } from "@/components/ui/button";
import NMImageUploader from "@/components/ui/core/NMImageUploader";
import ImagePreviewer from "@/components/ui/core/NMImageUploader/imagePreviewer";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CreateBrand } from "@/services/brand";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";


export type TBrand ={
    name?:string;
}

const CreateBrandModel = () => {
    const form=useForm()
    const {formState:{isSubmitting}}=form ;
        const [imageFiles,setImageFiles]=useState<File[] | [] >([])
         const [imagePreview,setImagePreview]=useState<string[] | [] >([])
    

    const onSubmit:SubmitHandler<FieldValues>=async(data:TBrand)=>{
        const formData=new FormData()
        formData.append('data',JSON.stringify(data))
        formData.append('logo',imageFiles[0] as File)
        try {
           const res=await CreateBrand(formData)
           if(res.success){
            toast.success(res.message)
            form.reset()
           } else{
            toast.error(res.message)
           }
        } catch (error) {
          console.log(error)
        }
       
    }

    return (
         <Dialog>
  <DialogTrigger asChild>
          <Button  className="cursor-pointer">Create Brand</Button>
        </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create Product Brand </DialogTitle>
    
    </DialogHeader>
    <Form {...form}>
          
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
           
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand name</FormLabel>
                  <FormControl className="mx-auto ">
                    <Input
                      className="text-black bg-white"
                      type="text"
                    
                      placeholder="give brand name"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
               />
         <div>
              {
              imagePreview.length>0 ?  <ImagePreviewer setImageFiles={setImageFiles} setImagePreview={setImagePreview} imagePreview={imagePreview} className="mt-8"/> :
               <NMImageUploader className="mt-8" setImagePreview={setImagePreview} setImageFile={setImageFiles}/> 
            }
         </div>

            <Button
              disabled={isSubmitting}
              type="submit"
              className="w-full"
            >{
                isSubmitting ? (
                <div className="flex items-center justify-center min-h-screen">
                  <div className="w-8 h-8 border-8 border-white border-dotted rounded-full animate-spin"></div>
                </div>
              ) : (
                "submit"
              )
              }
            </Button>
          </form>
         
        </Form>
  </DialogContent>
</Dialog>
    );
};

export default CreateBrandModel;
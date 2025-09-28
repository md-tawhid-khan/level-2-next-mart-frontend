"use client"
import { Button } from "@/components/ui/button";
import NMImageUploader from "@/components/ui/core/NMImageUploader";
import ImagePreviewer from "@/components/ui/core/NMImageUploader/imagePreviewer";
import {
  Dialog,
  DialogContent,

  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog" 
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import createCategory from "@/services/category";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type TCategory={
  name?:string ;
  description?:string
}

const CreateCategoryModal = () => {
    const [imageFiles,setImageFiles]=useState<File[] | [] >([])
     const [imagePreview,setImagePreview]=useState<string[] | [] >([])

    const form=useForm()

    const {formState:{isSubmitting} }=form ;

    const onSubmit=async(data:TCategory)=>{
      console.log(data)
        const formData=new FormData()
        formData.append('data',JSON.stringify(data))
        formData.append('icon',imageFiles[0] as File)
        try {
           const res=await createCategory(formData)
           console.log(res)
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
          <Button  className="cursor-pointer">Create Category</Button>
        </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create Product Category </DialogTitle>
    
    </DialogHeader>
    <Form {...form}>
          
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
           
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>category name</FormLabel>
                  <FormControl className="mx-auto ">
                    <Input
                      className="text-black bg-white"
                      type="text"
                      placeholder="give category name"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

<div className="flex items-center justify-between">
             <FormField
              control={form.control}
              name="description"
              
              render={({ field }) => (
                <FormItem>
                  <FormLabel>category description</FormLabel>
                  <FormControl className="mx-auto ">
                   
                    <Textarea className="text-black bg-white h-36"
                     
                      placeholder="give category description"
                      {...field}
                      value={field.value || ""} />
                                      </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            /> 
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

export default CreateCategoryModal;
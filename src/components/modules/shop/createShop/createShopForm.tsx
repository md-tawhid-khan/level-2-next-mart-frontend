'use client'
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {   FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea"
import NMImageUploader from "@/components/ui/core/NMImageUploader";
import { useState } from "react";
import ImagePreviewer from "@/components/ui/core/NMImageUploader/imagePreviewer";
import { createShop } from "@/services/shop";
import { toast } from "sonner";
import { TShop } from "@/types";


const CreateShopForm = () => {

  const [imageFiles,setImageFiles]=useState<File[] | [] >([])
  const [imagePreview,setImagePreview]=useState<string[] | [] >([])

    const form =useForm()
     
    const {formState:{isSubmitting}}=form

    const onSubmit:SubmitHandler<FieldValues>=async(data:TShop)=>{
       console.log(data)
      const servicesOffered=data?.servicesOffered!.split(",").map((service:string)=>service.trim()).filter((service:string)=>service !== "")

      const modifyData={
        ...data,servicesOffered:servicesOffered,establishedYear:Number(data?.establishedYear)
      }

        try {
          const formData=new FormData()
          formData.append('data',JSON.stringify(modifyData))
          formData.append('logo', imageFiles[0] as File )

          const res= await createShop(formData)
          console.log(res)
           
          if(res.success){
            toast.success(res.message)
          }


        } catch (error) {
          console.error(error)
        }
    }
    return (
        <div className="borde-2 border-gray-300 rounded-xl flex flex-col   gap-10 max-w-md w-full p-5 bg-gray-100 ">
        <div className="max-w-md text-blue-400 ">
            <Form {...form}>
          <form  onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-2 gap-10 items-center">
          <FormField
              control={form.control}
              name="shopName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Shop name</FormLabel>
                  <FormControl className="mx-auto ">
                    <Input
                      className="text-black bg-white"
                      type="text"
                      placeholder="give your name"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="businessLicenseNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business License Number</FormLabel>
                  <FormControl className="mx-auto ">
                    <Input
                      className="text-black bg-white"
                      type="text"
                      placeholder="give valid businessLicenseNumber"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />    
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl className="mx-auto ">
                    <Input
                      className="text-black bg-white"
                      type="text"
                      placeholder="give your address"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />    
            <FormField
              control={form.control}
              name="contactNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Number</FormLabel>
                  <FormControl className="mx-auto ">
                    <Input
                      className="text-black bg-white"
                      type="text"
                      placeholder="give your contact number"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />    
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website</FormLabel>
                  <FormControl className="mx-auto ">
                    <Input
                      className="text-black bg-white"
                      type="text"
                      placeholder="give your shop website"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />    
            <FormField
              control={form.control}
              name="establishedYear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Established Year</FormLabel>
                  <FormControl className="mx-auto ">
                    <Input
                      className="text-black bg-white"
                      type="text"
                      placeholder="give your shop website"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />    
            <FormField
              control={form.control}
              name="socialMediaLinks.facebook"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Facebook link</FormLabel>
                  <FormControl className="mx-auto ">
                    <Input
                      className="text-black bg-white"
                      type="text"
                      placeholder="give your facebook link"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />    
            <FormField
              control={form.control}
              name="socialMediaLinks.twitter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Twitter</FormLabel>
                  <FormControl className="mx-auto ">
                    <Input
                      className="text-black bg-white"
                      type="text"
                      placeholder="give your twitter link"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />    
            <FormField
              control={form.control}
              name="socialMediaLinks.instagram"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instagram</FormLabel>
                  <FormControl className="mx-auto ">
                    <Input
                      className="text-black bg-white"
                      type="text"
                      placeholder="give your instagram link"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />    
            <FormField
              control={form.control}
              name="taxIdentificationNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tax Identification Number</FormLabel>
                  <FormControl className="mx-auto ">
                    <Input
                      className="text-black bg-white"
                      type="text"
                      placeholder="give your Tax Identification Number"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />    
            <FormField
              control={form.control}
              name="servicesOffered"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Services Offered </FormLabel>
                  <FormControl className="mx-auto ">
                   
                    <Textarea className="text-black bg-white"
                     
                      placeholder="give your Tax Identification Number"
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
              disabled={isSubmitting? true : false}
              type="submit"
              className="w-full"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center min-h-screen">
                  <div className="w-8 h-8 border-8 border-white border-dotted rounded-full animate-spin"></div>
                </div>
              ) : (
                "create"
              )}
            </Button>
    
          </form>
        </Form>
        </div>

        </div>
    );
};

export default CreateShopForm;
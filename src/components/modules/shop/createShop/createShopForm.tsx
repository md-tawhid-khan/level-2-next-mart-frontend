'use client'
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea"
import NMImageUploader from "@/components/ui/core/NMImageUploader";
import { useState } from "react";


const CreateShopForm = () => {

  const [imageFile,setImageFile]=useState<File[] | [] >([])

    const form =useForm()
    const onSubmit=(data)=>{
        console.log(data)
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
            <NMImageUploader imageFile={imageFile} setImageFile={setImageFile}/> 
            
            </div>  
            <Button
              type="submit"
              className="w-full"
            > submit</Button>
            
          </form>
        </Form>
        </div>

        </div>
    );
};

export default CreateShopForm;
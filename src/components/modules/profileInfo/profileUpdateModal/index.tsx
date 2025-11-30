"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { updateProfileInfo } from "@/services/profileInfo"
import { SquarePen } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"

export function ProfileUpdateModal({profile}) {
   const [isOpen, IsOpenChange]= useState(false)
   const form = useForm({
  defaultValues: {
    
    gender: profile?.profile?.gender || "",
    phoneNo: profile?.profile?.phoneNo || "",
    dateOfBirth: profile?.profile?.dateOfBirth || "",
    address: profile?.profile?.address || "",
  }
}) ;
   const {formState:{isSubmitting}}=form ;

   const onSubmit =async (data) =>{
    const formData=new FormData()
     formData.append('data',JSON.stringify(data)) ;
    // console.log(Object.fromEntries(formData.entries()));
    try {
       const res = await updateProfileInfo(formData);
       IsOpenChange(false)
      //  console.log(res) ;
    } catch (error) {
       console.log(error) ;
    }
   }

  return (
    <Dialog open={isOpen} onOpenChange={IsOpenChange}>
      
        <DialogTrigger asChild>
          <Button variant="outline" className="tooltip cursor-pointer" data-tip="updateProfile"><SquarePen /></Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>update profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
         
            <div className="grid gap-3">
              <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FormControl className="mx-auto ">
                    <Input
                      className="text-black bg-white"
                      type="text"
                      placeholder={profile?.profile?.gender}
                      {...field}
                      
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            </div>
            <div className="grid gap-3">
              <FormField
              control={form.control}
              name="phoneNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>phone no</FormLabel>
                  <FormControl className="mx-auto ">
                    <Input
                      className="text-black bg-white"
                      type="text"
                      placeholder={profile?.profile?.phoneNo}
                      {...field}
                     
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            </div>  

            <div className="grid gap-3">
              <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>phone no</FormLabel>
                  <FormControl className="mx-auto ">
                    <Input
                      className="text-black bg-white"
                      type="text"
                      placeholder={profile?.profile?.address}
                      {...field}
                     
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            </div>           
          
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
  )
}

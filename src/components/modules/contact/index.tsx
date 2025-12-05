"use client"
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  clientName: string
  phoneNumber : string 
  email :string
  message : string
  exampleRequired: string
}

const ContactForm = () => {
    const form = useForm<Inputs>()
   const {
   
    handleSubmit,
  
    formState: { errors },
  } = form ;
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

//   console.log(watch("example")) // watch input value by passing the name of it

  return (
    <div className='bg-amber-50 p-6 m-14 '>
    <Form {...form}>
    
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
      {/* register your input into the hook by invoking the "register" function */}
     <div className='grid grid-cols-2 gap-4'>
         <FormField
    control={form.control}
    name="clientName"
    render={({ field }) => (
      <FormItem>
        <FormLabel >Name*</FormLabel>
        <FormControl>
           <Input placeholder="your name" {...field} />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
      <FormField
    control={form.control}
    name="email"
    render={({ field }) => (
      <FormItem>
        <FormLabel >Email*</FormLabel>
        <FormControl>
           <Input placeholder="your email" {...field} />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
     </div>
      <FormField
    control={form.control}
    name="phoneNumber"
    render={({ field }) => (
      <FormItem>
        <FormLabel >PhoneNumber*</FormLabel>
        <FormControl>
           <Input placeholder="your phone number" {...field} />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
      <FormField
    control={form.control}
    name="message"
    render={({ field }) => (
      <FormItem>
        <FormLabel >Message*</FormLabel>
        <FormControl>
           <Textarea placeholder="message us " {...field} />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />

      
   <Button><input type="submit" /></Button>
      
    </form>
    </Form>
    </div>
  )

};

export default ContactForm;
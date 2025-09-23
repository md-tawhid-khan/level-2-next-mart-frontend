"use client"
import Logo from "@/assets/svgs/logo";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { RegisterValidation } from "./registerValidation";
import { zodResolver } from "@hookform/resolvers/zod";


const RegisterForm = () => {
    const form=useForm({
        resolver:zodResolver(RegisterValidation)
    })
    
    const password=form.watch("password")
    const passwordConfirm=form.watch("passwordConfirm")

const onSubmit:SubmitHandler<FieldValues>=(data)=>{
    console.log(data)
}

    return (
        <div className="borde-2 border-gray-300 rounded-xl flex flex-col gap-10 max-w-md w-full p-5 bg-gray-100 ">
            <div className="flex items-center space-x-4">
                <Logo/>
                <div >
                    <h1 className="text-xl font-semibold">Register</h1>
                    <p className="text-sm font-extralight">join us today and start your jurney</p>
                </div>
            </div>
        <div className="max-w-md text-blue-400">
            <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User name</FormLabel>
              <FormControl className="mx-auto ">
                <Input className="text-black bg-white" type="text" placeholder="give your name" {...field} value={field.value || ''} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User Email</FormLabel>
              <FormControl className="mx-auto ">
                <Input className="text-black bg-white" type="email" placeholder="give valid email" {...field} value={field.value || ''} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl className="mx-auto ">
                <Input className="text-black bg-white" type="password" placeholder="give secrect password" {...field} value={field.value || ''} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="passwordConfirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Confirm Password</FormLabel>
              <FormControl className="mx-auto ">
                <Input className="text-black bg-white" type="password" placeholder="repeated your password " {...field} value={field.value || ''} />
              </FormControl>
              {
                passwordConfirm && password !== passwordConfirm ? <FormMessage> password do not match</FormMessage> : <FormMessage/>
              }
            </FormItem>
          )}
        />
        <Button
         disabled={ password !== passwordConfirm} type="submit">Submit</Button>
      </form>
    </Form>
        </div>

        </div>
    );
};

export default RegisterForm;
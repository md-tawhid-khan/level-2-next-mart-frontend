"use client";
import ReCAPTCHA from "react-google-recaptcha";
import Logo from "@/assets/svgs/logo";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser,} from "@/services/authServices";
import { toast } from "sonner";
import { LoginValidation } from "./loginValidation";


const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(LoginValidation),
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onChange=(value)=>{
     console.log('captcha value',value)
  }

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
    
      const res = await loginUser(data);
      // console.log({res})
      if (res?.success) {
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
      form.reset()
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="borde-2 border-gray-300 rounded-xl flex flex-col gap-10 max-w-md w-full p-5 bg-gray-100 ">
      <div className="flex items-center space-x-4">
        <Logo />
        <div>
          <h1 className="text-xl font-semibold">Register</h1>
          <p className="text-sm font-extralight">
            join us today and start your jurney
          </p>
        </div>
      </div>
      <div className="max-w-md text-blue-400">
      
        <Form {...form}>
          
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
           
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Email</FormLabel>
                  <FormControl className="mx-auto ">
                    <Input
                      className="text-black bg-white"
                      type="email"
                      placeholder="give valid email"
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl className="mx-auto ">
                    <Input
                      className="text-black bg-white"
                      type="password"
                      placeholder="give secrect password"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
 
               <ReCAPTCHA
    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY!}
    onChange={onChange}
  />,
            
            <Button
              disabled={isSubmitting}
              type="submit"
              className="w-full"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center min-h-screen">
                  <div className="w-8 h-8 border-8 border-white border-dotted rounded-full animate-spin"></div>
                </div>
              ) : (
                "submit"
              )}
            </Button>
          </form>
         
        </Form>
             
      </div>
    </div>
  );
};

export default LoginForm;

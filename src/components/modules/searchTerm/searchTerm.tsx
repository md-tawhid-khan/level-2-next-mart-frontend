
import { Form, FormControl, FormField, FormItem,  } from '@/components/ui/form';
import {  getSearchTermProducts } from '@/services/product';
import { useRouter } from 'next/navigation';

import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

const SearchTerm = () => {
   const form = useForm();

   const router=useRouter() ;

  const {
    formState: { isSubmitting },
  } = form;
  

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const searchTermData=data.name ;
    
      // const result=await getSearchTermProducts(searchTermData) ;
      // console.log("search Data " , result) ;
      router.push(`/searchResult?query=${searchTermData}`) ;
      form.reset() ;
    } catch (error: any) {
      console.log(error);
      throw new Error(error.message)
    }
  };

  return (
    <div >
      
      <div >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="join max-w-md  flex-grow ">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  
                  <FormControl className="mx-auto ">
                    <input
                      className="input join-item w-full max-w-6xl border border-gray-300 rounded-l-full py-2 px-5"
                      type="text"
                      placeholder="Search for Products"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>

                </FormItem>
              )}
            />
         
            <button
              
              type="submit"
              className="btn join-item rounded-r-full "
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center min-h-screen">
                  <div className="w-8 h-8 border-8 border-white border-dotted rounded-full animate-spin"></div>
                </div>
              ) : (
                "Search"
              )}
            </button>
          </form>
        </Form>

         
      </div>
    </div>
  )
};

export default SearchTerm;
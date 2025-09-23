import { Facebook,  Instagram, X } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Logo from "@/assets/svgs/logo";

const Footer = () => {

    const navLink=[
        {href:'/',label:"Home"},
        {href:'/shop',label:"Shop"},
        {href:'/products',label:"All Products"},
        {href:'/about',label:"About us"},
        {href:'/testimonial',label:"Testimonials"},
        {href:'/blogs',label:"Blogs"},
        {href:'/contact',label:"Contact"},
    ]

    const socialLink=[
        {href:'#', icon:Facebook },
        {href:'#', icon:Instagram },
        {href:'#', icon:X },
    ]

    return (
        <footer className="bg-white border-t border-gray-200 py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-black flex items-center">
             <Logo/>
              Next Mart
            </h1>
          </div>
          <p className="text-gray-600 mt-3 w-1/2">
            Save big this Black Friday with unbeatable deals on tech, home
            essentials, fashion, and more! Limited stock.
          </p>
        </div>

        <hr />
        <ul className="flex justify-center space-x-6 text-sm text-gray-800 font-medium my-4">
         {
            navLink.map(({href,label},index)=>(<Link href={href} key={index}>{label}</Link>))
         }
        </ul>

        <div className="flex justify-center space-x-4">
          {
            socialLink.map(({href,icon:Icon},index)=>(<Link
            href={href} key={index}> <Icon className="w-5 h-5"/> </Link>))
          }
        </div>
      </div>
    </footer>
  );
} 
        

export default Footer;
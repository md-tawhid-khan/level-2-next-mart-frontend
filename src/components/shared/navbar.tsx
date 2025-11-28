'use client'
import { Heart, LogOut, ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";
import Logo from "@/assets/svgs/logo";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  
  DropdownMenuItem,
  DropdownMenuLabel,
  
  DropdownMenuSeparator,
  
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {  logout } from "@/services/authServices";
import { useUser } from "@/context/userContext";
import { usePathname, useRouter } from "next/navigation";
import { privateRoutes } from "@/constant";
import SearchTerm from "../modules/searchTerm/searchTerm";



export default function Navbar() {

  const {user,setIsLoading}=useUser();
  const pathname=usePathname();
  const router=useRouter();

 const handleSearchTearm =async(e)=>{
      e.preventDefault()
      console.log(e.target.value) ;
 }
  
  

const handleLogOut=async()=>{
  await logout()
  setIsLoading(true)
  if(privateRoutes.some((route)=>pathname.match(route))){
    router.push("/")
  }
}

  return (
    <header className="border-b w-full">
      <div className="container flex justify-between items-center mx-auto h-16 px-3">
        <h1 className="text-2xl font-black flex items-center">
         <Logo/>
          Next Mart
        </h1>
        {/*-------------- search bar ---------- */}
        <SearchTerm/>
        {/* <form onSubmit={handleSearchTearm}>
          <div className="join max-w-md  flex-grow ">
  <input className="input join-item w-full max-w-6xl border border-gray-300 rounded-l-full py-2 px-5" placeholder="Search for products" type="text" />
  <button type="submit" className="btn join-item rounded-r-full">Search</button>
</div>
</form> */}
        {/* <div className="max-w-md  flex-grow ">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full max-w-6xl border border-gray-300 rounded-full py-2 px-5"
          />
          <Button> search</Button>
        </div> */}
        {/* ---------- cart and longing section ------------*/}
        <nav className="flex gap-2">
          <Button variant="outline" className="rounded-full p-0 size-10">
            <Heart />
          </Button>
          <Link href='/cart'>
          <Button  variant="outline" className="rounded-full p-0 size-10">
            <ShoppingBag />
          </Button>
          </Link>
          {
            user? <>
        <Link href="/create-shop">
          <Button variant="outline" className="rounded-full p-2 ">
            create shop
          </Button>
          </Link>
<DropdownMenu>
  <DropdownMenuTrigger><Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>user</AvatarFallback>
</Avatar></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem><Link href={`/${user?.role}/dashboard`}>dashboard</Link></DropdownMenuItem>
    <DropdownMenuItem>my shop</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="bg-red-500 cursor-pointer" onClick={handleLogOut}>
      <LogOut/>log out
      </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
 </> :   <Link href="/login">
          <Button variant="outline" className="rounded-full p-2 ">
            log in 
          </Button>         
          </Link>
          }
        </nav>
      </div>
    </header>
  );
}
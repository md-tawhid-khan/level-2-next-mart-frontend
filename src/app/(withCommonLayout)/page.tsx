"use client"
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/userContext";



const HomePage =() => {
 const user=useUser()
  console.log(user)
  return (
    <div className="text-center mt-10">
       <Button>click me </Button>
       <h1>this is common layout page</h1>
    </div>
  );
};

export default HomePage;
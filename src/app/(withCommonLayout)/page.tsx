import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/services/authServices";


const HomePage =async() => {
  const user= await getCurrentUser()
  // console.log(user)
  return (
    <div className="text-center mt-10">
       <Button>click me </Button>
       <h1>this is common layout page</h1>
    </div>
  );
};

export default HomePage;
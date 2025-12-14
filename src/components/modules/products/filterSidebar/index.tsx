
"use client";

import { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Star } from "lucide-react";
import { getAllCategories } from "@/services/category";
import { getAllBrand } from "@/services/brand";
import { toast } from "sonner";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

const SidebarFilter = () => {
  const [price, setPrice] = useState([0]);

  const [isLoading,setIsLoading]=useState(false) ;
   const [categories,setCategories]=useState([]) ;
   const [brands,setBrands]=useState([]);


   useEffect(()=>{
    const fetchData=async()=>{
    setIsLoading(true) ;
     try {
       const [{data:categoriesData},{data:brandsData}]=await Promise.all([getAllCategories(),getAllBrand()])
       setCategories(categoriesData)
       setBrands(brandsData)
       
     } catch (error:any) {
      console.log(error)
      toast.error(error.message)
     }finally{
      setIsLoading(false)
     }
    }

    fetchData()
   },[])
   const router=useRouter()
   const pathname=usePathname()
   const searchParams=useSearchParams()

  const handleSearchQuery=(query:string,value:string | number)=>{
    const params=new URLSearchParams(searchParams.toString())
    params.set(query,value.toString())
     router.push(`${pathname}?${params}`,{scroll:false}) ;
    // router.push(`${process.env.NEXT_PUBLIC_ROOT_API}/products?${params}`,{scroll:false}) ;
  } 

  const ratings = [5, 4, 3, 2, 1];

  const availability = ["In Stock", "Pre-Order", "Upcoming"];

  return (
    <aside className="w-64 p-4 border rounded-xl bg-white shadow-md space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Filter</h2>
        {searchParams.toString().length > 0 && (
          <Button
            onClick={() => {
              router.push(`${pathname}`, {
                scroll: false,
              });
            }}
            size="sm"
            className="bg-black hover:bg-gray-700 ml-5 cursor-pointer"
          >
            Clear Filters
          </Button>
        )}
      </div>
      {/* Filter by Price */}
      <div>
        <h3 className="font-semibold mb-2">Filter By Price</h3>
        <div className="flex items-center space-x-2 mb-2">
          <input
            type="number"
            placeholder="Min"
            className="w-20 border rounded-md px-2 py-1 text-sm"
          />
          <span>-</span>
          <input
            type="number"
            placeholder="Max"
            className="w-20 border rounded-md px-2 py-1 text-sm"
          />
        </div>
        <Slider
          value={price}
          onValueChange={(value)=>{
            setPrice(value);
            handleSearchQuery('price',value[0])
          }}
          
          max={500000}
          step={1000}
          className="my-2"
        />
        <p className="text-sm text-gray-500">Selected: ${price}</p>
      </div>

      {/* Product Types */}
      <div>
        <h3 className="font-semibold mb-2">Product Types</h3>
        {
          !isLoading &&  <RadioGroup>
          {categories.map((item:{_id:string,name:string}) => (
            <div key={item._id} className="flex items-center space-x-2">
              <RadioGroupItem
              onClick={()=>handleSearchQuery("category",item._id)} 
              value={item._id} id={item._id} />
              <Label htmlFor={item._id}>{item.name}</Label>
            </div>
          ))}
        </RadioGroup>
        }
       
      </div>

      {/* Brands */}
      <div>
        <h3 className="font-semibold mb-2">Brands</h3>
        <RadioGroup>
          {brands.map((brand: { _id: string; name: string }) =>
 <div key={brand._id} className="flex items-center space-x-2">
              <RadioGroupItem 
              onClick={()=>handleSearchQuery("brand",brand._id)}
              value={brand._id} id={brand._id} />
              <Label htmlFor={brand._id}>{brand.name}</Label>
            </div> )}
        </RadioGroup>
      </div>

      {/* Rating */}
      <div>
        <h3 className="font-semibold mb-2">Rating</h3>
        <RadioGroup>
          {ratings.map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <RadioGroupItem 
              onClick={()=>handleSearchQuery('rating',rating)}
              value={rating.toString()} id={`rating-${rating}`} />
              <Label
                htmlFor={`rating-${rating}`}
                className="flex items-center gap-1"
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Availability */}
      <div>
        <h3 className="font-semibold mb-2">Availability</h3>
        <div className="space-y-2">
          {availability.map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <Checkbox id={item} />
              <Label htmlFor={item}>{item}</Label>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SidebarFilter;


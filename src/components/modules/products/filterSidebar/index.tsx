
"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Star } from "lucide-react";

const SidebarFilter = () => {
  const [price, setPrice] = useState([50]);

  const productTypes = [
    "Laptop & Accessories",
    "Computers-PC",
    "Speakers & Theater",
    "Keyboards & Mouse",
    "Camera",
    "Video Recording",
    "Tablets",
    "Table Lights",
  ];

  const brands = ["HP (15)", "Apple (58)", "Dell (61)", "Asus (11)", "Camera"];

  const ratings = [5, 4, 3, 2, 1];

  const availability = ["In Stock", "Pre-Order", "Upcoming"];

  return (
    <aside className="w-64 p-4 border rounded-xl bg-white shadow-md space-y-6">
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
          onValueChange={setPrice}
          max={1000}
          step={10}
          className="my-2"
        />
        <p className="text-sm text-gray-500">Selected: ${price}</p>
      </div>

      {/* Product Types */}
      <div>
        <h3 className="font-semibold mb-2">Product Types</h3>
        <RadioGroup>
          {productTypes.map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <RadioGroupItem value={item} id={item} />
              <Label htmlFor={item}>{item}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Brands */}
      <div>
        <h3 className="font-semibold mb-2">Brands</h3>
        <RadioGroup>
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <RadioGroupItem value={brand} id={brand} />
              <Label htmlFor={brand}>{brand}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Rating */}
      <div>
        <h3 className="font-semibold mb-2">Rating</h3>
        <RadioGroup>
          {ratings.map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <RadioGroupItem value={rating.toString()} id={`rating-${rating}`} />
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



import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { TPorduct } from "@/types"

export function DescriptionTab({product}:{product:TPorduct}) {
  return (
    <div className="flex w-full  flex-col gap-6">
      <Tabs defaultValue="description">
        <TabsList>
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="specification">specification</TabsTrigger>
          <TabsTrigger value="shippingInformation">shipping information</TabsTrigger>
          <TabsTrigger value="salerInformation">saler information</TabsTrigger>
        </TabsList>
        <TabsContent value="description">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Description</CardTitle>
              <CardDescription>
                <h1 className="text-2xl font-bold">{product?.name}</h1>
                <p className="p-5">{product?.description}</p>
              </CardDescription>
            </CardHeader>
           
            <CardFooter className="flex flex-col items-start">
              <h1 className="text-2xl font-bold">key features</h1>
              <div className="p-5">
              
                {
                 product?.keyFeatures?.map((feature,index)=><li key={index}>
                 {feature}
              </li>)
                }
             </div>
            </CardFooter>
          </Card>
        </TabsContent>
     
        <TabsContent value="specification">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Specification</CardTitle>
              <CardDescription>
                <h1 className="text-2xl font-bold">{product?.name}</h1>
                <p className="p-5">{product?.description}</p>
              </CardDescription>
            </CardHeader>
           
            <CardFooter className="flex flex-col items-start">
              <h1 className="text-2xl font-bold">key features</h1>
              <div className="p-5">
              
                {
                 product?.keyFeatures?.map((feature,index)=><li key={index}>
                 {feature}
              </li>)
                }
             </div>
            </CardFooter>
          </Card>
        </TabsContent>
     
        <TabsContent value="shippingInformation">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Shipping Information</CardTitle>
              <CardDescription>
                <h1 className="text-2xl font-bold">{product?.name}</h1>
                <p className="p-5">{product?.description}</p>
              </CardDescription>
            </CardHeader>
           
            <CardFooter className="flex flex-col items-start">
              <h1 className="text-2xl font-bold">key features</h1>
              <div className="p-5">
              
                {
                 product?.keyFeatures?.map((feature,index)=><li key={index}>
                 {feature}
              </li>)
                }
             </div>
            </CardFooter>
          </Card>
        </TabsContent>
     
        <TabsContent value="salerInformation">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Saler Information</CardTitle>
              <CardDescription>
                <h1 className="text-2xl font-bold">{product?.name}</h1>
                <p className="p-5">{product?.description}</p>
              </CardDescription>
            </CardHeader>
           
            <CardFooter className="flex flex-col items-start">
              <h1 className="text-2xl font-bold">key features</h1>
              <div className="p-5">
              
                {
                 product?.keyFeatures?.map((feature,index)=><li key={index}>
                 {feature}
              </li>)
                }
             </div>
            </CardFooter>
          </Card>
        </TabsContent>
     
      </Tabs>
    </div>
  )
}

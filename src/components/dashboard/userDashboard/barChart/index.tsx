"use client"
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
export const description = "A bar chart"

export function ChartBarDefault({barChartData}:any) {
 let chartData:any[]=[];
 let chartConfig:Record<string,any> = {} ;
  if(barChartData.length){
   chartData = barChartData.map((order:any)=>({
      month:order?.month ,
      totalOrders:order?.totalOrders ,
   })) ;

   chartConfig = {
  totalSales: {
    label: "Visitors",
    color: "var(--chart-2)",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig ;

   
  } else {
         chartData = [
  { month: "January", totalOrders: 186 },
  { month: "February", totalOrders: 305 },
  { month: "March", totalOrders: 237 },
  { month: "April", totalOrders: 73 },
  { month: "May", totalOrders: 209 },
  { month: "June", totalOrders: 214 },
]
 chartConfig = {
  totalOrders: {
    label: "totalOrders",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

  }
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Bar Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer 
        config={chartConfig}
         className="[&_.recharts-text]:fill-background mx-auto aspect-square max-h-[250px]"
        >
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="totalOrders" fill="var(--color-desktop,var(--chart-1))" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}



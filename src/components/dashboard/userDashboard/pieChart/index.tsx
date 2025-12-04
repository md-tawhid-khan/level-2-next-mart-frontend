"use client"

import { TrendingUp } from "lucide-react"
import { LabelList, Pie, PieChart } from "recharts"

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

export const description = "A pie chart with a label list"



const colors = ["var(--color-chrome)","var(--color-safari)","var(--color-firefox)","var(--color-edge)","var(--color-other)"] ;

   


export function ChartPieLabelList({pieChartData}:any) {

    let chartData = [];
 let chartConfig:Record<string, any>  =[];

     
    if(pieChartData.length!=0){
               chartData =pieChartData.map((data:any,index:any)=>({
        category:data?.category ,
        totalAmount:data?.totalAmount,
        fill:colors[index % colors.length]
    }))

    chartConfig = chartData.reduce((config:any,item:any)=>{
        config[item?.category] = {
            label:item?.category,
            color : item?.fill 
        };
        return config ;
    },{}) ;
    }
    else{
        chartData = [
  { category: "chrome", totalAmount: 275, fill: "var(--color-chrome)" },
  { category: "safari", totalAmount: 200, fill: "var(--color-safari)" },
  { category: "firefox", totalAmount: 187, fill: "var(--color-firefox)" },
  { category: "edge", totalAmount: 173, fill: "var(--color-edge)" },
  { category: "other", totalAmount: 90, fill: "var(--color-other)" },
] ;

   chartConfig = {
  visitors: {
    label: "Visitors",
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
} satisfies ChartConfig


    }
  
   

   

   


  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Label List</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-text]:fill-background mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="totalAmount" hideLabel />}
            />
            <Pie data={chartData} dataKey="totalAmount">
              <LabelList
                dataKey="category"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label 
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}

"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Dot, Line, LineChart } from "recharts"

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

export const description = "A line chart with dots and colors"



export function ChartLineDotsColors({lineChartData}:any) {
      let chartData :any[] = [] ;
      let chartConfig : Record<string,any> = {} ;
    if(lineChartData.length){
          chartData = lineChartData.map((data:any)=>({
            date:data.date,
            totalSales:data.totalSales 
          })) ;

          chartConfig = {
  totalSales: {
    label: "Sales",
    color: "var(--chart-2)",
  },
  chrome: {
    label: "January",
    color: "var(--chart-1)",
  },
  safari: {
    label: "February",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "March",
    color: "var(--chart-3)",
  },
  edge: {
    label: "April",
    color: "var(--chart-4)",
  },
  other: {
    label: "May",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig ;

    
    }
    else {
         chartData = [
  { date: "chrome", totalSales: 275, fill: "var(--color-chrome)" },
  { date: "safari", totalSales: 200, fill: "var(--color-safari)" },
  { date: "firefox", totalSales: 187, fill: "var(--color-firefox)" },
  { date: "edge", totalSales: 173, fill: "var(--color-edge)" },
  { date: "other", totalSales: 90, fill: "var(--color-other)" },
] ;
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

    } ;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart - Dots Colors</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer 
        config={chartConfig}
        className="[&_.recharts-text]:fill-background mx-auto aspect-square max-h-[250px]"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 24,
              left: 24,
              right: 24,
            }}
          >
            <CartesianGrid vertical={false} />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="line"
                  nameKey="totalSales"
                  hideLabel
                />
              }
            />
            <Line
              dataKey="totalSales"
              type="natural"
              stroke="var(--chart-2)"
              strokeWidth={2}
              dot={({ payload, ...props }) => {
                return (
                  <Dot
                    key={payload.date}
                    r={5}
                    cx={props.cx}
                    cy={props.cy}
                    fill={payload.fill}
                    stroke={payload.fill}
                  />
                )
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total total sales for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}

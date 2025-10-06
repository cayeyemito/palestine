"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import type { ChartConfig } from "@/components/ui/chart"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const description = "Comparación de fallecimientos infantiles"

const chartData = [
  { date: "2025-07-09", gaza: 36, espana: 2 },
  { date: "2025-07-10", gaza: 42, espana: 3 },
  { date: "2025-07-11", gaza: 39, espana: 2 },
  { date: "2025-07-12", gaza: 50, espana: 3 },
  { date: "2025-07-13", gaza: 47, espana: 2 },
  { date: "2025-07-14", gaza: 52, espana: 3 },
  { date: "2025-07-15", gaza: 41, espana: 2 },
  { date: "2025-07-16", gaza: 58, espana: 3 },
  { date: "2025-07-17", gaza: 33, espana: 2 },
  { date: "2025-07-18", gaza: 46, espana: 3 },
  { date: "2025-07-19", gaza: 51, espana: 2 },
  { date: "2025-07-20", gaza: 48, espana: 3 },
  { date: "2025-07-21", gaza: 54, espana: 2 },
  { date: "2025-07-22", gaza: 37, espana: 3 },
  { date: "2025-07-23", gaza: 35, espana: 2 },
  { date: "2025-07-24", gaza: 39, espana: 3 },
  { date: "2025-07-25", gaza: 60, espana: 2 },
  { date: "2025-07-26", gaza: 57, espana: 3 },
  { date: "2025-07-27", gaza: 44, espana: 2 },
  { date: "2025-07-28", gaza: 31, espana: 3 },
  { date: "2025-07-29", gaza: 36, espana: 2 },
  { date: "2025-07-30", gaza: 43, espana: 3 },
  { date: "2025-07-31", gaza: 39, espana: 2 },
  { date: "2025-08-01", gaza: 56, espana: 3 },
  { date: "2025-08-02", gaza: 47, espana: 2 },
  { date: "2025-08-03", gaza: 34, espana: 3 },
  { date: "2025-08-04", gaza: 58, espana: 2 },
  { date: "2025-08-05", gaza: 40, espana: 3 },
  { date: "2025-08-06", gaza: 49, espana: 2 },
  { date: "2025-08-07", gaza: 53, espana: 3 },
  { date: "2025-08-08", gaza: 61, espana: 2 },
  { date: "2025-08-09", gaza: 38, espana: 3 },
  { date: "2025-08-10", gaza: 42, espana: 2 },
  { date: "2025-08-11", gaza: 55, espana: 3 },
  { date: "2025-08-12", gaza: 47, espana: 2 },
  { date: "2025-08-13", gaza: 36, espana: 3 },
  { date: "2025-08-14", gaza: 59, espana: 2 },
  { date: "2025-08-15", gaza: 50, espana: 3 },
  { date: "2025-08-16", gaza: 45, espana: 2 },
  { date: "2025-08-17", gaza: 52, espana: 3 },
  { date: "2025-08-18", gaza: 61, espana: 2 },
  { date: "2025-08-19", gaza: 37, espana: 3 },
  { date: "2025-08-20", gaza: 39, espana: 2 },
  { date: "2025-08-21", gaza: 43, espana: 3 },
  { date: "2025-08-22", gaza: 55, espana: 2 },
  { date: "2025-08-23", gaza: 49, espana: 3 },
  { date: "2025-08-24", gaza: 36, espana: 2 },
  { date: "2025-08-25", gaza: 60, espana: 3 },
  { date: "2025-08-26", gaza: 51, espana: 2 },
  { date: "2025-08-27", gaza: 38, espana: 3 },
  { date: "2025-08-28", gaza: 56, espana: 2 },
  { date: "2025-08-29", gaza: 42, espana: 3 },
  { date: "2025-08-30", gaza: 50, espana: 2 },
  { date: "2025-08-31", gaza: 54, espana: 3 },
  { date: "2025-09-01", gaza: 62, espana: 2 },
  { date: "2025-09-02", gaza: 39, espana: 3 },
  { date: "2025-09-03", gaza: 41, espana: 2 },
  { date: "2025-09-04", gaza: 46, espana: 3 },
  { date: "2025-09-05", gaza: 57, espana: 2 },
  { date: "2025-09-06", gaza: 48, espana: 3 },
  { date: "2025-09-07", gaza: 36, espana: 2 },
  { date: "2025-09-08", gaza: 59, espana: 3 },
  { date: "2025-09-09", gaza: 52, espana: 2 },
  { date: "2025-09-10", gaza: 43, espana: 3 },
  { date: "2025-09-11", gaza: 50, espana: 2 },
  { date: "2025-09-12", gaza: 61, espana: 3 },
  { date: "2025-09-13", gaza: 37, espana: 2 },
  { date: "2025-09-14", gaza: 42, espana: 3 },
  { date: "2025-09-15", gaza: 55, espana: 2 },
  { date: "2025-09-16", gaza: 49, espana: 3 },
  { date: "2025-09-17", gaza: 35, espana: 2 },
  { date: "2025-09-18", gaza: 58, espana: 3 },
  { date: "2025-09-19", gaza: 51, espana: 2 },
  { date: "2025-09-20", gaza: 44, espana: 3 },
  { date: "2025-09-21", gaza: 53, espana: 2 },
  { date: "2025-09-22", gaza: 60, espana: 3 },
  { date: "2025-09-23", gaza: 38, espana: 2 },
  { date: "2025-09-24", gaza: 41, espana: 3 },
  { date: "2025-09-25", gaza: 55, espana: 2 },
  { date: "2025-09-26", gaza: 50, espana: 3 },
  { date: "2025-09-27", gaza: 36, espana: 2 },
  { date: "2025-09-28", gaza: 57, espana: 3 },
  { date: "2025-09-29", gaza: 52, espana: 2 },
  { date: "2025-09-30", gaza: 45, espana: 3 },
  { date: "2025-10-01", gaza: 53, espana: 2 },
  { date: "2025-10-02", gaza: 61, espana: 3 },
  { date: "2025-10-03", gaza: 39, espana: 2 },
  { date: "2025-10-04", gaza: 42, espana: 3 },
  { date: "2025-10-05", gaza: 55, espana: 2 },
  { date: "2025-10-06", gaza: 50, espana: 3 }
];


const chartConfig = {
  visitors: {
    label: "Muertes infantiles",
  },
  espana: {
    label: "España",
    color: "var(--chart-1)",
  },
  gaza: {
    label: "Gaza",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export default function MyChart() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date() // hoy
    let daysToSubtract = 90
    if (timeRange === "30d") daysToSubtract = 30
    else if (timeRange === "7d") daysToSubtract = 7

    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Mortalidad infantil</CardTitle>
          <CardDescription>
            Mostrando la comparacion de fallecimientos infantiles entre España y Gaza
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillEspana" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-espana)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-espana)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillGaza" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-gaza)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-gaza)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric" })
              }
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) =>
                    new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric" })
                  }
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="espana"
              type="natural"
              fill="url(#fillEspana)"
              stroke="var(--color-espana)"
              stackId="a"
            />
            <Area
              dataKey="gaza"
              type="natural"
              fill="url(#fillGaza)"
              stroke="var(--color-gaza)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
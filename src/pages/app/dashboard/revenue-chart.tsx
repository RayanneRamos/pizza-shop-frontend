import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Line,
  Tooltip,
} from "recharts";
import colors from "tailwindcss/colors";

const data = [
  { date: "16/09", revenue: 756 },
  { date: "17/09", revenue: 959 },
  { date: "18/09", revenue: 1636 },
  { date: "19/09", revenue: 1822 },
  { date: "20/09", revenue: 932 },
  { date: "21/09", revenue: 1870 },
  { date: "22/09", revenue: 723 },
  { date: "23/09", revenue: 888 },
  { date: "24/09", revenue: 1580 },
  { date: "25/09", revenue: 1420 },
  { date: "26/09", revenue: 1830 },
];

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })
              }
            />
            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.violet["500"]}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

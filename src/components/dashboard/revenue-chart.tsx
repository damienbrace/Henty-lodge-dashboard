"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { revenueTrend } from "@/lib/seed/henty-data";
import { formatCurrency } from "@/lib/utils";

export function RevenueChart() {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={revenueTrend} margin={{ left: 0, right: 0, top: 8, bottom: 0 }}>
          <defs>
            <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0b5a45" stopOpacity={0.28} />
              <stop offset="95%" stopColor="#0b5a45" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#ede8dd" vertical={false} />
          <XAxis dataKey="label" axisLine={false} tickLine={false} tick={{ fill: "#6b7280", fontSize: 12 }} />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6b7280", fontSize: 12 }}
            tickFormatter={(value) => `$${Number(value) / 1000}k`}
            width={44}
          />
          <Tooltip
            formatter={(value) => formatCurrency(Number(value))}
            labelClassName="font-semibold"
            contentStyle={{
              borderRadius: 8,
              borderColor: "#e7e2d8",
              boxShadow: "0 12px 24px rgba(17, 24, 39, 0.08)"
            }}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#0b5a45"
            strokeWidth={3}
            fill="url(#revenueFill)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

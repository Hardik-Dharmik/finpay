// components/LineChart.tsx
"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 200 },
  { name: "May", value: 600 },
];

export default function MyLineChart() {
  return (
    <div className="h-[250px] w-full bg-white p-5">
      <p className="text-sm text-neutral-500">Summary</p>
      <p className="text-2xl font-semibold">$1,876,580</p>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="name" />
          <Line
            type="monotone"
            dataKey="value"
            dot={false}
            stroke="#2a8e9e"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

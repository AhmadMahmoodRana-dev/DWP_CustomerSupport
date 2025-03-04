import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { value: 30 },
  { value: 90 },
  { value: 30 },
  { value: 60 },
  { value: 30 },
  { value: 25 },
];

export default function MyAreaChart() {
  return (
    <div className="w-full h-52 rounded-lg">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6A1E55" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#6A1E55" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#A855F7"
            fill="url(#colorUv)"
            strokeWidth={2}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
            }}
            labelStyle={{ color: "#A855F7" }}
            itemStyle={{ color: "#fff" }}
            cursor={{ stroke: "#A855F7", strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

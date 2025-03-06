import {
  Bar,
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", clicks: 400, views: -400 },
  { name: "Feb", clicks: 500, views: -500 },
  { name: "Mar", clicks: 800, views: -700 },
  { name: "Apr", clicks: 450, views: -450 },
  { name: "May", clicks: 550, views: -550 },
  { name: "Jun", clicks: 400, views: -400 },
];

export default function CustomChart() {
  return (
    <div className="w-full h-[80%]  p-4 rounded-lg">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="name" stroke="#ddd" tick={{fontSize:10}} dy={15} />
          <YAxis stroke="#ddd" axisLine={false} tickLine={false} tick={{fontSize:10}} dx={-10} dy={10} />
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
        
          <Bar dataKey="clicks" fill="#3361ff" name="Clicks" />
          <Bar dataKey="views" fill="#18bb66" name="Views" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

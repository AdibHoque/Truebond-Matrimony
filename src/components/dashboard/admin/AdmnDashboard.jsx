import {
  Card,
  CardBody,
  CardHeader,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import {useQuery} from "@tanstack/react-query";
import {FaDollarSign} from "react-icons/fa";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

export default function AdminDashboard() {
  const {
    isPending,
    isError,
    error,
    data: stats,
  } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const res = await fetch("https://truebond-matrimony.vercel.app/stats");
      return res.json();
    },
  });

  const data = [
    {name: "Total Biodatas", value: stats?.totalBiodatas},
    {name: "Male Biodatas", value: stats?.maleBiodatas},
    {name: "Female Biodatas", value: stats?.femaleBiodatas},
    {name: "Premium Biodatas", value: stats?.premiumUsers},
  ];

  const COLORS = ["#2F4F4F", "#1E90FF", "#FF69B4", "#8A2BE2"];

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <Spinner className="size-24" color="purple" />
      </div>
    );
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between gap-y-12 gap-4">
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend height={36} />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex gap-4 justify-center items-center w-full">
        <FaDollarSign className="text-7xl text-blue-gray-900" />
        <div className="flex flex-col justify-center items-center">
          <h3 className="uppercase font-semibold text-3xl text-blue-gray-900">
            REVENUE
          </h3>
          <h1 className="text-5xl font-extrabold text-purple-500">
            ${stats?.revenue}.00
          </h1>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import API from "../api/axios";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function SpendingChart() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const res = await API.get(`/payment/history/${user.id}`);

        const transactions = res.data.transactions;

        const monthlyData = {};

        transactions.forEach((tx) => {
          if (tx.sender.email !== user.email) return;

          const month = new Date(tx.createdAt).toLocaleString("default", {
            month: "short",
          });

          monthlyData[month] =
            (monthlyData[month] || 0) + tx.amount;
        });

        const data = Object.keys(monthlyData).map((month) => ({
          month,
          amount: monthlyData[month],
        }));

        setChartData(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchChartData();
  }, []);

  return (
    <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">
        Monthly Spending
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="amount" fill="#06b6d4" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SpendingChart;
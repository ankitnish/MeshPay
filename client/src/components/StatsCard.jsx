import { Wallet, ArrowUpCircle, ArrowDownCircle, Receipt } from "lucide-react";
import { useEffect, useState } from "react";
import API from "../api/axios";

function StatsCard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [stats, setStats] = useState({
    sent: 0,
    received: 0,
    total: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await API.get(`/payment/history/${user.id}`);

        const transactions = res.data.transactions;

        let sent = 0;
        let received = 0;

        transactions.forEach((tx) => {
          if (tx.sender.email === user.email) {
            sent += tx.amount;
          } else {
            received += tx.amount;
          }
        });

        setStats({
          sent,
          received,
          total: transactions.length,
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchStats();
  }, []);

  const cards = [
    {
      title: "Wallet Balance",
      value: `₹${user.walletBalance}`,
      icon: <Wallet size={28} />,
      color: "text-cyan-400",
    },
    {
      title: "Total Sent",
      value: `₹${stats.sent}`,
      icon: <ArrowUpCircle size={28} />,
      color: "text-red-400",
    },
    {
      title: "Total Received",
      value: `₹${stats.received}`,
      icon: <ArrowDownCircle size={28} />,
      color: "text-green-400",
    },
    {
      title: "Transactions",
      value: stats.total,
      icon: <Receipt size={28} />,
      color: "text-yellow-400",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg"
        >
          <div className={`${card.color} mb-3`}>
            {card.icon}
          </div>

          <p className="text-slate-400">{card.title}</p>

          <h2 className="text-3xl font-bold text-white mt-2">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default StatsCard;
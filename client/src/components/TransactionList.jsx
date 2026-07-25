import { useEffect, useState } from "react";
import API from "../api/axios";

function TransactionList() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTransactions = async () => {
      if (!user?.id) {
        setLoading(false);
        return;
      }

      try {
        const res = await API.get(`/payment/history/${user.id}`);

        if (res.data.success) {
          setTransactions(res.data.transactions);
        }
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTransactions();
  }, [user?.id]);

  return (
    <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">
        Recent Transactions
      </h2>

      {loading ? (
        <p className="text-slate-400">Loading transactions...</p>
      ) : transactions.length === 0 ? (
        <p className="text-slate-400">No transactions available.</p>
      ) : (
        <div className="space-y-4">
          {transactions.map((tx) => {
            const isSender = tx.sender.email === user.email;

            return (
              <div
                key={tx._id}
                className="flex justify-between items-center border-b border-slate-700 pb-4"
              >
                <div>
                  <h3 className="text-white font-semibold">
                    {isSender ? "Sent" : "Received"} ₹{tx.amount}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {isSender
                      ? `To: ${tx.receiver.email}`
                      : `From: ${tx.sender.email}`}
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    {new Date(tx.createdAt).toLocaleString()}
                  </p>
                </div>

                <span
                  className={`font-semibold ${
                    tx.status === "SUCCESS"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {tx.status}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default TransactionList;
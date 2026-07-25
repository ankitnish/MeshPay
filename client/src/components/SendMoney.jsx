import { useState } from "react";
import API from "../api/axios";
import toast from "react-hot-toast";
import { useUser } from "../context/UserContext";


function SendMoney() {
  const { user, updateUser } = useUser();

  const [formData, setFormData] = useState({
    receiverEmail: "",
    amount: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    try {
      setLoading(true);

      const res = await API.post("/payment/send", {
         receiverEmail: formData.receiverEmail,
         amount: Number(formData.amount),
      });
      toast.success(res.data.message);

      // Update balance in localStorage
      const updatedUser = {
        ...user,
        walletBalance: res.data.senderBalance,
      };

      updateUser(updatedUser);

    } catch (err) {
      toast.error(
        err.response?.data?.message || "Transaction failed"
        );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        Send Money
      </h2>

      {message && (
        <div className="mb-4 bg-slate-800 text-cyan-400 p-3 rounded-lg">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="email"
          name="receiverEmail"
          placeholder="Receiver Email"
          value={formData.receiverEmail}
          onChange={handleChange}
          required
          className="w-full bg-slate-800 text-white p-3 rounded-lg border border-slate-700 outline-none"
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          required
          className="w-full bg-slate-800 text-white p-3 rounded-lg border border-slate-700 outline-none"
        />

        <button
          disabled={loading}
          className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg font-semibold text-black"
        >
          {loading ? "Sending..." : "Send Money"}
        </button>

      </form>

    </div>
  );
}

export default SendMoney;
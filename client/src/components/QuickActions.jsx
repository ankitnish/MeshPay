import { Send, History, CreditCard } from "lucide-react";

function QuickActions() {
  const actions = [
    {
      icon: <Send size={28} />,
      title: "Send Money",
    },
    {
      icon: <History size={28} />,
      title: "Transactions",
    },
    {
      icon: <CreditCard size={28} />,
      title: "Wallet",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-5">
      {actions.map((action, index) => (
        <div
          key={index}
          className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-400 transition"
        >
          <div className="text-cyan-400 mb-4">
            {action.icon}
          </div>

          <h2 className="text-white font-semibold">
            {action.title}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default QuickActions;
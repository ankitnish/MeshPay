import { Users, Wallet, ArrowRightLeft, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "10K+",
    label: "Registered Users",
  },
  {
    icon: Wallet,
    number: "₹5M+",
    label: "Money Processed",
  },
  {
    icon: ArrowRightLeft,
    number: "50K+",
    label: "Transactions",
  },
  {
    icon: ShieldCheck,
    number: "99.9%",
    label: "Secure Transfers",
  },
];

function Stats() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-cyan-400 uppercase tracking-widest font-semibold">
            Statistics
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Trusted by Thousands
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto text-lg">
            MeshPay is built for speed, security, and reliability.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-cyan-400 transition duration-300"
              >
                <div className="flex justify-center mb-5">
                  <div className="bg-cyan-500/20 p-4 rounded-full">
                    <Icon className="text-cyan-400" size={32} />
                  </div>
                </div>

                <h3 className="text-4xl font-bold text-cyan-400">
                  {item.number}
                </h3>

                <p className="mt-3 text-slate-400">
                  {item.label}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Stats;
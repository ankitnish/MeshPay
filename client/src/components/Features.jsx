import {
  ShieldCheck,
  Wallet,
  ArrowRightLeft,
  BarChart3,
  Smartphone,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    description:
      "JWT-based authentication with encrypted passwords to keep user accounts protected.",
  },
  {
    icon: Wallet,
    title: "Digital Wallet",
    description:
      "Manage your wallet balance easily with a clean and intuitive dashboard.",
  },
  {
    icon: ArrowRightLeft,
    title: "Instant Transfers",
    description:
      "Transfer money between users instantly with secure backend validation.",
  },
  {
    icon: BarChart3,
    title: "Transaction History",
    description:
      "View all your previous transactions with detailed records and timestamps.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Optimized for desktops, tablets, and mobile devices using Tailwind CSS.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description:
      "Powered by React, Express, MongoDB, and Vite for a smooth experience.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold uppercase tracking-widest">
            Features
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Everything You Need
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto text-lg">
            MeshPay combines security, speed, and simplicity to provide
            a seamless digital wallet experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-6">
                  <Icon className="text-cyan-400" size={30} />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {feature.title}
                </h3>

                <p className="text-slate-400 leading-7">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Features;
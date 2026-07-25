import { UserPlus, Wallet, ArrowRightLeft } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "1. Create an Account",
    description:
      "Register securely with your name, email, and password to create your MeshPay account.",
  },
  {
    icon: Wallet,
    title: "2. Access Your Wallet",
    description:
      "Receive a wallet with an initial balance and manage your funds from the dashboard.",
  },
  {
    icon: ArrowRightLeft,
    title: "3. Send Money Instantly",
    description:
      "Transfer money securely to other registered users and track every transaction.",
  },
];

function HowItWork() {
  return (
    <section id="how-it-works" className="bg-slate-900 py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-cyan-400 uppercase tracking-widest font-semibold">
            How It Works
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Three Simple Steps
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto text-lg">
            Getting started with MeshPay is quick and simple.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center hover:border-cyan-400 transition"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <Icon size={32} className="text-cyan-400" />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {step.title}
                </h3>

                <p className="text-slate-400 leading-7">
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default HowItWork;
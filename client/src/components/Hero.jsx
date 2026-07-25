import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Wallet,
  ArrowRightLeft,
  BarChart3,
} from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-700 to-purple-700 opacity-20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Side */}
          <div>

            <span className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 px-5 py-2 rounded-full text-sm font-medium">
              🚀 MERN Stack + JWT + MongoDB Atlas
            </span>

            <h1 className="text-6xl lg:text-7xl font-black leading-tight mt-8">
              Send Money
              <br />
              <span className="text-cyan-400">
                Securely.
              </span>
              <br />
              Instantly.
            </h1>

            <p className="text-slate-300 text-xl leading-9 mt-8 max-w-xl">
              MeshPay is a modern digital wallet built with the MERN Stack.
              Experience secure authentication, wallet management,
              peer-to-peer money transfers, and transaction history
              through a beautiful, responsive interface.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/register"
                className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold px-8 py-4 rounded-xl transition duration-300"
              >
                Launch App
              </Link>

              <Link
                to="/login"
                className="border border-slate-600 hover:border-cyan-400 hover:bg-slate-800 px-8 py-4 rounded-xl transition duration-300"
              >
                Login
              </Link>

            </div>

            <div className="grid grid-cols-3 gap-8 mt-16">

              <div>
                <h2 className="text-4xl font-bold text-cyan-400">
                  100+
                </h2>
                <p className="text-slate-400 mt-2">
                  Transactions
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-cyan-400">
                  99.9%
                </h2>
                <p className="text-slate-400 mt-2">
                  Success Rate
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-cyan-400">
                  24/7
                </h2>
                <p className="text-slate-400 mt-2">
                  Availability
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">

            <h2 className="text-2xl font-bold mb-8">
              Wallet Overview
            </h2>

            <div className="space-y-6">

              <div className="flex items-center gap-4">

                <Wallet className="text-cyan-400" />

                <div>

                  <h3 className="font-semibold">
                    Wallet Balance
                  </h3>

                  <p className="text-green-400 text-lg">
                    ₹12,540
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <ArrowRightLeft className="text-cyan-400" />

                <div>

                  <h3 className="font-semibold">
                    Transactions
                  </h3>

                  <p className="text-slate-300">
                    128 Successful
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <ShieldCheck className="text-cyan-400" />

                <div>

                  <h3 className="font-semibold">
                    Security
                  </h3>

                  <p className="text-slate-300">
                    JWT Authentication
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <BarChart3 className="text-cyan-400" />

                <div>

                  <h3 className="font-semibold">
                    Transaction History
                  </h3>

                  <p className="text-slate-300">
                    Real-time Records
                  </p>

                </div>

              </div>

            </div>

            <button className="w-full mt-10 bg-cyan-400 hover:bg-cyan-300 text-black font-bold py-4 rounded-xl transition">
              Send Money
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
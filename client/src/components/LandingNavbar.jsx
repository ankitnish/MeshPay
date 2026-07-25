import { Link } from "react-router-dom";
import { Wallet } from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">

        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-white"
        >
          <Wallet className="w-8 h-8 text-cyan-400" />
          MeshPay
        </Link>

        <div className="hidden md:flex items-center gap-8 text-white">

          <a href="#features" className="hover:text-cyan-400 transition">
            Features
          </a>

          <a href="#how" className="hover:text-cyan-400 transition">
            How It Works
          </a>

          <a href="#stats" className="hover:text-cyan-400 transition">
            Statistics
          </a>

        </div>

        <div className="flex gap-3">

          <Link
            to="/login"
            className="px-5 py-2 rounded-xl text-white hover:bg-white/10 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
          >
            Get Started
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
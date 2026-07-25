import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Wallet, Mail, Lock, Eye, EyeOff } from "lucide-react";
import API from "../api/axios";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      const res = await API.post("/auth/login", formData);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/dashboard");
    } catch (err) {
      console.log(err);

        setError(
        err.response?.data?.message ||
        err.message ||
        "Something went wrong. Try again."
        );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-5">

      <div className="w-full max-w-md bg-slate-900 rounded-2xl border border-slate-800 shadow-xl p-8">

        <div className="text-center mb-8">

          <div className="flex justify-center mb-4">
            <Wallet className="text-cyan-400" size={50} />
          </div>

          <h1 className="text-3xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="text-slate-400 mt-2">
            Login to your MeshPay account
          </p>

        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-300 rounded-lg p-3 mb-5 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="text-slate-300 text-sm mb-2 block">
              Email
            </label>

            <div className="relative">

              <Mail
                className="absolute left-3 top-3 text-slate-400"
                size={18}
              />

              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white outline-none focus:border-cyan-400"
              />

            </div>
          </div>

          <div>

            <label className="text-slate-300 text-sm mb-2 block">
              Password
            </label>

            <div className="relative">

              <Lock
                className="absolute left-3 top-3 text-slate-400"
                size={18}
              />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-10 py-3 text-white outline-none focus:border-cyan-400"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-slate-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>

            </div>

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-600 transition py-3 rounded-lg font-semibold text-black disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <p className="text-center text-slate-400 mt-6">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="text-cyan-400 hover:underline"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;
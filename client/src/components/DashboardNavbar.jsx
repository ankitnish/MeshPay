import { useNavigate } from "react-router-dom";
import { Wallet, LogOut, User } from "lucide-react";
import { useUser } from "../context/UserContext";

function DashboardNavbar() {
  const navigate = useNavigate();
  const { user } = useUser();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Wallet className="text-cyan-400" size={32} />
          <h1 className="text-2xl font-bold text-white">
            MeshPay
          </h1>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <h2 className="text-white font-semibold">
              {user?.name}
            </h2>

            <p className="text-slate-400 text-sm">
              {user?.email}
            </p>
          </div>

          {/* Profile Button */}
          <button
            onClick={() => navigate("/profile")}
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg transition"
          >
            <User size={18} />
            Profile
          </button>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default DashboardNavbar;
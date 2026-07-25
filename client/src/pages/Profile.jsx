import { User, Mail, Wallet, Calendar } from "lucide-react";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto py-10 px-6">

        <h1 className="text-4xl font-bold mb-8">
          My Profile
        </h1>

        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 shadow-lg">

          <div className="flex items-center gap-6 mb-8">

            <div className="w-24 h-24 rounded-full bg-cyan-500 flex items-center justify-center text-4xl font-bold">
              {user?.name?.charAt(0).toUpperCase()}
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                {user?.name}
              </h2>

              <p className="text-slate-400">
                {user?.email}
              </p>
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-slate-800 rounded-xl p-5 flex items-center gap-4">
              <User className="text-cyan-400" />
              <div>
                <p className="text-slate-400">Full Name</p>
                <h3>{user?.name}</h3>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-5 flex items-center gap-4">
              <Mail className="text-cyan-400" />
              <div>
                <p className="text-slate-400">Email</p>
                <h3>{user?.email}</h3>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-5 flex items-center gap-4">
              <Wallet className="text-green-400" />
              <div>
                <p className="text-slate-400">Wallet Balance</p>
                <h3>₹{user?.walletBalance}</h3>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-5 flex items-center gap-4">
              <Calendar className="text-yellow-400" />
              <div>
                <p className="text-slate-400">Account Status</p>
                <h3>Active</h3>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile;
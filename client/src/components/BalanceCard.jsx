import { Wallet } from "lucide-react";
import { useUser } from "../context/UserContext";

function BalanceCard() {
 

    const { user } = useUser();

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 shadow-lg text-white">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-lg opacity-80">Current Balance</p>

          <h1 className="text-5xl font-bold mt-2">
            ₹{user?.walletBalance}
          </h1>

          <p className="mt-2 opacity-80">
            Welcome back, {user?.name}
          </p>
        </div>

        <Wallet size={70} />
      </div>
    </div>
  );
}

export default BalanceCard;
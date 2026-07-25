import DashboardNavbar from "../components/DashboardNavbar";
import BalanceCard from "../components/BalanceCard";
import QuickActions from "../components/QuickActions";
import SendMoney from "../components/SendMoney";
import TransactionList from "../components/TransactionList";
import StatsCard from "../components/StatsCard";
import SpendingChart from "../components/SpendingChart";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <DashboardNavbar />

      <div className="max-w-7xl mx-auto px-6 py-8">

        <BalanceCard />
        
        <div className="mt-8">
           <StatsCard />
            </div>
            <div className="mt-8">
            <SpendingChart />
            </div>
    

        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          <SendMoney />
          <TransactionList />
        </div>

        <div className="mt-8">
          <QuickActions />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
import CreateRentalForm from '../components/CreateRentalForm';
import WithdrawRentButton from '../components/WithdrawRentButton';

export default function Dashboard() {
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700">LeaseLink Dashboard</h1>
      <div className="flex flex-col items-center space-y-6">
        <CreateRentalForm />
        <WithdrawRentButton />
      </div>
    </div>
  );
}
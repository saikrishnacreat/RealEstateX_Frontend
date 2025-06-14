import { ConnectButton } from '@rainbow-me/rainbowkit';
import CreateRentalForm from './components/CreateRentalForm';
import WithdrawRentButton from './components/WithdrawRentButton';

function App() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">RealEstateX 🏠</h1>
        <ConnectButton />
      </div>
      <CreateRentalForm />
      <WithdrawRentButton />
    </div>
  );
}

export default App;

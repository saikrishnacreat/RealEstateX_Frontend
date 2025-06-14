import { useState } from 'react';
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../utils/constants';

export default function WithdrawRentButton() {
  const [rentalId, setRentalId] = useState('');
  const [txHash, setTxHash] = useState(null);

  const { config } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'withdrawRent',
    args: [parseInt(rentalId)],
    enabled: rentalId !== '',
  });

  const { write, data, isLoading, isSuccess } = useContractWrite(config);
  const wait = useWaitForTransaction({ hash: data?.hash });

  const handleWithdraw = () => {
    if (write) {
      write();
      setTxHash(data?.hash);
    }
  };

  return (
    <div className="p-4 border rounded-xl shadow-md w-full max-w-md mt-6">
      <h2 className="text-xl mb-4 font-bold">Withdraw Rent</h2>
      <input
        type="number"
        className="w-full mb-3 p-2 border"
        placeholder="Rental ID"
        value={rentalId}
        onChange={(e) => setRentalId(e.target.value)}
      />

      <button
        onClick={handleWithdraw}
        disabled={!write}
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        Withdraw
      </button>

      {isLoading && <p className="mt-2 text-yellow-600">Processing transaction...</p>}
      {wait.isSuccess && <p className="mt-2 text-green-600">✅ Rent withdrawn!</p>}
      {wait.isError && <p className="mt-2 text-red-600">❌ Error withdrawing rent.</p>}
    </div>
  );
}

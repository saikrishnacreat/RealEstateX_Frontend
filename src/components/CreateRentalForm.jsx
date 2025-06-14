import { useState } from 'react';
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../utils/constants';
import { usePublicClient } from 'wagmi';



export default function CreateRentalForm() {
  const [landlord, setLandlord] = useState('');
  const [rentUSD, setRentUSD] = useState('');
  const [duration, setDuration] = useState('');
  const [ethEstimate, setEthEstimate] = useState(null);
  const [txHash, setTxHash] = useState(null);

  const { writeContractAsync } = useWriteContract();

  const { isLoading, isSuccess } = useWaitForTransactionReceipt({
    hash: txHash,
  });

  const publicClient = usePublicClient();

const handleEstimate = async () => {
  try {
    const result = await publicClient.readContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'getETHAmountFromUSD',
      args: [BigInt(rentUSD)],
    });
    setEthEstimate(result.toString());
  } catch (err) {
    console.error('Estimation error:', err);
  }
};


  const handleCreateRental = async () => {
    try {
      const hash = await writeContractAsync({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'createRental',
        args: [landlord, BigInt(rentUSD), BigInt(duration)],
        value: BigInt(ethEstimate),
      });
      setTxHash(hash);
    } catch (err) {
      console.error('Transaction error:', err);
    }
  };

  return (
    <div className="p-4 border rounded-xl shadow-md w-full max-w-md">
      <h2 className="text-xl mb-4 font-bold">Create Rental</h2>

      <input
        className="w-full mb-2 p-2 border"
        placeholder="Landlord Address"
        value={landlord}
        onChange={(e) => setLandlord(e.target.value)}
      />
      <input
        className="w-full mb-2 p-2 border"
        placeholder="Rent (USD)"
        value={rentUSD}
        onChange={(e) => setRentUSD(e.target.value)}
      />
      <input
        className="w-full mb-2 p-2 border"
        placeholder="Duration (seconds)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />

      <button className="bg-blue-500 text-white px-4 py-2 mr-2" onClick={handleEstimate}>
        Estimate ETH
      </button>

      {ethEstimate && (
        <button className="bg-green-600 text-white px-4 py-2 mt-2" onClick={handleCreateRental}>
          Submit Rental
        </button>
      )}

      {isLoading && <p className="mt-2 text-yellow-600">Waiting for confirmation...</p>}
      {isSuccess && <p className="mt-2 text-green-600">Rental created successfully! ✅</p>}
    </div>
  );
}

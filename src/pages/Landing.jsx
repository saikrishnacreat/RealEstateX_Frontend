import { useNavigate } from 'react-router-dom';
import LeaseLinkLogo from '../assets/LeaseLink.png';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gradient-to-br from-indigo-600 to-purple-800 flex flex-col items-center justify-center text-white px-4">
    <div className="flex justify-center">
      <img
        src={LeaseLinkLogo}
        alt="LeaseLink Logo"
        style={{ width: '80px', height: 'auto' }} // ⬅️ smaller logo
      />
      </div>
      <h1 className="text-4xl font-extrabold mb-2 tracking-tight drop-shadow">
        Welcome to LeaseLink
      </h1>
      <p className="text-lg md:text-xl text-purple-200 mb-8 max-w-md text-center">
        A decentralized platform for secure, blockchain-powered rental agreements.
      </p>
      <button
        className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition-all"
        onClick={() => navigate('/dashboard')}
      >
        Enter App
      </button>
    </div>
  );
}

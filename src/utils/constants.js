export const CONTRACT_ADDRESS = "0x28D68daa01Bcce6f80aC8E38f17EE5E73716232f";
// export const CONTRACT_ABI = ABI;
// import abiFile from './abi.json';
export const CONTRACT_ABI = [
  {
    "type": "constructor",
    "inputs": [
      { "name": "_priceFeed", "type": "address", "internalType": "address" }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "createRental",
    "inputs": [
      { "name": "_landlord", "type": "address", "internalType": "address payable" },
      { "name": "_rentUSD", "type": "uint256", "internalType": "uint256" },
      { "name": "_durationInSeconds", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "getETHAmountFromUSD",
    "inputs": [
      { "name": "usdAmount", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [
      { "name": "", "type": "uint256", "internalType": "uint256" }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getLatestPrice",
    "inputs": [],
    "outputs": [
      { "name": "", "type": "int256", "internalType": "int256" }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "priceFeed",
    "inputs": [],
    "outputs": [
      { "name": "", "type": "address", "internalType": "contract AggregatorV3Interface" }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "rentalIdCounter",
    "inputs": [],
    "outputs": [
      { "name": "", "type": "uint256", "internalType": "uint256" }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "rentals",
    "inputs": [
      { "name": "", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [
      { "name": "tenant", "type": "address", "internalType": "address" },
      { "name": "landlord", "type": "address", "internalType": "address payable" },
      { "name": "rentUSD", "type": "uint256", "internalType": "uint256" },
      { "name": "rentETH", "type": "uint256", "internalType": "uint256" },
      { "name": "startTime", "type": "uint256", "internalType": "uint256" },
      { "name": "duration", "type": "uint256", "internalType": "uint256" },
      { "name": "isActive", "type": "bool", "internalType": "bool" },
      { "name": "isWithdrawn", "type": "bool", "internalType": "bool" }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "withdrawRent",
    "inputs": [
      { "name": "_rentalId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "RentDeposited",
    "inputs": [
      { "name": "rentalId", "type": "uint256", "internalType": "uint256", "indexed": false },
      { "name": "amount", "type": "uint256", "internalType": "uint256", "indexed": false }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "RentWithdrawn",
    "inputs": [
      { "name": "rentalId", "type": "uint256", "internalType": "uint256", "indexed": false }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "RentalCreated",
    "inputs": [
      { "name": "rentalId", "type": "uint256", "internalType": "uint256", "indexed": false },
      { "name": "tenant", "type": "address", "internalType": "address", "indexed": false },
      { "name": "landlord", "type": "address", "internalType": "address", "indexed": false },
      { "name": "rentUSD", "type": "uint256", "internalType": "uint256", "indexed": false },
      { "name": "duration", "type": "uint256", "internalType": "uint256", "indexed": false }
    ],
    "anonymous": false
  }
];



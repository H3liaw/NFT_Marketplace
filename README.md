# NFT Marketplace

A decentralized NFT marketplace built with Next.js, Hardhat, and Solidity smart contracts. Users can mint, buy, sell, and resell NFTs on the blockchain.

## 🚀 Features

- **NFT Minting**: Create and mint new NFTs with metadata stored on IPFS
- **Marketplace**: Browse and purchase NFTs from other users
- **Trading**: Sell and resell your NFTs on the marketplace
- **Wallet Integration**: Connect with MetaMask or other Web3 wallets
- **Decentralized**: Built on Ethereum/Polygon blockchain
- **Modern UI**: Clean, responsive interface built with Next.js and Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: Next.js 13, React, TypeScript, Tailwind CSS
- **Blockchain**: Solidity, Hardhat, Ethers.js
- **Smart Contracts**: OpenZeppelin contracts
- **Storage**: IPFS for NFT metadata
- **Wallet**: Web3Modal for wallet connections

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MetaMask or other Web3 wallet
- Basic understanding of blockchain and Web3

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd NFT_Marketplace
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
privateKey=your_private_key_here
```

### 4. Deploy Smart Contracts

```bash
# Compile contracts
npx hardhat compile

# Deploy to local network
npx hardhat run scripts/deploy.js --network localhost

# Deploy to testnet (Mumbai)
npx hardhat run scripts/deploy.js --network mumbai

# Deploy to mainnet (Polygon)
npx hardhat run scripts/deploy.js --network polygon
```

### 5. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 📱 Usage

### Connecting Your Wallet

1. Click "Connect Wallet" in the top navigation
2. Choose your preferred wallet (MetaMask recommended)
3. Approve the connection

### Minting NFTs

1. Navigate to the "Create NFT" page
2. Upload your NFT image
3. Add metadata (name, description)
4. Set the price
5. Pay the listing fee and mint your NFT

### Buying NFTs

1. Browse the marketplace
2. Click on an NFT you want to purchase
3. Review the details and price
4. Click "Buy NFT" and confirm the transaction

### Selling NFTs

1. Go to "My NFTs" to see your collection
2. Select an NFT you want to sell
3. Set the price and pay the listing fee
4. Your NFT will appear in the marketplace

## 🔧 Smart Contracts

### NFTMarketplace.sol

The main marketplace contract that handles:
- NFT minting and listing
- Buying and selling transactions
- Marketplace fees
- User collections management

### NFT.sol

The NFT token contract implementing ERC-721 standard.

## 🌐 Networks

The project supports multiple networks:

- **Hardhat Network** (Local development)
- **Mumbai Testnet** (Polygon testnet)
- **Polygon Mainnet** (Production)

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── contracts/             # Smart contracts
│   ├── NFTMarketplace.sol # Main marketplace contract
│   └── NFT.sol           # NFT token contract
├── scripts/              # Deployment scripts
├── test/                 # Contract tests
├── public/               # Static assets
└── hardhat.config.js     # Hardhat configuration
```

## 🧪 Testing

Run the smart contract tests:

```bash
npx hardhat test
```

## 🚀 Deployment

### Local Development

```bash
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
```

### Testnet Deployment

```bash
npx hardhat run scripts/deploy.js --network mumbai
```

### Mainnet Deployment

```bash
npx hardhat run scripts/deploy.js --network polygon
```

## 🔒 Security

- Smart contracts use OpenZeppelin's battle-tested libraries
- Access control implemented for admin functions
- Reentrancy protection in place
- Comprehensive testing suite

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Join our community discussions

## 🙏 Acknowledgments

- [OpenZeppelin](https://openzeppelin.com/) for secure smart contract libraries
- [Hardhat](https://hardhat.org/) for Ethereum development environment
- [Next.js](https://nextjs.org/) for the React framework
- [Tailwind CSS](https://tailwindcss.com/) for styling

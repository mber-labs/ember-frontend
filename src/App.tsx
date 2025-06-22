import React, { useState, useEffect } from 'react';
import { 
  Flame, 
  Shield, 
  Zap, 
  TrendingUp, 
  Users, 
  Lock,
  ArrowRight,
  Github,
  Twitter,
  MessageCircle,
  Bitcoin,
  DollarSign,
  MousePointer,
  Layers,
  X,
  Wallet,
  ArrowLeft,
  Copy,
  Check,
  ChevronDown,
  Info
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<'home' | 'loan'>('home');
  const [selectedToken, setSelectedToken] = useState('USDC');
  const [selectedChain, setSelectedChain] = useState('Ethereum');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [ltvRatio, setLtvRatio] = useState(1.5);
  const [showTokenDropdown, setShowTokenDropdown] = useState(false);
  const [showChainDropdown, setShowChainDropdown] = useState(false);
  const [addressCopied, setAddressCopied] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const bitcoinWallets = [
    {
      name: "Unisat",
      icon: "🟠",
      description: "Popular Bitcoin wallet with ordinals support"
    },
    {
      name: "Xverse",
      icon: "⚡",
      description: "Multi-chain Bitcoin wallet"
    },
    {
      name: "Leather",
      icon: "🔶",
      description: "Bitcoin & Stacks wallet"
    },
    {
      name: "OKX Wallet",
      icon: "⭕",
      description: "Multi-chain wallet with Bitcoin support"
    },
    {
      name: "Phantom",
      icon: "👻",
      description: "Multi-chain wallet supporting Bitcoin"
    },
    {
      name: "BitKeep",
      icon: "🔑",
      description: "Comprehensive Bitcoin wallet solution"
    }
  ];

  const tokens = [
    { symbol: 'USDC', name: 'USD Coin', icon: '💵', rate: '5.2%' },
    { symbol: 'USDT', name: 'Tether USD', icon: '💰', rate: '4.8%' },
    { symbol: 'DAI', name: 'Dai Stablecoin', icon: '🟡', rate: '5.5%' },
    { symbol: 'FRAX', name: 'Frax', icon: '🔷', rate: '6.1%' }
  ];

  const chains = [
    { name: 'Ethereum', icon: '⟠', fee: '$12' },
    { name: 'Polygon', icon: '🟣', fee: '$0.50' },
    { name: 'Arbitrum', icon: '🔵', fee: '$2' },
    { name: 'Optimism', icon: '🔴', fee: '$3' },
    { name: 'Base', icon: '🔷', fee: '$1' }
  ];

  const handleWalletConnect = (walletName: string) => {
    setConnectedWallet(walletName);
    setShowWalletModal(false);
    console.log(`Connecting to ${walletName} wallet...`);
  };

  const handleDisconnect = () => {
    setConnectedWallet(null);
    setCurrentPage('home');
  };

  const handleGetLoan = () => {
    if (connectedWallet) {
      setCurrentPage('loan');
    } else {
      setShowWalletModal(true);
    }
  };

  const copyAddress = async () => {
    if (recipientAddress) {
      await navigator.clipboard.writeText(recipientAddress);
      setAddressCopied(true);
      setTimeout(() => setAddressCopied(false), 2000);
    }
  };

  const calculateCollateralNeeded = () => {
    if (!loanAmount) return 0;
    const btcPrice = 65000; // Mock BTC price
    return (parseFloat(loanAmount) * ltvRatio) / btcPrice;
  };

  const calculateInterest = () => {
    if (!loanAmount) return 0;
    const selectedTokenData = tokens.find(t => t.symbol === selectedToken);
    const rate = parseFloat(selectedTokenData?.rate.replace('%', '') || '0') / 100;
    return parseFloat(loanAmount) * rate / 12; // Monthly interest
  };

  const features = [
    {
      icon: <Bitcoin className="w-8 h-8" />,
      title: "Native Bitcoin Collateral",
      description: "Use your Bitcoin directly as collateral without bridging, wrapping, or custody risks"
    },
    {
      icon: <MousePointer className="w-8 h-8" />,
      title: "One-Click Loans",
      description: "Get USDC/USDT loans instantly with a single click - no complex processes"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "High Liquidity",
      description: "Access deep liquidity pools for immediate loan fulfillment at competitive rates"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "No Bridging Required",
      description: "Keep your Bitcoin native and secure"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "No Wrapping",
      description: "Direct collateralization without token wrapping"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Settlement",
      description: "Immediate loan disbursement"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Competitive Rates",
      description: "Market-leading loan terms"
    }
  ];

  const stats = [
    { label: "Bitcoin Collateral Locked", value: "$847M+" },
    { label: "Loans Issued", value: "12.4K+" },
    { label: "Average Loan Size", value: "$45K" },
    { label: "Loan Success Rate", value: "99.8%" }
  ];

  if (currentPage === 'loan') {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Background Effects */}
        <div className="fixed inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-yellow-500/10"></div>
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-400/20 via-transparent to-transparent"></div>
        
        {/* Navigation */}
        <nav className="relative z-50 px-6 py-4 border-b border-gray-800">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setCurrentPage('home')}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                  <Flame className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Ember Protocol
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center px-3 py-2 bg-green-500/20 border border-green-500/30 rounded-lg">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span className="text-sm text-green-300">{connectedWallet}</span>
              </div>
              <button 
                onClick={handleDisconnect}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm"
              >
                Disconnect
              </button>
            </div>
          </div>
        </nav>

        {/* Loan Configuration */}
        <main className="relative z-10 px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-orange-200 to-red-200 bg-clip-text text-transparent">
                  Configure Your Bitcoin Loan
                </span>
              </h1>
              <p className="text-xl text-gray-400">
                Set your loan parameters and get instant liquidity from your Bitcoin
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Loan Configuration Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Token Selection */}
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <DollarSign className="w-5 h-5 mr-2 text-orange-400" />
                    Select Token to Borrow
                  </h3>
                  <div className="relative">
                    <button
                      onClick={() => setShowTokenDropdown(!showTokenDropdown)}
                      className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-xl flex items-center justify-between hover:border-orange-500/50 transition-colors"
                    >
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{tokens.find(t => t.symbol === selectedToken)?.icon}</span>
                        <div className="text-left">
                          <div className="font-semibold">{selectedToken}</div>
                          <div className="text-sm text-gray-400">{tokens.find(t => t.symbol === selectedToken)?.name}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-400 text-sm mr-2">{tokens.find(t => t.symbol === selectedToken)?.rate} APR</span>
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </button>
                    
                    {showTokenDropdown && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-700 rounded-xl overflow-hidden z-20">
                        {tokens.map((token) => (
                          <button
                            key={token.symbol}
                            onClick={() => {
                              setSelectedToken(token.symbol);
                              setShowTokenDropdown(false);
                            }}
                            className="w-full p-4 hover:bg-gray-700 flex items-center justify-between transition-colors"
                          >
                            <div className="flex items-center">
                              <span className="text-2xl mr-3">{token.icon}</span>
                              <div className="text-left">
                                <div className="font-semibold">{token.symbol}</div>
                                <div className="text-sm text-gray-400">{token.name}</div>
                              </div>
                            </div>
                            <span className="text-green-400 text-sm">{token.rate} APR</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Chain Selection */}
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Layers className="w-5 h-5 mr-2 text-orange-400" />
                    Select Chain
                  </h3>
                  <div className="relative">
                    <button
                      onClick={() => setShowChainDropdown(!showChainDropdown)}
                      className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-xl flex items-center justify-between hover:border-orange-500/50 transition-colors"
                    >
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{chains.find(c => c.name === selectedChain)?.icon}</span>
                        <div className="text-left">
                          <div className="font-semibold">{selectedChain}</div>
                          <div className="text-sm text-gray-400">Network fee: {chains.find(c => c.name === selectedChain)?.fee}</div>
                        </div>
                      </div>
                      <ChevronDown className="w-5 h-5" />
                    </button>
                    
                    {showChainDropdown && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-700 rounded-xl overflow-hidden z-20">
                        {chains.map((chain) => (
                          <button
                            key={chain.name}
                            onClick={() => {
                              setSelectedChain(chain.name);
                              setShowChainDropdown(false);
                            }}
                            className="w-full p-4 hover:bg-gray-700 flex items-center justify-between transition-colors"
                          >
                            <div className="flex items-center">
                              <span className="text-2xl mr-3">{chain.icon}</span>
                              <div className="text-left">
                                <div className="font-semibold">{chain.name}</div>
                                <div className="text-sm text-gray-400">Network fee: {chain.fee}</div>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Loan Amount */}
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-orange-400" />
                    Loan Amount
                  </h3>
                  <div className="relative">
                    <input
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-xl text-lg focus:border-orange-500/50 focus:outline-none transition-colors"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      {selectedToken}
                    </div>
                  </div>
                </div>

                {/* Recipient Address */}
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Wallet className="w-5 h-5 mr-2 text-orange-400" />
                    Recipient Address
                  </h3>
                  <div className="relative">
                    <input
                      type="text"
                      value={recipientAddress}
                      onChange={(e) => setRecipientAddress(e.target.value)}
                      placeholder="Enter recipient address"
                      className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-xl focus:border-orange-500/50 focus:outline-none transition-colors pr-12"
                    />
                    {recipientAddress && (
                      <button
                        onClick={copyAddress}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-400 transition-colors"
                      >
                        {addressCopied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                      </button>
                    )}
                  </div>
                </div>

                {/* LTV Ratio */}
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-orange-400" />
                    Loan-to-Value Ratio
                    <div className="ml-2 group relative">
                      <Info className="w-4 h-4 text-gray-400" />
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-700 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Higher ratio = more collateral required
                      </div>
                    </div>
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Current Ratio:</span>
                      <span className="text-2xl font-bold text-orange-400">{ltvRatio.toFixed(1)}:1</span>
                    </div>
                    <input
                      type="range"
                      min="1.5"
                      max="3.0"
                      step="0.1"
                      value={ltvRatio}
                      onChange={(e) => setLtvRatio(parseFloat(e.target.value))}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>1.5:1 (Risky)</span>
                      <span>3.0:1 (Safe)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Loan Summary */}
              <div className="lg:col-span-1">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sticky top-6">
                  <h3 className="text-xl font-semibold mb-6 text-center">Loan Summary</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Loan Amount:</span>
                      <span className="font-semibold">{loanAmount || '0'} {selectedToken}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Collateral Needed:</span>
                      <span className="font-semibold">{calculateCollateralNeeded().toFixed(4)} BTC</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">LTV Ratio:</span>
                      <span className="font-semibold">{ltvRatio.toFixed(1)}:1</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Interest Rate:</span>
                      <span className="font-semibold text-green-400">{tokens.find(t => t.symbol === selectedToken)?.rate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Monthly Interest:</span>
                      <span className="font-semibold">{calculateInterest().toFixed(2)} {selectedToken}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Network Fee:</span>
                      <span className="font-semibold">{chains.find(c => c.name === selectedChain)?.fee}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-4 mb-6">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total to Receive:</span>
                      <span className="text-orange-400">{loanAmount || '0'} {selectedToken}</span>
                    </div>
                  </div>

                  <button 
                    disabled={!loanAmount || !recipientAddress}
                    className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    Execute Loan
                  </button>
                  
                  <div className="mt-4 p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                    <div className="flex items-start">
                      <Shield className="w-4 h-4 text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
                      <div className="text-xs text-orange-200">
                        Your Bitcoin remains in your wallet as collateral. Loan will be automatically liquidated if BTC price drops significantly.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-yellow-500/10"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-400/20 via-transparent to-transparent"></div>
      
      {/* Wallet Connection Modal */}
      {showWalletModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 w-full max-w-md relative">
            <button 
              onClick={() => setShowWalletModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wallet className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Connect Bitcoin Wallet</h2>
              <p className="text-gray-400">Choose your preferred Bitcoin wallet to get started</p>
            </div>
            
            <div className="space-y-3">
              {bitcoinWallets.map((wallet, idx) => (
                <button
                  key={idx}
                  onClick={() => handleWalletConnect(wallet.name)}
                  className="w-full p-4 bg-gray-700/50 hover:bg-gray-700 border border-gray-600 hover:border-orange-500/50 rounded-xl transition-all duration-200 text-left group"
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">{wallet.icon}</span>
                    <div>
                      <div className="font-semibold group-hover:text-orange-400 transition-colors">
                        {wallet.name}
                      </div>
                      <div className="text-sm text-gray-400">{wallet.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl">
              <div className="flex items-start">
                <Shield className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-medium text-orange-300 mb-1">Secure Connection</div>
                  <div className="text-orange-200/80">Your Bitcoin stays in your wallet. We never have custody of your funds.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Ember Protocol
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#stats" className="text-gray-300 hover:text-white transition-colors">Stats</a>
            
            {connectedWallet ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center px-3 py-2 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-sm text-green-300">{connectedWallet}</span>
                </div>
                <button 
                  onClick={handleDisconnect}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setShowWalletModal(true)}
                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 px-6 pt-20 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
                <Bitcoin className="w-4 h-4 text-orange-400 mr-2" />
                <span className="text-sm text-orange-300">Native Bitcoin Collateralized Loans</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-orange-200 to-red-200 bg-clip-text text-transparent">
                Unlock Liquidity
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
                From Your Bitcoin
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Get instant USDC/USDT loans using your native Bitcoin as collateral. 
              No bridging, no wrapping, no complexity - just one click to liquidity.
            </p>

            {/* Value Props */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex flex-col items-center p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-xl">
                  <div className="text-orange-400 mb-2">
                    {benefit.icon}
                  </div>
                  <h3 className="text-sm font-semibold mb-1 text-center">{benefit.title}</h3>
                  <p className="text-xs text-gray-400 text-center">{benefit.description}</p>
                </div>
              ))}
            </div>
            
            {/* Launch App Button */}
            <div className="mb-16">
              <button 
                onClick={handleGetLoan}
                className="group relative px-12 py-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl text-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25"
              >
                <span className="flex items-center">
                  <Bitcoin className="w-6 h-6 mr-3" />
                  {connectedWallet ? 'Get Your Bitcoin Loan' : 'Connect Wallet to Start'}
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </button>
              <p className="text-sm text-gray-400 mt-3">
                {connectedWallet ? 'One click • No bridging • Instant liquidity' : 'Connect your Bitcoin wallet to get started'}
              </p>
            </div>
            
            {/* Stats */}
            <div id="stats" className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative z-10 px-6 py-20 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Three simple steps to unlock liquidity from your Bitcoin holdings
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Connect Your Bitcoin Wallet</h3>
              <p className="text-gray-400">Connect your Bitcoin wallet - your BTC stays in your control, no custody required</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Set Loan Terms</h3>
              <p className="text-gray-400">Choose your loan amount in USDC/USDT and collateral ratio - instant rate calculation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Receive Instant Loan</h3>
              <p className="text-gray-400">One click execution - receive USDC/USDT immediately while keeping your Bitcoin native</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Why Choose Ember Protocol
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The most advanced Bitcoin collateralized lending platform with unmatched simplicity and security
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-orange-400 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20 bg-gradient-to-r from-orange-500/10 to-red-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to Unlock Your Bitcoin?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of Bitcoin holders who've discovered the power of native collateralized lending
          </p>
          
          <button 
            onClick={handleGetLoan}
            className="group relative px-12 py-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl text-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25"
          >
            <span className="flex items-center">
              <Bitcoin className="w-6 h-6 mr-3" />
              {connectedWallet ? 'Start Your First Loan' : 'Connect Bitcoin Wallet'}
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </button>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Join the Community
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Connect with Bitcoin holders and DeFi enthusiasts leveraging native Bitcoin collateral
          </p>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="group p-4 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:border-orange-500/50 transition-all duration-200 hover:transform hover:scale-105">
              <Twitter className="w-6 h-6 text-gray-400 group-hover:text-orange-400" />
            </a>
            <a href="#" className="group p-4 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:border-orange-500/50 transition-all duration-200 hover:transform hover:scale-105">
              <MessageCircle className="w-6 h-6 text-gray-400 group-hover:text-orange-400" />
            </a>
            <a href="#" className="group p-4 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:border-orange-500/50 transition-all duration-200 hover:transform hover:scale-105">
              <Github className="w-6 h-6 text-gray-400 group-hover:text-orange-400" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Ember Protocol
              </span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Ember Protocol. Native Bitcoin collateralized lending.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
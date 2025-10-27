import React from 'react'
import { motion } from 'framer-motion'

const CryptoLogosSection = () => {
  // Crypto logos with emojis as placeholders - You can replace these with actual image paths
  const cryptoRow1 = [
    { name: 'BTC', emoji: '₿', color: 'from-orange-400 to-orange-600' },
    { name: 'ETH', emoji: 'Ξ', color: 'from-blue-400 to-blue-600' },
    { name: 'BNB', emoji: '⬤', color: 'from-yellow-400 to-yellow-600' },
    { name: 'ADA', emoji: '◆', color: 'from-blue-500 to-blue-700' },
    { name: 'SOL', emoji: '◉', color: 'from-purple-400 to-purple-600' },
    { name: 'DOT', emoji: '●', color: 'from-pink-400 to-pink-600' },
    { name: 'AVAX', emoji: '▲', color: 'from-red-400 to-red-600' },
    { name: 'MATIC', emoji: '⬟', color: 'from-purple-500 to-purple-700' },
    { name: 'LINK', emoji: '⬡', color: 'from-blue-400 to-blue-600' },
    { name: 'UNI', emoji: '🦄', color: 'from-pink-400 to-pink-600' }
  ]
  
  const cryptoRow2 = [
    { name: 'XRP', emoji: '✕', color: 'from-gray-400 to-gray-600' },
    { name: 'DOGE', emoji: '🐕', color: 'from-yellow-400 to-yellow-600' },
    { name: 'SHIB', emoji: '🐶', color: 'from-orange-400 to-orange-600' },
    { name: 'VET', emoji: '⚡', color: 'from-blue-400 to-blue-600' },
    { name: 'ALGO', emoji: '◭', color: 'from-gray-500 to-gray-700' },
    { name: 'LTC', emoji: 'Ł', color: 'from-gray-400 to-gray-600' },
    { name: 'TRX', emoji: '⬟', color: 'from-red-400 to-red-600' },
    { name: 'USDT', emoji: '₮', color: 'from-green-400 to-green-600' },
    { name: 'USDC', emoji: '◉', color: 'from-blue-400 to-blue-600' },
    { name: 'DAI', emoji: '◈', color: 'from-yellow-400 to-yellow-600' }
  ]
  
  const cryptoRow3 = [
    { name: 'ATOM', emoji: '⚛', color: 'from-purple-400 to-purple-600' },
    { name: 'FTM', emoji: '👻', color: 'from-blue-400 to-blue-600' },
    { name: 'NEAR', emoji: '◎', color: 'from-gray-400 to-gray-600' },
    { name: 'SAND', emoji: '🏖', color: 'from-blue-400 to-blue-600' },
    { name: 'MANA', emoji: '🎮', color: 'from-red-400 to-red-600' },
    { name: 'AXS', emoji: '⚔', color: 'from-blue-500 to-blue-700' },
    { name: 'APE', emoji: '🐵', color: 'from-blue-400 to-blue-600' },
    { name: 'CRV', emoji: '⚜', color: 'from-red-400 to-red-600' },
    { name: 'AAVE', emoji: '👻', color: 'from-purple-400 to-purple-600' },
    { name: 'COMP', emoji: '◈', color: 'from-green-400 to-green-600' }
  ]
  
  const cryptoRow4 = [
    { name: 'XTZ', emoji: '◉', color: 'from-blue-400 to-blue-600' },
    { name: 'EOS', emoji: '◆', color: 'from-gray-400 to-gray-600' },
    { name: 'EGLD', emoji: '⬡', color: 'from-gray-500 to-gray-700' },
    { name: 'FIL', emoji: '◎', color: 'from-blue-400 to-blue-600' },
    { name: 'ICP', emoji: '∞', color: 'from-purple-400 to-purple-600' },
    { name: 'HBAR', emoji: '◈', color: 'from-gray-400 to-gray-600' },
    { name: 'THETA', emoji: 'Θ', color: 'from-blue-400 to-blue-600' },
    { name: 'VET', emoji: '⚡', color: 'from-blue-500 to-blue-700' },
    { name: 'XLM', emoji: '🚀', color: 'from-gray-400 to-gray-600' },
    { name: 'QNT', emoji: '◉', color: 'from-purple-400 to-purple-600' }
  ]
  
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-white overflow-hidden">
      <div className="w-full mb-12">
        <p className="text-center text-sm sm:text-base text-gray-700 mb-8 px-4 leading-relaxed">
          Whether you're sending USDC, swapping BONK, sniping a fresh Contract Address, or<br className="hidden sm:block"/>
          deploying your own token — Blink connects you directly to the most active<br className="hidden sm:block"/>
          ecosystems in crypto.
        </p>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-black mb-4">
          Whitelisted<br/>Cryptocurrencies
        </h2>
      </div>
      
      <div className="space-y-6">
        {/* Row 1 - Left to Right */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4 sm:gap-6"
            animate={{ x: [0, -2000] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...cryptoRow1, ...cryptoRow1, ...cryptoRow1, ...cryptoRow1].map((crypto, i) => (
              <div
                key={i}
                className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br ${crypto.color} rounded-full flex items-center justify-center text-white font-bold text-2xl sm:text-3xl shadow-lg`}
              >
                {crypto.emoji}
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Row 2 - Right to Left */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4 sm:gap-6"
            animate={{ x: [-2000, 0] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...cryptoRow2, ...cryptoRow2, ...cryptoRow2, ...cryptoRow2].map((crypto, i) => (
              <div
                key={i}
                className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br ${crypto.color} rounded-full flex items-center justify-center text-white font-bold text-2xl sm:text-3xl shadow-lg`}
              >
                {crypto.emoji}
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Row 3 - Left to Right */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4 sm:gap-6"
            animate={{ x: [0, -2000] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...cryptoRow3, ...cryptoRow3, ...cryptoRow3, ...cryptoRow3].map((crypto, i) => (
              <div
                key={i}
                className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br ${crypto.color} rounded-full flex items-center justify-center text-white font-bold text-2xl sm:text-3xl shadow-lg`}
              >
                {crypto.emoji}
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Row 4 - Right to Left */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4 sm:gap-6"
            animate={{ x: [-2000, 0] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...cryptoRow4, ...cryptoRow4, ...cryptoRow4, ...cryptoRow4].map((crypto, i) => (
              <div
                key={i}
                className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br ${crypto.color} rounded-full flex items-center justify-center text-white font-bold text-2xl sm:text-3xl shadow-lg`}
              >
                {crypto.emoji}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      <div className="mt-12 text-center px-4">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">
          And Yes ! We are adding support for<br className="hidden sm:block"/>
          thousands more.
        </p>
        <p className="text-lg sm:text-xl text-gray-700">
          If it's on-chain,<br className="sm:hidden"/>
          <span className="font-bold"> BlinkBot can talk to it.</span>
        </p>
      </div>
    </section>
  )
}

export default CryptoLogosSection

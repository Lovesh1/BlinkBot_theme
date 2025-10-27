import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const FeaturesSection = () => {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const isInView1 = useInView(ref1, { once: false, amount: 0.2 })
  const isInView2 = useInView(ref2, { once: false, amount: 0.2 })
  const isInView3 = useInView(ref3, { once: false, amount: 0.2 })
  
  const cryptoActions = [
    {
      emoji: "💸",
      title: "Send Funds Instantly",
      description: "Transfer tokens to anyone by tagging @BlinkBotAI. It auto-detects the receiver and sends.",
      imageSrc: "../../send_funds.png"
    },
    {
      emoji: "🔄",
      title: "Swap Tokens",
      description: "Want to convert SOL to BONK or USDC? Just tweet it. Blink does the math and the swap.",
      imageSrc: "../../swap_tokens.png"
    },
    {
      emoji: "⚡",
      title: "Deploy Smart Contracts",
      description: "Launch tokens, create lock contracts, or vesting logic — all via tweets & DMs.",
      imageSrc: "../../deploy_smart.png"
    }
  ]
  
  const bottomFeatures = [
    {
      emoji: "🧠",
      title: "AI-Driven Parsing",
      description: "BlinkBot uses intelligent language processing to understand your tweets. No syntax learning.",
      imageSrc: "../../ai_driven.png"
    },
    {
      emoji: "📱",
      title: "DM-Based Automation",
      description: "You can do everything from the DMs too. Private, clean, secure.",
      imageSrc: "../../dm_based.png"
    }
  ]
  
  const additionalFeatures = [
    {
      emoji: "👛",
      title: "Multi-Wallet Support",
      description: "Switch between personal, brand, or anonymous wallets with one command. Switch between personal, brand, or anonymous wallets with one command",
      imageSrc: "../../multi_wallet_support.png"
    },
    {
      emoji: "🎯",
      title: "Sniper Mode (Alpha Hunter)",
      description: "Blink will monitor the project or tweet author and auto-buy the token when the contract is posted.",
      imageSrc: "../../nake.png"
    },
    {
      emoji: "🎁",
      title: "Airdrops & Giveaways",
      description: "Want to airdrop tokens to followers? Blink handles randomized or tagged-based drops straight from tweets.",
      imageSrc: "../../airdrop.png"
    }
  ]
  
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="w-full space-y-12 sm:space-y-16">
        
        {/* First Section - Crypto Moves */}
        <div ref={ref1}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-8"
          >
            Crypto Moves, One Post Away
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {cryptoActions.map((action, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-[#F5C000]/50 rounded-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl cursor-pointer"
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-2xl sm:text-3xl">{action.emoji}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-black">{action.title}</h3>
                </div>
                
                <div className="flex items-center justify-center h-32 sm:h-48 rounded-2xl overflow-hidden mb-4">
                  <img src={action.imageSrc} alt={action.title} className="w-full h-full object-contain" />
                </div>
                
                <p className="text-sm sm:text-base text-center font-medium text-gray-800 leading-relaxed">
                  {action.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Second Section - 2 Large Feature Cards */}
        <div ref={ref2}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {bottomFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="bg-[#F5C000]/50 rounded-xl p-6 sm:p-8 md:p-10 transition-all duration-300 hover:shadow-xl cursor-pointer"
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-3xl">{feature.emoji}</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-black">{feature.title}</h3>
                </div>
                <p className="text-base sm:text-lg font-medium text-gray-800 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="flex items-center justify-center h-32 sm:h-40 md:h-48 rounded-2xl overflow-hidden">
                  {feature.imageSrc ? (
                    <img src={feature.imageSrc} alt={feature.title} className="w-full h-full object-contain" />
                  ) : (
                    <span className="text-6xl">{feature.emoji}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Third Section - 3 Additional Feature Cards */}
        <div ref={ref3}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {additionalFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-[#F5C000]/50 rounded-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl cursor-pointer"
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-2xl sm:text-3xl">{feature.emoji}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-black">{feature.title}</h3>
                </div>
                <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="flex items-center justify-center h-24 sm:h-32 rounded-xl overflow-hidden">
                  {feature.imageSrc ? (
                    <img src={feature.imageSrc} alt={feature.title} className="w-full h-full object-contain" />
                  ) : (
                    <span className="text-4xl sm:text-5xl">{feature.emoji}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* CTA Section with Circular Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView3 ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-[#F5C000]/50 rounded-3xl p-8 sm:p-12 md:p-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left side - Text */}
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
                  <span className="text-3xl">🔄</span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">
                    Automate Your<br/>Crypto Life on Twitter
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-800 font-medium mb-8 leading-relaxed">
                  Manage wallets, send funds, swap tokens, or even snipe launches — all without leaving your feed.<br/>
                  No apps. No extensions. BlinkBot turns your tweets and DMs into powerful crypto actions on Solana and beyond
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-gray-800 transition-all duration-300"
                >
                  Try a Tweet
                </motion.button>
              </div>
              
              {/* Right side - Circular illustration */}
              <div className="flex items-center justify-center">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                  {/* Concentric circles */}
                  <div className="absolute inset-0 border-4 border-yellow-400 rounded-full opacity-20"></div>
                  <div className="absolute inset-8 border-4 border-yellow-500 rounded-full opacity-30"></div>
                  <div className="absolute inset-16 border-4 border-yellow-600 rounded-full opacity-40"></div>
                  
                  {/* Center icon - Hands with phones */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white rounded-full p-8 shadow-2xl">
                      <img src="../../automate.png" alt="Hands with Phones" className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  )
}

export default FeaturesSection

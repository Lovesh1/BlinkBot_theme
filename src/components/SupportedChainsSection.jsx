import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SupportedChainsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  
  const chains = [
    { 
      name: 'BNB Smart Chain (BNB)', 
      logo: '🟡', // Replace with actual logo path
      send: true, 
      swap: true, 
      deploy: true 
    },
    { 
      name: 'Ethereum (ETH)', 
      logo: '⚪', 
      send: true, 
      swap: true, 
      deploy: true 
    },
    { 
      name: 'Bitcoin (BTC)', 
      logo: '🟠', 
      send: true, 
      swap: true, 
      deploy: false 
    },
    { 
      name: 'Solana (SOL)', 
      logo: '🟣', 
      send: true, 
      swap: true, 
      deploy: true 
    },
    { 
      name: 'Avalanche (AVAX)', 
      logo: '🔴', 
      send: true, 
      swap: true, 
      deploy: false 
    },
    { 
      name: 'Polygon (MATIC)', 
      logo: '🟣', 
      send: true, 
      swap: true, 
      deploy: true 
    },
    { 
      name: 'Polkadot (DOT)', 
      logo: '🔵', 
      send: true, 
      swap: true, 
      deploy: false 
    }
  ]
  
  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-6">
            Wide Range of Supported Chains
          </h2>
          <p className="text-base sm:text-lg text-gray-700 px-4 leading-relaxed">
            Our bot supports a diverse selection of blockchain networks,<br className="hidden sm:block"/>
            empowering you to manage various cryptocurrencies with ease<br className="hidden sm:block"/>
            and flexibility.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto flex justify-center"
        >
          <div className="bg-black rounded-3xl overflow-hidden shadow-2xl min-w-[320px] sm:min-w-[600px] w-full lg:w-auto">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 p-6 sm:p-8 border-b border-gray-800">
              <div className="text-left">
                <span className="text-white font-bold text-base sm:text-lg">Chain</span>
              </div>
              <div className="text-center">
                <span className="text-white font-bold text-base sm:text-lg">Send</span>
              </div>
              <div className="text-center">
                <span className="text-white font-bold text-base sm:text-lg">Swap</span>
              </div>
              <div className="text-center">
                <span className="text-white font-bold text-base sm:text-lg">Deploy</span>
              </div>
            </div>
            
            {/* Table Rows */}
            <div>
              {chains.map((chain, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + (i * 0.08) }}
                  className={`grid grid-cols-4 gap-4 items-center p-6 sm:p-8 transition-all duration-300 hover:bg-gray-900 ${
                    i % 2 === 0 ? 'bg-gray-950' : 'bg-black'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                      {chain.logo}
                    </div>
                    <span className="text-white font-medium text-sm sm:text-base">{chain.name}</span>
                  </div>
                  <div className="text-center">
                    {chain.send ? (
                      <span className="text-green-500 text-xl sm:text-2xl">✓</span>
                    ) : (
                      <span className="text-red-500 text-xl sm:text-2xl">✕</span>
                    )}
                  </div>
                  <div className="text-center">
                    {chain.swap ? (
                      <span className="text-green-500 text-xl sm:text-2xl">✓</span>
                    ) : (
                      <span className="text-red-500 text-xl sm:text-2xl">✕</span>
                    )}
                  </div>
                  <div className="text-center">
                    {chain.deploy ? (
                      <span className="text-green-500 text-xl sm:text-2xl">✓</span>
                    ) : (
                      <span className="text-red-500 text-xl sm:text-2xl">✕</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SupportedChainsSection

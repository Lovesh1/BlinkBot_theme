import React from 'react'
import { motion } from 'framer-motion'

const Button = ({ children, variant = 'primary', ...props }) => {
  const styles = variant === 'primary' 
    ? 'bg-black text-white hover:bg-gray-800' 
    : 'bg-transparent text-black border border-black/20 hover:border-black/40'
  
  return (
    <motion.a
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${styles} px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-[15px] transition-all duration-300 inline-block cursor-pointer`}
      {...props}
    >
      {children}
    </motion.a>
  )
}

const HeroSection = () => {
  const features = ['Open-Source', 'Secure', 'Decentralized', 'Transparent', 'TrustWorthy']
  
  return (
    <div className='flex w-full'>
      <div className="w-6xl h-96 bg-black my-auto">hello</div>
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-20 bg-white">
      <div className="w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 sm:mb-8 text-black px-4"
        >
          Crypto Just Blinked. Tip,<br/>Buy, Deploy Straight from X.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 px-4 leading-relaxed"
        >
          BlinkBot is the only AI-powered Twitter bot that lets you send tokens, swap tokens,<br></br> and deploy contracts directly from tweets or DMs
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 items-center px-4"
        >
          <Button variant="primary">Tweet @BlinkBotAI</Button>
          <Button variant="secondary">Key Features</Button>
        </motion.div>
        
        {/* Rotating Features Marquee */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 sm:mt-24"
        >
          <div className="flex overflow-hidden gap-4 sm:gap-6">
            <div className="flex gap-4 sm:gap-6 animate-marquee">
              {features.map(feature => (
                <div 
                  key={feature} 
                  className="bg-yellow-50 border border-yellow-200 px-6 py-2 rounded-full text-sm sm:text-base font-medium text-black whitespace-nowrap flex-shrink-0"
                >
                  {feature}
                </div>
              ))}
            </div>
            <div className="flex gap-4 sm:gap-6 animate-marquee">
              {features.map(feature => (
                <div 
                  key={feature + '2'} 
                  className="bg-yellow-50 border border-yellow-200 px-6 py-2 rounded-full text-sm sm:text-base font-medium text-black whitespace-nowrap flex-shrink-0"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    </div>
  )
}

export default HeroSection

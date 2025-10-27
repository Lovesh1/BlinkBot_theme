import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  
  const features = [
    {
      icon: '../../lock (1).png',
      title: 'Keep Your Crypto Safe',
      description: 'Your assets are stored securely via non-custodial wallets created just for you. Fully on-chain. Always yours.'
    },
    {
      icon: '../../wallet.png',
      title: 'Manage Everything Easily',
      description: 'Effortlessly handle your crypto portfolio in one place, making transactions simple and intuitive.'
    },
    {
      icon: '../../smartphone.png',
      title: 'Use It Anywhere',
      description: 'At work, in traffic, or mid-spaces — BlinkBot works right from your X app. No logins, no installs.'
    }
  ]
  
  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Side - Phone Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-64 sm:w-80 md:w-96">
              {/* Replace this with actual illustration image */}
                <img src="../../elon.png" alt="Illustration" className="w-full h-auto" />
            </div>
          </motion.div>
          
          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#F5F5F5] border-2 border-black/45 rounded-full px-6 py-2 text-sm font-semibold mb-6 inline-flex items-center gap-2 hover:bg-gray-50 transition-all duration-300"
            >
              <span>🔍</span>
              About BlinkBot
            </motion.button>
            
            <h2 className="text-3xl sm:text-4xl  font-bold text-black mb-6 leading-relaxed">
              Your Crypto Wallet. Trading Terminal. Deployment Engine. All Inside a Tweet.
            </h2>
            
            <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
              Forget apps and seed phrases — BlinkBot turns your Twitter timeline into a full-featured crypto command center. Powered by intelligent parsing and on-chain automation, Blink lets you manage, trade, deploy, and even snipe tokens just by posting or DMing.
            </p>
            
            <p className="text-base sm:text-lg text-gray-900 font-semibold">
              With BlinkBot, you don't just use crypto. You command it.
            </p>
          </motion.div>
        </div>
        
        {/* Bottom Yellow Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-[#F5C000]/30 rounded-3xl p-8 sm:p-10 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + (i * 0.1) }}
                className="text-center md:text-left"
              >
                <div className="text-4xl mb-4">
                    <img src={feature.icon} alt={feature.title} className="w-12 h-12 mx-auto md:mx-0" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection

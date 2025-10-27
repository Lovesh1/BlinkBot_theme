import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SupportSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  
  const supportOptions = [
    {
      icon: '✉️',
      title: 'Email Support',
      description: 'Our team is ready to assist you with any inquiries and provide all the information.'
    },
    {
      icon: '𝕏',
      title: 'X Community',
      description: 'Join our lively X Community for crypto insights, updates, and support.'
    },
    {
      icon: '📱',
      title: 'Telegram Community',
      description: 'Join the chat for lively discussions. Connect with other enthusiasts.'
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
            Get Help and Assistance
          </h2>
          <p className="text-base sm:text-lg text-gray-600 px-4 leading-relaxed">
            Access our support team for assistance with any questions or issues. We're<br className="hidden sm:block"/>
            here to help you navigate the world of cryptocurrency with confidence.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Support Options */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {supportOptions.map((option, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-50 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl sm:text-4xl flex-shrink-0">
                    {option.icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">
                      {option.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {option.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Right Side - Illustration Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gradient-to-br from-pink-300 to-pink-400 rounded-3xl p-8 sm:p-12 flex items-center justify-center min-h-[400px] sm:min-h-[500px]"
          >
            {/* Replace with actual illustration */}
            <div className="text-center">
              <div className="relative">
                <div className="text-8xl sm:text-9xl mb-4">🚀</div>
                <div className="absolute -top-4 -right-8 bg-yellow-300 rounded-full px-6 py-3 rotate-12 shadow-lg">
                  <span className="text-xl sm:text-2xl font-extrabold text-black">TO THE MOON</span>
                </div>
              </div>
              <div className="text-6xl sm:text-7xl mt-8">👨‍🚀</div>
              <div className="flex gap-4 justify-center mt-6">
                <div className="text-4xl">💰</div>
                <div className="text-4xl">💰</div>
                <div className="text-4xl">💰</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SupportSection

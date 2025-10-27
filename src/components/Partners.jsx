import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PartnersSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  
  const partners = [
    { name: 'LangChain', logo: '🔗' },
    { name: 'Solana', logo: '◎' },
    { name: 'Flowise', logo: '💧' },
    { name: 'QuickNode', logo: '⚡' },
    { name: 'Vercel', logo: '▲' }
  ]
  
  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-6 inline-block border-b-4 border-dotted border-gray-300 pb-2">
            Our Trusted Partners
          </h2>
          <p className="text-base sm:text-lg text-gray-800 px-4 leading-relaxed mt-6">
            Discover partners powering BlinkBot's success. Through strategic<br className="hidden sm:block"/>
            alliances, we ensure reliability, security, and innovation for your crypto<br className="hidden sm:block"/>
            journey.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6"
        >
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-6 sm:p-8 flex items-center justify-center shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200"
            >
              <div className="text-center">
                <div className="text-4xl sm:text-5xl mb-3">{partner.logo}</div>
                <span className="text-base sm:text-lg font-bold text-gray-900">{partner.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default PartnersSection

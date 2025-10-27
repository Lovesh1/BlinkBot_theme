import React, { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ApproachScrollSection = () => {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    const handle = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const height = ref.current.offsetHeight
      const vh = window.innerHeight
      const p = Math.max(0, Math.min(1, (vh - rect.top) / (height + vh)))
      setProgress(p)
    }
    
    window.addEventListener('scroll', handle)
    handle()
    return () => window.removeEventListener('scroll', handle)
  }, [])
  
  const steps = [
    { num: "1", title: "Decentralized", desc: "Built on blockchain technology, BlinkBot eliminates middlemen and ensures true peer-to-peer interaction. Your assets always stay in your control.", icon: '../../decentralized.png', bg: "#adff2f" },
    { num: "2", title: "Transparency", desc: "Every transaction is verifiable on-chain, offering complete visibility into operations. No hidden processes, no hidden fees.", icon: '../../transparency.png', bg: "#7dd3fc" },
    { num: "3", title: "Trustworthy", desc: "BlinkBot prioritizes integrity and user confidence through secure wallet integration and verifiable smart contracts. Trust is built into every action.", icon: "../../guaranteed.png", bg: "#fca5a5" },
    { num: "4", title: "Security", desc: "Advanced encryption, non-custodial wallets, and blockchain-level protection safeguard your digital assets at every step.", icon: "../../lock.png", bg: "#c084fc" },
    { num: "5", title: "Open Source", desc: "BlinkBot’s open-source framework promotes community trust and innovation. Anyone can review, contribute, and verify the technology behind it.", icon: "../../open-source.png", bg: "#c084fc" }
  ]
  
  const active = Math.min(Math.floor(progress * steps.length * 1.5), steps.length - 1)
  
  return (
    <section ref={ref} className="relative bg-white" style={{ height: '400vh' }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left side - Fixed position with animated pop-in */}
            <div className="flex items-center justify-center h-[300px] sm:h-[400px] md:h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ scale: 0, opacity: 0, rotate: -180 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0, opacity: 0, rotate: 180 }}
                  transition={{ 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }}
                >
                  <div className='flex items-center gap-6'>
                     <motion.div 
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-200 mb-4"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                  >
                    /0<span className='text-[#F5C000]'>{steps[active].num}</span>
                  </motion.div>
                  <div 
                    className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center text-6xl sm:text-7xl md:text-9xl"
                    style={{ background: steps[active].bg, boxShadow: `0 20px 60px ${steps[active].bg}40` }}
                  >
                    <img src={steps[active].icon} alt={steps[active].title} className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain" />
                  </div>
                  </div>
                  
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Right side - Text content that changes */}
            <div className="text-center lg:text-left flex items-center min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${active}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  
                  <motion.h2 
                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 text-black"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {steps[active].title}
                  </motion.h2>
                  
                  <motion.p 
                    className="text-lg sm:text-xl md:text-2xl text-[#F5C000] leading-relaxed"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {steps[active].desc}
                  </motion.p>
                  
                  <div className="mt-8 sm:mt-12 flex gap-3 justify-center lg:justify-start">
                    {steps.map((_, i) => (
                      <motion.div
                        key={i}
                        className={`h-2 rounded-full transition-all duration-500 ${i === active ? 'bg-black' : 'bg-gray-300'}`}
                        animate={{ width: i === active ? '48px' : '8px' }}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ApproachScrollSection

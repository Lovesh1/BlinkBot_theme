import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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

const Navigation = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <nav className=" top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-black/10">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-xl sm:text-2xl font-bold">
            <img src="../../public/logo.png" alt="BlinkBot Logo" className="h-8 sm:h-10"/>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {['Features','Services','About Us', 'Coins', 'Security'].map((item, i) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                href={`#${item.toLowerCase()}`}
                className="text-black/70 hover:text-black text-sm font-medium transition-colors"
              >
                {item}
              </motion.a>
            ))}
            <div className='flex gap-2'>
               <Button className='bg-[#D9D9D9] text-center px-4 py-3 rounded-2xl border border-black/20 hover:border-black/40' >Wallet Manager</Button>
            <Button variant="primary">X (Twitter)</Button>
            </div>
           
          </div>
          
          <button className="md:hidden text-black" onClick={() => setOpen(!open)}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18"/>
            </svg>
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-black/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {['Services', 'Work', 'Approach', 'About'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block text-black/70 text-lg">{item}</a>
              ))}
              <Button variant="primary" className="block text-center w-full">Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation

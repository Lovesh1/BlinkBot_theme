import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const TestimonialsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  
  const tweets = [
    {
      author: 'Alex Finn',
      handle: '@AlexFinnX',
      avatar: '👤',
      content: "Everything we just learned about the insane future of 'X'- it will basically become your bank account. Completely replaces services like Venmo. Store your money and earn interest. Pay other creators. Buy products from vendors/creators. Use X Payments in physical stores. Any way you can use money, you'll be able to do it with",
      date: 'Apr 22, 2024'
    },
    {
      author: 'Marjid Cryptonite',
      handle: '@MarjidOfficial',
      avatar: '👤',
      content: "Elon Musk says X payments will eliminate need for bank account by end of 2024. Here is what you need to know!\n\nIt's building X Payments. Biggest The Right Coin Elon Should Finale For This Play. I wanna see a MASSIVE crypto integration from X.",
      date: 'Oct 09, 2024'
    },
    {
      author: 'DoggoDesigner',
      handle: '@dob_doggo',
      avatar: '👤',
      content: "Elon Musk is in talks with jpMorgan Wall Street executives regarding payments on X. The intention is to develop an advanced payment platform that offers lower transaction costs compared to credit cards.",
      date: 'Aug 24, 2023'
    }
  ]
  
  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#5a5a5a] rounded-[3rem] mx-4 sm:mx-8 my-16">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            📢 Market is talking.<br/>We are listening.
          </h2>
          <p className="text-base sm:text-lg text-gray-300 px-4 leading-relaxed">
            These tweets highlight real user demand for payments, tipping, and token<br className="hidden sm:block"/>
            transactions — directly on X. BlinkBot is turning that demand into reality.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {tweets.map((tweet, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + (i * 0.15) }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-[#3a3a3a] rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl cursor-pointer"
            >
              {/* Tweet Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {tweet.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-bold text-base">{tweet.author}</div>
                    <div className="text-gray-400 text-sm">{tweet.handle}</div>
                  </div>
                </div>
                <div className="text-white text-3xl font-bold">𝕏</div>
              </div>
              
              {/* Tweet Content */}
              <p className="text-white text-sm leading-relaxed mb-4">
                {tweet.content}
              </p>
              
              {/* Tweet Date */}
              <div className="text-gray-400 text-xs">
                {tweet.date}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection

import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const FAQSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [openIndex, setOpenIndex] = useState(null)
  
  const faqs = [
    {
      question: 'How does BlinkBot work?',
      answer: 'BlinkBot uses advanced AI-powered natural language processing to understand your tweets and DMs. Simply tag @BlinkBotAI in your post or send a DM with your crypto command, and BlinkBot will parse your intent and execute the transaction on-chain. No complex syntax required—just write naturally.'
    },
    {
      question: 'Which chains does BlinkBot support?',
      answer: 'BlinkBot currently supports multiple blockchain networks including Solana, Ethereum, BNB Smart Chain, Bitcoin (send/swap only), Avalanche, Polygon, and Polkadot. We are continuously adding support for more chains based on user demand.'
    },
    {
      question: 'Do I need a wallet to use BlinkBot?',
      answer: 'No external wallet is needed! BlinkBot automatically creates a secure, non-custodial wallet for you when you first interact with it. Your wallet is tied to your X account, and only you have access to it through BlinkBot. You can also connect existing wallets if preferred.'
    },
    {
      question: 'What can I do with BlinkBot?',
      answer: 'With BlinkBot, you can send crypto to anyone, swap tokens, deploy smart contracts, snipe new token launches, airdrop tokens to followers, manage multiple wallets, and much more—all directly from Twitter/X without leaving the platform.'
    },
    {
      question: 'Is BlinkBot secure?',
      answer: 'Yes! BlinkBot uses non-custodial wallets, meaning you always maintain full control of your assets. All transactions are executed on-chain with industry-standard encryption. We never store your private keys on our servers, and all wallet operations are secured through Twitter\'s authentication.'
    },
    {
      question: 'Are there fees?',
      answer: 'BlinkBot charges a small service fee for transactions (typically 0.5-1% depending on the operation). You\'ll also pay standard blockchain gas fees for on-chain transactions. All fees are transparently shown before you confirm any transaction.'
    }
  ]
  
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  
  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="text-5xl sm:text-6xl mb-6">🔥</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-6">
            Your Burning Crypto<br/>Questions Answered
          </h2>
          <p className="text-base sm:text-lg text-gray-600 px-4 leading-relaxed">
            Explore our comprehensive FAQ section to find answers to all your burning<br className="hidden sm:block"/>
            questions about cryptocurrency and the BlinkBot.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 w-full lg:w-3/4 mx-auto"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
              className="border-b border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex items-center justify-between py-6 text-left hover:bg-gray-50 transition-colors duration-200 group"
              >
                <span className="text-lg sm:text-xl font-semibold text-black pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 bg-black rounded-lg flex items-center justify-center transition-transform duration-300">
                  <motion.span
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-white text-2xl font-light"
                  >
                    +
                  </motion.span>
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection

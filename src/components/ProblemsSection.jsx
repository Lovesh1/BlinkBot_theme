import React, { useRef, useEffect, useState } from 'react'

const ProblemsSection = () => {
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
  
  const problems = [
    { text: "🧠 Smart Transaction Controls", threshold: 0.2, pos: "top-4 sm:top-8 md:top-12 left-4 sm:left-8 md:left-12" },
    { text: "🔐 Auto-Wallet Protection", threshold: 0.4, pos: "top-4 sm:top-8 md:top-12 right-4 sm:right-8 md:right-12" },
    { text: "🧾 On-Chain History, Off-Chain Backups", threshold: 0.6, pos: "bottom-20 sm:bottom-24 md:bottom-32 left-4 sm:left-8 md:left-12" },
    { text: "🧰 Blink’s Built-In Security Stack", threshold: 0.8, pos: "bottom-4 sm:bottom-8 md:bottom-12 right-4 sm:right-8 md:right-12" }
  ]
  
  return (
    <section ref={ref} className="relative bg-white" style={{ height: '400vh' }}>
      <div className="sticky top-0 mt-4 h-screen flex items-center justify-center overflow-hidden px-4 bg-[#F5C000]/30">
        <div className="w-full h-full relative ">
          <div className="absolute top-1/3 text-center w-full px-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              <span className=" text-black px-2 sm:px-4 inline-block">Securing Your On-Chain</span>
              <br/>
              <span className=" text-black px-2 sm:px-4 inline-block mt-2">Moves — The Blink Way</span>
            </h2>
          </div>
          
          {problems.map((p, i) => {
            const visible = progress >= p.threshold - 0.05 && progress <= 1
            return (
              <div
                key={i}
                className={`absolute ${p.pos} bg-gray-100 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 flex items-center gap-2 sm:gap-3 shadow-sm transition-opacity duration-1000 w-[calc(100%-2rem)] sm:w-auto sm:max-w-[90%] md:max-w-[600px]`}
                style={{ opacity: visible ? 1 : 0 }}
              >
                
                <span className="text-sm sm:text-base md:text-lg font-medium">{p.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProblemsSection

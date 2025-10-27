import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const menuLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Supported Coins', href: '#coins' },
    { name: 'Security', href: '#security' },
    { name: 'About BlinkBot', href: '#about' }
  ]
  
  const howToUseLinks = [
    { name: 'Twitter Bot', href: '#twitter', external: true },
    { name: 'FireFox Extension', href: '#firefox', external: true },
    { name: 'Chrome Extension', href: '#chrome', external: true }
  ]
  
  const resourcesLinks = [
    { name: 'Wallet Manager', href: '#wallet', external: true },
    { name: 'Terminal', href: '#terminal', external: true }
  ]
  
  const supportLinks = [
    { name: 'General Support', href: '#support' },
    { name: 'Telegram Community', href: '#telegram' }
  ]
  
  return (
    <footer className="bg-[#2a2a2a] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* MENU Column */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 text-gray-400">
              MENU
            </h3>
            <ul className="space-y-3">
              {menuLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* HOW TO USE Column */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 text-gray-400">
              HOW TO USE
            </h3>
            <ul className="space-y-3">
              {howToUseLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    {link.name}
                    {link.external && <span className="text-xs">↗</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* RESOURCES Column */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 text-gray-400">
              RESOURCES
            </h3>
            <ul className="space-y-3">
              {resourcesLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    {link.name}
                    {link.external && <span className="text-xs">↗</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* SUPPORT Column */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 text-gray-400">
              SUPPORT
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © All Rights Reserved
          </p>
          <a
            href="#licenses"
            className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            Licenses
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  fadeUpVariants, 
  fadeInVariants, 
  floatingVariants, 
  baseTransition, 
  staggerChildren,
  buttonHoverVariants,
  defaultViewport
} from "@/components/ui/animation-utils";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  // Handle orientation changes on mobile
  useEffect(() => {
    const handleOrientationChange = () => {
      // Force reflow for mobile devices when orientation changes
      window.dispatchEvent(new Event('resize'));
    };

    window.addEventListener('orientationchange', handleOrientationChange);
    
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative">
      {/* Background gradient elements with parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] -z-10"
      ></motion.div>
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] -z-10"
      ></motion.div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerChildren(0.2)}
        >
          {/* Left column - Text content */}
          <motion.div 
            variants={fadeUpVariants}
            className="text-center md:text-left"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white font-gazpacho"
              variants={fadeUpVariants}
              custom={1}
            >
              Buy Now, Use Later <span className="gazpacho-gradient-text">Make the Most of Your Business Travel Allowances</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white/80 mb-8 max-w-lg mx-auto md:mx-0"
              variants={fadeUpVariants}
              custom={2}
            >
              Perkz helps you maximize your corporate benefits by letting you save your meal allowance for later use. Eat when and how you want.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
              variants={fadeInVariants}
              custom={3}
            >
              {/* App Store Button */}
              <motion.div
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
                className="w-full sm:w-auto"
              >
                <Link 
                  href="#download" 
                  className="inline-block w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg text-lg"
                >
                  Get Started
                </Link>
              </motion.div>
              
              {/* Learn More Button */}
              <motion.div
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
                className="w-full sm:w-auto"
              >
                <Link 
                  href="#how-it-works" 
                  className="inline-block w-full text-white hover:text-blue-300 transition-colors font-medium text-lg text-center"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right column - App mockup with floating animation */}
          <motion.div 
            variants={fadeInVariants}
            className="relative mx-auto md:ml-auto z-10 min-h-[700px] md:min-h-0 flex items-center justify-center"
          >
            <motion.div 
              className="relative w-[280px] h-[580px] md:w-[320px] md:h-[650px] mx-auto md:mx-0 relative top-auto transform-none border border-white/20 shadow-xl rounded-[40px] z-20"
              variants={floatingVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: false,
                margin: "-100px 0px -100px 0px"
              }}
            >
              {/* Light glow behind phone to improve visibility */}
              <div className="absolute -inset-5 bg-white/5 rounded-[60px] blur-xl -z-10"></div>
              
              {/* Phone frame */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[40px] p-3 shadow-2xl">
                {/* Screen */}
                <div className="bg-gradient-to-b from-[#0A1029] to-[#1A2142] w-full h-full rounded-[32px] overflow-hidden relative shadow-inner">
                  
                  {/* App UI - Dashboard */}
                  <div className="p-5">
                    {/* Status bar */}
                    <div className="flex justify-between items-center mb-8">
                      <div className="text-white/80 text-xs">9:41</div>
                      <div className="flex items-center gap-1">
                        <div className="h-2.5 w-2.5 rounded-full bg-white/80"></div>
                        <div className="h-2.5 w-2.5 rounded-full bg-white/80"></div>
                        <div className="h-2.5 w-2.5 rounded-full bg-white/80"></div>
                        <div className="h-2.5 w-2.5 rounded-full bg-white/80"></div>
                      </div>
                    </div>
                    
                    {/* Balance card with custom animation */}
                    <motion.div 
                      className="bg-gradient-to-br from-blue-600/90 to-purple-600/90 rounded-2xl p-5 mb-5 shadow-lg"
                      variants={floatingVariants}
                      animate="animate"
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ ...baseTransition, delay: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.03, 
                        boxShadow: "0 12px 20px rgba(0, 0, 0, 0.2)",
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className="text-white/80 text-sm mb-1">Available Balance</div>
                      <div className="text-white text-3xl font-bold mb-4">$245.50</div>
                      <div className="flex justify-between items-end">
                        <div>
                          <div className="text-white/80 text-xs">This Month</div>
                          <div className="text-white text-base font-medium">$350.00</div>
                        </div>
                        <motion.button 
                          className="bg-white/20 hover:bg-white/30 text-white text-sm py-1.5 px-3 rounded-full transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Add Fund
                        </motion.button>
                      </div>
                    </motion.div>
                    
                    {/* Recent transactions */}
                    <motion.div 
                      className="bg-white/5 rounded-2xl p-5"
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ ...baseTransition, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-white text-base font-medium mb-4">Recent Transactions</div>
                      
                      {/* Transaction 1 */}
                      <motion.div 
                        className="flex items-center justify-between mb-3 pb-3 border-b border-white/10"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ ...baseTransition, delay: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                            <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                          </div>
                          <div>
                            <div className="text-white text-sm">Starbucks</div>
                            <div className="text-white/60 text-xs">Mar 28</div>
                          </div>
                        </div>
                        <div className="text-white text-sm font-medium">-$12.50</div>
                      </motion.div>
                      
                      {/* Transaction 2 */}
                      <motion.div 
                        className="flex items-center justify-between mb-3 pb-3 border-b border-white/10"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ ...baseTransition, delay: 0.7 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                            <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                          </div>
                          <div>
                            <div className="text-white text-sm">Deposit</div>
                            <div className="text-white/60 text-xs">Mar 15</div>
                          </div>
                        </div>
                        <div className="text-green-400 text-sm font-medium">+$35.00</div>
                      </motion.div>
                      
                      {/* Transaction 3 */}
                      <motion.div 
                        className="flex items-center justify-between"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ ...baseTransition, delay: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                            <div className="w-5 h-5 bg-purple-500 rounded-full"></div>
                          </div>
                          <div>
                            <div className="text-white text-sm">Uber Eats</div>
                            <div className="text-white/60 text-xs">Mar 10</div>
                          </div>
                        </div>
                        <div className="text-white text-sm font-medium">-$16.75</div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative elements with different animation speeds */}
            <motion.div 
              className="absolute top-20 -right-10 w-20 h-20 bg-blue-400/30 rounded-full blur-xl"
              variants={floatingVariants}
              animate="animate"
              custom={1}
              style={{ animationDelay: "1s" }}
            ></motion.div>
            <motion.div 
              className="absolute bottom-20 -left-10 w-16 h-16 bg-purple-400/30 rounded-full blur-xl"
              variants={floatingVariants}
              animate="animate"
              custom={2}
              style={{ animationDelay: "2s" }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 
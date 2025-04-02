"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, CoinsIcon, ArrowUpRightIcon, Wallet2Icon } from "lucide-react";
import { 
  fadeUpVariants, 
  fadeInVariants, 
  cardLeftVariants, 
  cardRightVariants, 
  cardUpVariants,
  buttonHoverVariants,
  containerVariants,
  defaultViewport,
  defaultEasing
} from "@/components/ui/animation-utils";

const FeaturesSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [500, 1200], [0, -100]);
  const y2 = useTransform(scrollY, [500, 1200], [0, -150]);
  const rotate = useTransform(scrollY, [500, 1200], [0, 10]);
  
  const features = [
    {
      id: 1,
      icon: <CoinsIcon className="w-10 h-10" />,
      title: "Save, Withdraw, or Enjoy!",
      description: "With Perkz, you can choose how to use your stipends. Save for a special meal, withdraw to your bank account, or use it daily.",
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
      variants: cardLeftVariants
    },
    {
      id: 2,
      icon: <Wallet2Icon className="w-10 h-10" />,
      title: "No More Wasted Benefits",
      description: "Unlike traditional meal cards, Perkz offers flexibility. Never lose your unused funds at the end of the month.",
      color: "bg-gradient-to-br from-purple-500 to-purple-700",
      variants: cardUpVariants
    },
    {
      id: 3,
      icon: <CheckCircle2 className="w-10 h-10" />,
      title: "Seamless Reimbursement",
      description: "Generate receipts instantly for expense reports. Easily track and manage all your meal expenses in one place.",
      color: "bg-gradient-to-br from-teal-500 to-teal-700",
      variants: cardRightVariants
    },
  ];

  return (
    <section id="features" className="section relative py-20 md:py-32 overflow-hidden">
      {/* Background decorative elements with parallax */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] -z-10"
      ></motion.div>
      <motion.div 
        style={{ y: y2, rotate: useTransform(rotate, value => -value) }}
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] -z-10"
      ></motion.div>
      
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={containerVariants}
        >
          <motion.h2 
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl font-bold mb-4 text-white font-gazpacho"
          >
            Why <span className="gazpacho-gradient-text">Perkz</span>?
          </motion.h2>
          <motion.p 
            variants={fadeUpVariants}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Perkz revolutionizes how employees use their corporate meal benefits, 
            offering unmatched flexibility and control.
          </motion.p>
        </motion.div>
        
        {/* Features grid with staggered and card animations */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={defaultViewport}
              variants={feature.variants}
              custom={index}
              transition={{
                delay: 0.15 * (index + 1),
              }}
              className="relative group"
              style={{ 
                transformOrigin: "center",
                willChange: "transform, opacity"
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                whileHover={{ 
                  scale: 1.05, 
                  opacity: 1 
                }}
              ></motion.div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full relative overflow-hidden group">
                {/* Icon with hover animation */}
                <motion.div 
                  className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center text-white shadow-lg mb-6`}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 5,
                    boxShadow: "0 0 25px rgba(79, 70, 229, 0.45)"
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 10 
                  }}
                >
                  {feature.icon}
                </motion.div>
                
                {/* Content */}
                <motion.h3 
                  variants={fadeUpVariants}
                  className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300"
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  variants={fadeUpVariants}
                  className="text-white/70 group-hover:text-white/90 transition-colors duration-300 mb-6"
                >
                  {feature.description}
                </motion.p>
                
                {/* Learn more link with animated arrow */}
                <motion.a 
                  href="#" 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium group"
                  whileHover="hover"
                  variants={buttonHoverVariants}
                >
                  <span className="mr-1">Learn more</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      ease: "easeInOut", 
                      repeat: Infinity,
                      repeatType: "loop" 
                    }}
                  >
                    <ArrowUpRightIcon className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.span>
                </motion.a>
                
                {/* Decorative corner */}
                <motion.div 
                  className="absolute bottom-0 right-0 w-16 h-16 bg-white/5 group-hover:bg-white/10 transition-colors duration-300 rounded-tl-3xl -z-10"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Stats overview with reveal animation */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: defaultEasing }}
          viewport={defaultViewport}
          className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10 shadow-xl"
          whileHover={{ 
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35)",
            scale: 1.02,
            transition: { duration: 0.5, ease: defaultEasing }
          }}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={defaultViewport}
            >
              <motion.div 
                className="text-4xl md:text-5xl font-bold text-white mb-2"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 10,
                  delay: 0.2
                }}
                viewport={defaultViewport}
              >
                85%
              </motion.div>
              <p className="text-white/70">of employees prefer flexible meal benefits</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={defaultViewport}
            >
              <motion.div 
                className="text-4xl md:text-5xl font-bold text-white mb-2"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 10,
                  delay: 0.3
                }}
                viewport={defaultViewport}
              >
                $125+
              </motion.div>
              <p className="text-white/70">average monthly savings per employee</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={defaultViewport}
            >
              <motion.div 
                className="text-4xl md:text-5xl font-bold text-white mb-2"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 10,
                  delay: 0.4
                }}
                viewport={defaultViewport}
              >
                97%
              </motion.div>
              <p className="text-white/70">user satisfaction rate</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection; 
"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WalletIcon, ClockIcon, ArrowLeftRightIcon } from "lucide-react";
import { 
  fadeUpVariants, 
  cardLeftVariants, 
  cardRightVariants, 
  cardUpVariants,
  containerVariants,
  itemVariants,
  defaultEasing,
  defaultViewport 
} from "@/components/ui/animation-utils";

const HowItWorks = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -150]);
  
  const steps = [
    {
      id: 1,
      icon: <WalletIcon className="w-10 h-10" />,
      title: "Fund Your Wallet",
      description: "Add meal allowances funds through Perkz and keep track of your balance in one place.",
      color: "from-blue-400 to-blue-600",
      variants: cardLeftVariants
    },
    {
      id: 2,
      icon: <ClockIcon className="w-10 h-10" />,
      title: "Use It When You Want",
      description: "Keep the balance and spend whenever you want, no more use-it or lose-it.",
      color: "from-purple-400 to-purple-600",
      variants: cardUpVariants
    },
    {
      id: 3,
      icon: <ArrowLeftRightIcon className="w-10 h-10" />,
      title: "Spend or Withdraw",
      description: "Transfer to your bank or use it for meals - the choice is yours.",
      color: "from-teal-400 to-teal-600",
      variants: cardRightVariants
    },
  ];

  return (
    <section id="how-it-works" className="section relative py-20 md:py-32">
      {/* Background accent with parallax */}
      <motion.div 
        className="absolute top-1/2 left-0 right-0 h-96 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20 -z-10 transform -translate-y-1/2 skew-y-3"
        style={{ y: y1 }}
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
            How It <span className="gazpacho-gradient-text">Works</span>
          </motion.h2>
          <motion.p 
            variants={fadeUpVariants}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Perkz makes simple to manage your business travel allowances with these three easy steps.
          </motion.p>
          
          {/* Explanation Video */}
          <motion.div
            variants={fadeUpVariants}
            transition={{ delay: 0.3 }}
            className="mt-8 mb-16 max-w-3xl mx-auto"
          >
            <motion.div 
              className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-xl"
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                transition: { duration: 0.5, ease: defaultEasing }
              }}
            >
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://share.synthesia.io/embeds/videos/7319b92a-cdbf-4c29-aec5-a4d8df2c0a1a" 
                title="Perkz Explanation Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
              {/* 
                NOTE: Synthesia videos need to use the /embeds/videos/ format in the URL
                Synthesia embed format: https://share.synthesia.io/embeds/videos/[video-id]
              */}
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Steps with staggered animations */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={defaultViewport}
              variants={step.variants}
              custom={index}
              transition={{
                delay: 0.2 * (index + 1),
              }}
              style={{ transformOrigin: "center" }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Step number with transform */}
              <motion.div 
                className="absolute -top-6 -right-6 text-9xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-300 pointer-events-none"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 10, ease: "linear", repeat: Infinity }}
              >
                {step.id}
              </motion.div>
              
              {/* Icon with hover effect */}
              <motion.div 
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center p-3 mb-6 text-white shadow-lg transition-transform duration-300`}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {step.icon}
              </motion.div>
              
              {/* Content */}
              <motion.h3 
                className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300"
                variants={fadeUpVariants}
              >
                {step.title}
              </motion.h3>
              <motion.p 
                className="text-white/70 group-hover:text-white/90 transition-colors duration-300"
                variants={fadeUpVariants}
              >
                {step.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
        
        {/* Progress line (visible on desktop) with animation */}
        <div className="hidden md:block relative mt-20">
          <motion.div 
            className="absolute top-0 left-1/6 right-1/6 h-1 rounded-full"
            style={{ 
              background: "linear-gradient(to right, rgb(59, 130, 246), rgb(147, 51, 234), rgb(20, 184, 166))"
            }}
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: defaultEasing }}
          ></motion.div>
          <motion.div 
            className="absolute top-0 left-1/6 w-2 h-2 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.div 
            className="absolute top-0 left-1/2 w-2 h-2 bg-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          ></motion.div>
          <motion.div 
            className="absolute top-0 right-1/6 w-2 h-2 bg-teal-500 rounded-full transform translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 
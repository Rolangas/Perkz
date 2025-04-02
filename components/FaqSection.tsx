"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const faqs = [
    {
      id: 1,
      question: "How does Perkz work with existing corporate meal benefits?",
      answer: "Perkz integrates seamlessly with your existing business travel expenses. Instead of buying a meal at a restaurant, you can add those funds to Perkz account instead, giving you complete control over when and how you use them."
    },
    {
      id: 2,
      question: "What is Buy Now, Use Later?",
      answer: "It means you can pay for things now (like meals) and use them later, making sure you don't miss out on company's benefits. This helps you get the most out of your business meal allowance."
    },
    {
      id: 3,
      question: "Can I withdraw my meal allowance as cash?",
      answer: "Yes! Unlike traditional meal benefit programs, Perkz allows you to withdraw your accumulated funds to your bank account. You can choose to save your stipend and withdraw it later, giving you maximum flexibility."
    },
    {
      id: 4,
      question: "How secure is my money with Perkz?",
      answer: "Extremely secure. Perkz employs bank-level security measures, including encryption and multi-factor authentication. Your funds are held in FDIC-insured accounts, ensuring complete protection."
    },
    {
      id: 5,
      question: "Is Perkz available for all companies?",
      answer: "Everyone can use Perkz. If you are allowed to have a business meal, you can easily use Perkz to buy it now and use it later."
    },
    {
      id: 6,
      question: "How do I get started with Perkz?",
      answer: "Getting started is easy! Download our app, create an account, and start using it. If your company is already using Perkz, you should use your corporate email to sign in."
    }
  ];

  return (
    <section id="faq" className="section py-20 md:py-32 relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-[#0A0F29]/10 to-[#0A0F29] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white font-gazpacho"
          >
            Frequently Asked <span className="gazpacho-gradient-text">Questions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Get answers to the most common questions about Perkz and how it can transform your meal benefits experience.
          </motion.p>
        </div>
        
        {/* FAQ accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full text-left p-5 rounded-xl flex items-center justify-between transition-colors duration-300 ${
                  openIndex === index 
                    ? "bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/20" 
                    : "bg-white/5 border border-white/10 hover:bg-white/10"
                }`}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg md:text-xl font-medium text-white">{faq.question}</span>
                <span className="text-blue-400 ml-4">
                  {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 bg-white/5 rounded-b-xl border-x border-b border-white/10">
                  <p className="text-white/70">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Extra question section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl md:text-2xl font-medium text-white mb-4">Still have questions?</h3>
          <p className="text-white/70 mb-6 max-w-lg mx-auto">
            Our support team is always ready to help you with any questions or concerns you might have.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-gradient-to-r from-blue-500/90 to-purple-600/90 hover:from-blue-600/90 hover:to-purple-700/90 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection; 
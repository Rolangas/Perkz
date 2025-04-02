"use client";

import React from "react";
import { motion } from "framer-motion";
import { Apple, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="download" className="section py-20 md:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-[80px] animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-[80px] animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-blue-900/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-xl overflow-hidden relative">
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"></div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-4 text-white font-gazpacho"
              >
                Ready to Take Control of Your
                <span className="gazpacho-gradient-text block mt-1">Meal Benefits?</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-white/70 text-lg mb-8"
              >
                Download Perkz today and transform how you use your corporate meal stipend. Never lose your benefits again.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                {/* App Store Button */}
                <a 
                  href="#" 
                  className="flex items-center gap-2 bg-black hover:bg-zinc-800 text-white py-3 px-6 rounded-xl transition-colors duration-300"
                >
                  <Apple className="w-6 h-6" />
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-medium">App Store</div>
                  </div>
                </a>
                
                {/* Google Play Button */}
                <a 
                  href="#" 
                  className="flex items-center gap-2 bg-black hover:bg-zinc-800 text-white py-3 px-6 rounded-xl transition-colors duration-300"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.609 22.186c-.181.181-.29.433-.29.714 0 .551.448 1 1 1 .281 0 .534-.11.724-.299l10.675-10.675c.181-.181.29-.433.29-.714 0-.281-.109-.534-.29-.714L5.043 1.101C4.852.91 4.599.801 4.318.801c-.55 0-.999.449-.999 1 0 .281.109.533.29.714z"></path>
                  </svg>
                  <div>
                    <div className="text-xs">Get it on</div>
                    <div className="text-sm font-medium">Google Play</div>
                  </div>
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8"
              >
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors"
                >
                  <span>For Business Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square max-w-[300px] mx-auto bg-white p-6 rounded-2xl shadow-lg relative">
                {/* Placeholder for QR code - in a real project, you'd use an actual QR code image */}
                <div className="w-full h-full bg-gray-800 rounded-lg grid place-items-center p-4">
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto bg-white p-2 rounded-lg">
                      <div className="w-full h-full bg-[#0A0F29] flex items-center justify-center">
                        <span className="font-bold text-white">PERKZ QR</span>
                      </div>
                    </div>
                    <p className="text-white mt-4 font-medium">Scan to download</p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute w-20 h-20 bg-blue-500/20 rounded-full blur-xl -top-10 -left-10"></div>
                <div className="absolute w-20 h-20 bg-purple-500/20 rounded-full blur-xl -bottom-10 -right-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 
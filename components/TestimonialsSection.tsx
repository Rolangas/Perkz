"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "lucide-react";
import { fadeUpVariants, defaultViewport } from "@/components/ui/animation-utils";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Andrew Rui",
      role: "Head of Sales",
      company: "Loop Studios",
      image: "/images/testimonial-1.jpg",
      content: "Perkz has transformed how our team uses meal benefits. Instead of wasting them in unnecessary food, we can save and spend strategically. It's made our benefits truly valuable!",
      rating: 5,
    },
    {
      id: 2,
      name: "Renzo Scivol",
      role: "Head of Marketing",
      company: "Konin Life",
      image: "/images/testimonial-2.jpg",
      content: "As someone who often works from home, I love that I can save my meal allowances for days I'm in the office. The flexibility Perkz offers means I never lose the benefits I'm entitled to.",
      rating: 5,
    },
    {
      id: 3,
      name: "Jessica Rodriguez",
      role: "HR Manager",
      company: "Must Consulting",
      image: "/images/testimonial-3.jpg",
      content: "From an HR perspective, Perkz has been a game-changer for our benefits program. Employees are happier, and the administrative overhead is minimal. The ROI has been outstanding.",
      rating: 5,
    },
  ];
  
  const [[activeSlide, direction], setActiveSlide] = useState([0, 0]);
  const totalSlides = testimonials.length;
  
  // Configure auto-sliding
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);
  
  const nextSlide = () => {
    setActiveSlide(prev => [
      prev[0] === totalSlides - 1 ? 0 : prev[0] + 1, 
      1
    ]);
  };
  
  const prevSlide = () => {
    setActiveSlide(prev => [
      prev[0] === 0 ? totalSlides - 1 : prev[0] - 1,
      -1
    ]);
  };
  
  const goToSlide = (index: number) => {
    const newDirection = index > activeSlide ? 1 : -1;
    setActiveSlide([index, newDirection]);
  };

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      },
    }),
  };
  
  const clientLogos = [
    { id: 1, name: "Loop Studios", logo: "/images/logo-1.png" },
    { id: 2, name: "Konin Life", logo: "/images/logo-2.png" },
    { id: 3, name: "Must Consulting", logo: "/images/logo-3.png" },
  ];

  return (
    <section id="testimonials" className="section relative py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0A0F29]/0 via-[#0A0F29]/80 to-[#0A0F29]/0 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.h2 
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl font-bold mb-4 text-white font-gazpacho"
          >
            What Our <span className="gazpacho-gradient-text">Users Say</span>
          </motion.h2>
          <motion.p 
            variants={fadeUpVariants}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Hear from professionals who have transformed their meal benefit experience with Perkz.
          </motion.p>
        </motion.div>
        
        {/* Testimonials carousel */}
        <div className="max-w-4xl mx-auto mb-16 relative">
          {/* Carousel container with overflow hidden */}
          <div className="overflow-hidden rounded-2xl relative">
            <div className="relative h-[300px] md:h-[280px]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeSlide}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute top-0 left-0 w-full h-full"
                >
                  <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/10 relative h-full">
                    {/* Quote mark */}
                    <div className="absolute top-6 right-8 text-6xl text-blue-500/20 font-serif">"</div>
                    
                    {/* Content */}
                    <div className="mb-6 relative z-10">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon 
                            key={i} 
                            className={`w-5 h-5 ${i < testimonials[activeSlide].rating ? 'text-yellow-400' : 'text-gray-400'}`} 
                            fill={i < testimonials[activeSlide].rating ? 'currentColor' : 'none'} 
                          />
                        ))}
                      </div>
                      <p className="text-white text-lg italic mb-6">"{testimonials[activeSlide].content}"</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                          {testimonials[activeSlide].name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-white font-medium">{testimonials[activeSlide].name}</div>
                          <div className="text-white/60 text-sm">{testimonials[activeSlide].role}, {testimonials[activeSlide].company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2">
            <motion.button 
              onClick={prevSlide}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-300"
              aria-label="Previous testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </motion.button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2">
            <motion.button 
              onClick={nextSlide}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-300"
              aria-label="Next testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <ChevronRightIcon className="w-6 h-6" />
            </motion.button>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeSlide === index ? 'bg-blue-500 w-6' : 'bg-white/30 w-2.5'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
        
        {/* Client logos */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-center text-white text-xl font-medium mb-10">Trusted by innovative companies</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {clientLogos.map((client) => (
              <motion.div 
                key={client.id}
                className="w-28 h-20 md:w-36 md:h-24 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center p-5 hover:bg-white/10 transition-colors duration-300"
                whileHover={{ scale: 1.08, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.97 }}
              >
                <img 
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 
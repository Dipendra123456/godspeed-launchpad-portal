
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-[#1A1F2C] flex items-center justify-center text-white relative overflow-hidden">
      {/* Lightning/thunderbolt effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-[20%] left-[10%] w-0.5 h-64 bg-[#0FA0CE] rotate-12 blur-sm"></div>
        <div className="absolute top-[15%] left-[15%] w-0.5 h-48 bg-[#0FA0CE] rotate-45 blur-sm"></div>
        <div className="absolute top-[30%] right-[20%] w-0.5 h-72 bg-[#0FA0CE] -rotate-12 blur-sm"></div>
        <div className="absolute bottom-[20%] left-[30%] w-0.5 h-64 bg-[#0FA0CE] rotate-[30deg] blur-sm"></div>
      </div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 flex justify-center items-center">
            <Zap className="w-12 h-12 text-[#0FA0CE] mr-2 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-[#9b87f5] via-[#7E69AB] to-[#0FA0CE] bg-clip-text text-transparent">
              Supercharge Your Startup 
            </h1>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            with <span className="text-[#0FA0CE]">GODSPEED</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto animate-fade-in drop-shadow-lg">
            Leverage Godspeed's AI-powered tech stack, resourceful network, and concierge-level support to build faster, 
            de-risk smarter, and scale with confidence—without the chaos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-white text-gray-900 hover:bg-gray-200 px-8 py-7 text-lg shadow-lg transform transition-all duration-300 hover:scale-105">
              Get Started <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button 
              variant="outline" 
              className="border-[#0FA0CE] border-2 bg-[#0FA0CE]/10 text-white hover:bg-[#0FA0CE]/20 px-8 py-7 text-lg shadow-[0_0_15px_rgba(15,160,206,0.3)] animate-pulse hover:animate-none transform transition-all duration-300 hover:scale-105"
            >
              <Calendar className="mr-2 h-6 w-6" /> Book a Free Strategy Call
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements for depth */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1A1F2C] to-transparent"></div>
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-[120%] h-20 bg-[#242a38] rounded-[100%] z-0"></div>
    </section>
  );
};

export default HeroSection;

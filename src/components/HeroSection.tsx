
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen gradient-bg flex items-center justify-center text-white relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Supercharge Your Startup 
            <br />with Godspeed
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in">
            Leverage Godspeed's AI-powered tech stack, resourceful network, and concierge-level support to build faster, 
            de-risk smarter, and scale with confidence—without the chaos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-gray-900 hover:bg-gray-200 px-6 py-6 text-base">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-6 text-base">
              Book a Free Strategy Call <Calendar className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

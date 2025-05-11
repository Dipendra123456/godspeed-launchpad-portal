
import React from 'react';
import { Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-[#242a38] text-white relative overflow-hidden">
      {/* Lightning effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-[10%] right-[20%] w-0.5 h-64 bg-[#0FA0CE] rotate-45 blur-sm"></div>
        <div className="absolute bottom-[20%] left-[10%] w-0.5 h-48 bg-[#0FA0CE] -rotate-12 blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-[#0FA0CE] mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#0FA0CE] bg-clip-text text-transparent">Why We Built Godspeed</h2>
            </div>
            <p className="text-lg text-gray-300 mb-6">
              Startups deserve more than scattered tools, expensive consultants, and missed windows of opportunity. We created <span className="text-[#0FA0CE] font-bold">GODSPEED</span> to unify the startup journey—combining AI-first tools, top-tier talent, and hands-on support into a single, streamlined experience.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Whether you're an early founder or a scaling team, <span className="text-[#0FA0CE] font-bold">GODSPEED</span> is how you move from idea to impact—faster, smarter, and with fewer missteps.
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="bg-[#1A1F2C] p-6 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 border-l-4 border-[#9b87f5]">
                <h3 className="text-xl font-semibold text-[#9b87f5]">Mission</h3>
                <p className="text-gray-300">Empower visionary builders to launch and scale fearlessly.</p>
              </div>
              <div className="bg-[#1A1F2C] p-6 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 border-l-4 border-[#0FA0CE]">
                <h3 className="text-xl font-semibold text-[#0FA0CE]">Vision</h3>
                <p className="text-gray-300">A world where execution moves as fast as ideas.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-2xl transform perspective-1000 rotate-3 hover:rotate-0 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5]/20 to-[#0FA0CE]/20 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#0FA0CE] text-white p-6 rounded shadow-2xl max-w-xs transform hover:scale-105 transition-all duration-300">
              <p className="font-semibold text-lg flex items-center">
                <Zap className="w-5 h-5 mr-2" /> 100+ startups
              </p>
              <p className="text-sm text-blue-100">Accelerated through our platform</p>
            </div>
            
            {/* Lightning bolt decoration */}
            <div className="absolute -top-6 -left-6 text-[#0FA0CE] transform -rotate-45">
              <Zap className="h-12 w-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

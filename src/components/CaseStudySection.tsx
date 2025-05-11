
import React from 'react';
import { ArrowRight, Zap } from "lucide-react";

const CaseStudySection = () => {
  const caseStudies = [
    {
      title: "Startup Success",
      description: "How a fintech startup went from MVP to 10,000 users in 3 months with our tech stack and growth engine.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Scale Stories",
      description: "See how our talent network helped a healthtech company build their engineering team in just 2 weeks.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <section className="py-24 bg-[#1A1F2C] text-white relative overflow-hidden">
      {/* Lightning/thunderbolt effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-[20%] left-[10%] w-0.5 h-64 bg-[#0FA0CE] rotate-12 blur-sm"></div>
        <div className="absolute top-[15%] right-[15%] w-0.5 h-48 bg-[#0FA0CE] -rotate-45 blur-sm"></div>
      </div>
      
      {/* Glowing orb */}
      <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-[#9b87f5]/10 blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#9b87f5]/10 mb-4">
            <Zap className="h-5 w-5 text-[#9b87f5] mr-2" />
            <span className="text-[#9b87f5] font-medium">Startup Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">See Godspeed in Action</h2>
          <p className="max-w-3xl mx-auto text-gray-300">
            Real companies using <span className="font-bold text-[#0FA0CE]">GODSPEED</span> to build, launch, and scale their visions faster than ever before.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg shadow-lg group depth-card transform transition-all duration-500 hover:scale-[1.02] border border-white/5 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5]/20 to-[#0FA0CE]/20 mix-blend-overlay opacity-60"></div>
              <img 
                src={study.image} 
                alt={study.title}
                className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-105 opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/30 flex flex-col justify-end p-8">
                <h4 className="text-2xl font-bold text-white mb-2">{study.title}</h4>
                <p className="text-white/90 mb-4">{study.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-[#0FA0CE] hover:text-[#9b87f5] transition-colors group"
                >
                  Read the case study <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-[#9b87f5]/20 backdrop-blur-md border border-[#9b87f5]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Zap className="h-5 w-5 text-[#9b87f5]" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#242a38] to-transparent"></div>
    </section>
  );
};

export default CaseStudySection;

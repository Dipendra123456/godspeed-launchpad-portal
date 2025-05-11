
import React from 'react';
import { Linkedin, Zap, Star } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Rhea Kapoor",
      role: "CTO",
      bio: "AI Architect & Full-stack builder with 10+ years scaling SaaS products.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    },
    {
      name: "Aditya Mehta",
      role: "Co-founder & Head of Growth",
      bio: "Ex-founder, YC alum, specializes in traction and monetization.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      name: "Natasha B.",
      role: "Startup Concierge Lead",
      bio: "Startup whisperer and execution strategist. Helps you move smart and fast.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80",
    }
  ];

  return (
    <section id="team" className="py-24 bg-[#242a38] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#1A1F2C] to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#1A1F2C] to-transparent"></div>
      
      {/* Lightning effects */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-[20%] right-[15%] w-0.5 h-48 bg-[#0FA0CE] rotate-45 blur-sm"></div>
        <div className="absolute bottom-[30%] left-[25%] w-0.5 h-64 bg-[#0FA0CE] -rotate-[30deg] blur-sm"></div>
      </div>
      
      {/* Glowing orb */}
      <div className="absolute top-40 left-20 w-64 h-64 rounded-full bg-[#9b87f5]/5 blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#9b87f5]/10 mb-4">
            <Star className="h-5 w-5 text-[#9b87f5] mr-2" />
            <span className="text-[#9b87f5] font-medium">Team of Experts</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-[#9b87f5] to-[#0FA0CE] bg-clip-text text-transparent">
            Meet the Builders Behind the Builders
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            We're a hybrid team of engineers, founders, strategists, and creatives—united by one mission: 
            to help great ideas move at <span className="font-bold text-[#0FA0CE]">GODSPEED</span>.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="relative group backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 shadow-xl transform transition-all duration-300 hover:shadow-[0_0_30px_rgba(15,160,206,0.15)] hover:border-[#0FA0CE]/30"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10"></div>
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-72 object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-300 group-hover:translate-y-0">
                <div className="absolute -top-12 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-[#0FA0CE]/20 backdrop-blur-md border border-[#0FA0CE]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Zap className="h-5 w-5 text-[#0FA0CE]" />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-white">{member.name}</h3>
                <p className="text-[#0FA0CE] mb-3">{member.role}</p>
                <p className="text-gray-300 mb-4 opacity-80">{member.bio}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-gray-300 hover:bg-[#0FA0CE]/80 hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center text-[#0FA0CE] hover:text-[#9b87f5] font-medium transition-colors">
            Meet the Full Team 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;


import React from 'react';
import { Linkedin } from "lucide-react";

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
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the Builders Behind the Builders</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            We're a hybrid team of engineers, founders, strategists, and creatives—united by one mission: to help great ideas move at Godspeed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <a href="#" className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="inline-block text-blue-600 hover:text-blue-800 font-medium">
            Meet the Full Team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

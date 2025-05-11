
import React from 'react';
import { Settings, Code, Users, Lightbulb, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeatureSection = () => {
  const features = [
    {
      icon: <Code className="h-12 w-12 text-godspeed-green" />,
      title: "AI-Powered Tech Stack",
      description: "Launch with battle-tested tools. From rapid prototyping to production-grade systems, Godspeed equips you with scalable infrastructure and automations built for speed and reliability."
    },
    {
      icon: <Users className="h-12 w-12 text-godspeed-green" />,
      title: "Talent-as-a-Service",
      description: "Onboard vetted engineers, designers, and growth experts within days—not months. We match talent to your exact stage and vision."
    },
    {
      icon: <Settings className="h-12 w-12 text-godspeed-green" />,
      title: "Strategic Concierge Support",
      description: "Your dedicated Godspeed partner acts as a co-pilot—removing blockers, sourcing resources, and syncing your goals with execution."
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-godspeed-green" />,
      title: "Growth Engine",
      description: "Access growth marketing systems, data-led strategies, and a startup network to accelerate traction."
    }
  ];

  return (
    <section id="product" className="py-24 bg-gradient-to-b from-[#1A1F2C] to-[#242a38] relative overflow-hidden">
      {/* Lightning/thunderbolt effects */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[30%] left-[5%] w-0.5 h-64 bg-godspeed-green rotate-12 blur-sm"></div>
        <div className="absolute top-[45%] right-[10%] w-0.5 h-72 bg-godspeed-green -rotate-12 blur-sm"></div>
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-godspeed-dark-green/10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-godspeed-green/5 blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-godspeed-green/10 mb-4">
            <Zap className="h-5 w-5 text-godspeed-green mr-2" />
            <span className="text-godspeed-green font-medium">Supercharge Your Development</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Your End-to-End Launch & Scale Platform</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Everything you need to build, launch, and grow your startup at <span className="font-bold text-godspeed-green">GODSPEED</span>.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="depth-card p-8 rounded-xl border border-white/5 backdrop-blur-sm transform transition-all duration-500 hover:scale-105 hover:border-godspeed-green/30 hover:shadow-[0_0_20px_rgba(74,222,128,0.15)]"
            >
              <div className="flex items-start">
                <div className="mr-6 p-3 bg-godspeed-green/10 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-godspeed-green text-gray-900 hover:bg-godspeed-green/80 px-8 py-6 text-lg font-medium shadow-[0_0_20px_rgba(74,222,128,0.3)]">
            See <span className="font-bold">GODSPEED</span> in Action
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

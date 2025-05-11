
import React from 'react';
import { Settings, Code, Users, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeatureSection = () => {
  const features = [
    {
      icon: <Code className="h-12 w-12 text-blue-600" />,
      title: "AI-Powered Tech Stack",
      description: "Launch with battle-tested tools. From rapid prototyping to production-grade systems, Godspeed equips you with scalable infrastructure and automations built for speed and reliability."
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Talent-as-a-Service",
      description: "Onboard vetted engineers, designers, and growth experts within days—not months. We match talent to your exact stage and vision."
    },
    {
      icon: <Settings className="h-12 w-12 text-blue-600" />,
      title: "Strategic Concierge Support",
      description: "Your dedicated Godspeed partner acts as a co-pilot—removing blockers, sourcing resources, and syncing your goals with execution."
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-blue-600" />,
      title: "Growth Engine",
      description: "Access growth marketing systems, data-led strategies, and a startup network to accelerate traction."
    }
  ];

  return (
    <section id="product" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your End-to-End Launch & Scale Platform</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to build, launch, and grow your startup at Godspeed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
            See Godspeed in Action
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

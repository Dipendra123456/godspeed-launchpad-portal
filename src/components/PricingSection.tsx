
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, Calendar, Zap } from "lucide-react";

const PricingSection = () => {
  const pricingPlans = [
    {
      name: "Launch Plan",
      subtitle: "For early-stage founders",
      price: "$499",
      period: "/month",
      description: "Everything you need to validate your idea and build an MVP.",
      features: [
        "Access to core tech stack",
        "1 growth session/month",
        "On-demand concierge support",
        "Basic documentation & templates",
        "Community access"
      ],
      isPopular: false,
      buttonVariant: "outline" as const,
      buttonText: "Start Free Trial",
      icon: null
    },
    {
      name: "Scale Plan",
      subtitle: "For growing teams",
      price: "$1,499",
      period: "/month",
      description: "Advanced tools and support for teams ready to grow.",
      features: [
        "Everything in Launch +",
        "Dedicated growth strategist",
        "Monthly talent sourcing",
        "Custom AI tools",
        "Priority support"
      ],
      isPopular: true,
      buttonVariant: "default" as const,
      buttonText: "Start Free Trial",
      icon: null
    },
    {
      name: "Partner Plan",
      subtitle: "Custom for funded startups",
      price: "Custom",
      period: "",
      description: "Full-service partnership for funded startups.",
      features: [
        "End-to-end tech & growth support",
        "Strategic co-building",
        "Priority talent placement",
        "White-glove concierge",
        "Custom integration & training"
      ],
      isPopular: false,
      buttonVariant: "outline" as const,
      buttonText: "Book a Pricing Call",
      icon: <Calendar className="mr-2 h-5 w-5" />
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#1A1F2C] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Flexible Pricing That Scales With You</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            From bootstrapped MVPs to post-raise startups, our pricing adapts to your needs and stage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-[#242a38] rounded-xl p-8 shadow-xl border 
                ${plan.isPopular ? 'border-[#0FA0CE]' : 'border-gray-700'}
                transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-[#0FA0CE] text-white text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wide flex items-center">
                    <Zap className="h-4 w-4 mr-1" /> Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-2 text-gray-400 font-medium">{plan.subtitle}</div>
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              
              <div className="mb-4">
                <span className="text-4xl font-bold text-[#9b87f5]">{plan.price}</span>
                {plan.period && <span className="text-gray-400">{plan.period}</span>}
              </div>
              <p className="text-gray-300 mb-6">{plan.description}</p>
              
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-[#0FA0CE] mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.buttonVariant}
                className={`w-full py-6 ${
                  plan.isPopular ? 'bg-[#0FA0CE] hover:bg-[#0FA0CE]/80 text-white' : 
                  'border-[#7E69AB] text-white hover:bg-[#7E69AB]/20'
                }`}
              >
                {plan.icon}
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

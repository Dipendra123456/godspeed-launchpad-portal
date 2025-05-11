
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, Calendar } from "lucide-react";

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
      buttonText: "Start Free Trial"
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
      buttonText: "Start Free Trial"
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
      buttonText: "Book a Pricing Call"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Flexible Pricing That Scales With You</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            From bootstrapped MVPs to post-raise startups, our pricing adapts to your needs and stage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl p-8 shadow-lg border ${
                plan.isPopular ? 'border-blue-500 relative' : 'border-gray-200'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-2 text-gray-500 font-medium">{plan.subtitle}</div>
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-gray-500">{plan.period}</span>}
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.buttonVariant}
                className={`w-full py-6 ${
                  plan.isPopular ? 'bg-blue-600 hover:bg-blue-700' : ''
                }`}
                startIcon={plan.buttonText.includes("Call") ? <Calendar className="mr-2 h-5 w-5" /> : undefined}
              >
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

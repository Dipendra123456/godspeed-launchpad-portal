
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const pricingPlans = [
    {
      name: "Basic",
      price: "$499",
      description: "For small teams and prototyping",
      features: [
        "3 sensor types included",
        "Basic API access",
        "Documentation & samples",
        "Email support",
        "1 project consultation"
      ],
      isPopular: false,
      buttonVariant: "outline" as const
    },
    {
      name: "Professional",
      price: "$1,299",
      description: "For growing businesses with specific needs",
      features: [
        "All sensor types included",
        "Full API access",
        "Custom integration support",
        "Priority email & phone support",
        "3 project consultations"
      ],
      isPopular: true,
      buttonVariant: "default" as const
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale implementations",
      features: [
        "Custom sensor development",
        "Dedicated API environment",
        "On-site integration & training",
        "24/7 premium support",
        "Unlimited project consultations"
      ],
      isPopular: false,
      buttonVariant: "outline" as const
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pricing Plans</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Flexible options for businesses of all sizes. All plans include access to our core technology.
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
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-gray-500">/starter kit</span>}
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
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

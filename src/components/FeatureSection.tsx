
import React from 'react';
import { Settings, Code, Layers } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: <Settings className="h-10 w-10 text-gray-700" />,
      title: "Smart Textiles",
      description: "Intelligent fabric sensors that seamlessly integrate into clothing and footwear."
    },
    {
      icon: <Code className="h-10 w-10 text-gray-700" />,
      title: "Adaptive AI",
      description: "Industry-specific algorithms that transform textile sensor data into meaningful insights."
    },
    {
      icon: <Layers className="h-10 w-10 text-gray-700" />,
      title: "Cross-Industry",
      description: "Solutions for sports, military, healthcare, industrial, and professional environments."
    }
  ];

  return (
    <section id="product" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg text-center">
              <div className="mx-auto flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

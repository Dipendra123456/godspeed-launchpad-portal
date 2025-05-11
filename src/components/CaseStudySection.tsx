
import React from 'react';
import { ArrowRight } from "lucide-react";

const CaseStudySection = () => {
  const caseStudies = [
    {
      title: "Startup Success",
      description: "How a fintech startup went from MVP to 10,000 users in 3 months with our tech stack and growth engine.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Scale Stories",
      description: "See how our talent network helped a healthtech company build their engineering team in just 2 weeks.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-gray-600">Startup Success Stories</h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-6">See Godspeed in Action</h3>
          <p className="max-w-3xl mx-auto text-gray-600">
            Real companies using Godspeed to build, launch, and scale their visions faster than ever before.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src={study.image} 
                alt={study.title}
                className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 flex flex-col justify-end p-8">
                <h4 className="text-2xl font-bold text-white mb-2">{study.title}</h4>
                <p className="text-white/90 mb-4">{study.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Read the case study <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;

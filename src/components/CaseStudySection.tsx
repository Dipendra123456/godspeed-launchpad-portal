
import React from 'react';

const CaseStudySection = () => {
  const caseStudies = [
    {
      title: "Industrial Safety",
      description: "Protective workwear that detects hazards, monitors fatigue, and prevents workplace injuries through early intervention.",
      image: "public/lovable-uploads/8eadb990-c42e-457d-b1ae-eb8c6a0ebf99.png"
    },
    {
      title: "Thermal Regulation",
      description: "Adaptive heating and cooling textiles that respond to body temperature and environmental conditions.",
      image: "public/lovable-uploads/8eadb990-c42e-457d-b1ae-eb8c6a0ebf99.png"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-gray-600">Textile Sensor Applications</h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Real-World Use Cases</h3>
          <p className="max-w-3xl mx-auto text-gray-600">
            Explore how our textile sensors are applied in different professional contexts, from emergency response to construction and athletics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={study.image} 
                alt={study.title}
                className="w-full h-80 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 flex flex-col justify-end p-8">
                <h4 className="text-2xl font-bold text-white mb-2">{study.title}</h4>
                <p className="text-white/90">{study.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="#more-cases" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            Scroll horizontally to see more examples →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;

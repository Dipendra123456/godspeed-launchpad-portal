
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why We Built Godspeed</h2>
            <p className="text-lg text-gray-700 mb-6">
              Startups deserve more than scattered tools, expensive consultants, and missed windows of opportunity. We created Godspeed to unify the startup journey—combining AI-first tools, top-tier talent, and hands-on support into a single, streamlined experience.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Whether you're an early founder or a scaling team, Godspeed is how you move from idea to impact—faster, smarter, and with fewer missteps.
            </p>
            
            <div className="space-y-4 mt-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-600">Mission</h3>
                <p className="text-gray-700">Empower visionary builders to launch and scale fearlessly.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600">Vision</h3>
                <p className="text-gray-700">A world where execution moves as fast as ideas.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded shadow-lg max-w-xs">
              <p className="font-semibold text-lg">100+ startups</p>
              <p className="text-sm text-blue-100">Accelerated through our platform</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

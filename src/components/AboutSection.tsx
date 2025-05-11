
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Godspeed</h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2020, Godspeed is revolutionizing how we interact with textiles by embedding advanced sensor technology into everyday fabrics.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our mission is to create intelligent textiles that enhance human performance, safety, and comfort across various industries. We combine cutting-edge AI algorithms with innovative textile engineering to develop solutions that address real-world challenges.
            </p>
            <p className="text-lg text-gray-700">
              With a focus on sustainability and ethical manufacturing, we're committed to producing smart textiles that not only improve lives but also minimize environmental impact.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Textile lab" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded shadow-lg max-w-xs">
              <p className="font-semibold text-lg">15+ patents filed</p>
              <p className="text-sm text-blue-100">For our innovative smart textile technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

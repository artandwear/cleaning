import React from 'react';
import Image from "next/legacy/image";
import { FaCheck } from 'react-icons/fa';

const CleaningTypes: React.FC = () => {
  const images = [
    '/images/office-cleaning.jpg',
    '/images/gym-cleaning.jpg',
    '/images/household-cleaning.jpg',
    '/images/moveout-cleaning.jpg',
  ];

  return (
    <section id="cleaning-types" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-800">Our Cleaning Services</h2>
          <p className="text-gray-600 mt-4">Professional cleaning solutions for every space</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Office Cleaning',
              services: ['Daily maintenance', 'Sanitization', 'Waste management'],
            },
            {
              title: 'Gym Cleaning',
              services: ['Equipment sanitization', 'Floor maintenance', 'Locker room cleaning'],
            },
            {
              title: 'Household Cleaning',
              services: ['Regular maintenance', 'Deep cleaning', 'Custom schedules'],
            },
            {
              title: 'Move Out Cleaning',
              services: ['Deep cleaning', 'Carpet cleaning', 'Final inspection'],
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48 relative">
                <Image
                  src={images[idx]}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {service.services.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <FaCheck className="text-blue-600 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CleaningTypes;

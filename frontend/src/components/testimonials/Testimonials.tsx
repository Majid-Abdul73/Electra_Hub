import type { FC } from 'react';
import TestimonialCard from './TestimonialCard';

const testimonialData = [
  {
    name: "Raymond Kwabla Azaglo",
    role: "Event Organizer",
    image: "/testimonials/person1.jpg",
    rating: 5,
    events: 8
  },
  {
    name: "Raymond Kwabla Azaglo",
    role: "Event Organizer",
    image: "/testimonials/person2.jpg",
    rating: 5,
    events: 8
  },
  {
    name: "Raymond Kwabla Azaglo",
    role: "Event Organizer",
    image: "/testimonials/person1.jpg",
    rating: 5,
    events: 8
  },
  {
    name: "Raymond Kwabla Azaglo",
    role: "Event Organizer",
    image: "/testimonials/person2.jpg",
    rating: 5,
    events: 8
  }
];

const Testimonials: FC = () => {
  return (
    <section className="py-16 bg-white mb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Testimonials</h2>
          <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
            Get Started
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
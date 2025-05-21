import type { FC } from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  rating: number;
  events: number;
}

const TestimonialCard: FC<TestimonialCardProps> = ({ name, role, image, rating, events }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="mb-2">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-gray-600 text-sm">{role}</p>
          <p className="text-gray-600 text-sm">{events} Events</p>
        </div>
        <div className="flex items-center">
          <span className="text-3xl font-bold mr-2">{rating}.0</span>
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
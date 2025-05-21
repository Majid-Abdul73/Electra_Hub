import type { FC } from 'react';

interface EventCardProps {
  title: string;
  image: string;
  date: string;
  category: string;
}

const EventCard: FC<EventCardProps> = ({ title, image, date, category }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{date}</p>
        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700 mt-2">
          {category}
        </span>
      </div>
    </div>
  );
};

export default EventCard;
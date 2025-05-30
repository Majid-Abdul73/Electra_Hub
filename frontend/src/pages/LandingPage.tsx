import type { FC } from 'react';
import Hero from '../components/home/Hero';
import Revolution from '../components/home/Revolution';
import Testimonials from '../components/testimonials/Testimonials';
import TicketCard from '../components/cards/TicketCard';
import { Link } from 'react-router-dom';

const LandingPage: FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <Revolution />
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className='flex py-2 justify-between items-center'>
            <h2 className="text-3xl font-bold mb-8">Trending Events</h2>
            <Link to="/events" className="text-md bg-black text-white p-2 px-3 rounded-3xl font-bold mb-8">See Events</Link>
          </div> 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <TicketCard 
              event={{
                id: "landing-ticket-1",
                title: "The Beast Concert",
                image: "/images/bhim.jpg",
                date: "12th December, 2024",
                time: "16:00GMT",
                venue: "National Event Centre",
                location: "Greater Accra, Lakeside",
                price: "$120"
              }}
              onBuyTicket={() => console.log('Buy ticket clicked')}
            />
            <TicketCard 
              event={{
                id: "landing-ticket-2",
                title: "Ghana Medical & Health Awards 2025",
                image: "/images/bhim.jpg",
                date: "15th January, 2025",
                time: "18:00GMT",
                venue: "Accra International Conference Centre",
                location: "Greater Accra, Ridge",
                price: "$150"
              }}
            />
            <TicketCard 
              event={{
                id: "landing-ticket-3",
                title: "Ghana Medical & Health Awards 2025",
                image: "/images/bhim.jpg",
                date: "15th January, 2025",
                time: "18:00GMT",
                venue: "Accra International Conference Centre",
                location: "Greater Accra, Ridge",
                price: "$150"
              }}
            />
            <TicketCard 
              event={{
                id: "landing-ticket-4",
                title: "Ghana Medical & Health Awards 2025",
                image: "/images/bhim.jpg",
                date: "15th January, 2025",
                time: "18:00GMT",
                venue: "Accra International Conference Centre",
                location: "Greater Accra, Ridge",
                price: "$150"
              }}
            />
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default LandingPage;
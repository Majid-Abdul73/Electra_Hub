import type { FC } from 'react';
import Hero from '../components/home/Hero';
import Revolution from '../components/home/Revolution';
import Testimonials from '../components/testimonials/Testimonials';
import EventCard from '../components/cards/EventCard';
import { Link } from 'react-router-dom';

const LandingPage: FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <Revolution />      
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className='flex justify-between'>
            <h2 className="text-3xl font-bold mb-8">Trending Events</h2>
            <Link to="/events" className='bg-black px-5 py-0 text-white rounded-2xl'>See Events</Link>
          </div> 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <EventCard 
              title="Ghana Medical & Health Awards 2025"
              image="/images/bhim.jpg"
            />
            <EventCard 
              title="Ghana Medical & Health Awards 2025"
              image="/images/bhim.jpg"
            />
            <EventCard 
              title="Ghana Medical & Health Awards 2025"
              image="/images/bhim.jpg"
            />
            <EventCard 
              title="Ghana Medical & Health Awards 2025"
              image="/images/bhim.jpg"
            />
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default LandingPage;
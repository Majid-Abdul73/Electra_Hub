import type { FC } from 'react';
import Hero from '../components/home/Hero';
import Revolution from '../components/home/Revolution';
import Testimonials from '../components/testimonials/Testimonials';

const LandingPage: FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <Revolution />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Trending Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default LandingPage;
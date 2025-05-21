import type { FC } from 'react';

const Hero: FC = () => {
  return (
    <div className="relative h-screen flex items-center bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left Content */}
        <div className=" md:w-1/2 space-y-6">
          <img src="/icon1.svg" className='w-16 h-16' alt="" />
          <h1 className="text-5xl font-bold leading-tight">
            Vote, Buy<br />
            Tickets and book<br />
            ride <img src="/icon2.svg" alt="" /> <span className="inline-block rounded-full px-4 py-1">all in one!</span>
          </h1>
          
          <p className="text-gray-600 text-lg">
            Electra makes your life easier. Vote seamlessly, book tickets effortlessly, and enjoy affordable rides all in one app.
          </p>
          
          <div className="space-y-4">
            <button className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-light transition-colors">
              See Events
            </button>
            
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
              <img src="/ppl.svg" alt="" />
              </div>
              <div>
                <span className="font-bold text-xl">15 Million+</span>
                <p className="text-sm text-gray-600">Trusted by millions of satisfied users, our financial services have made a real impact on people's lives</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Content - Image */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="relative">
            <div className="absolute -inset-4 bg-secondary/30 rounded-full blur-3xl"></div>
            <img 
              src="/hero-image.svg" 
              alt="Electra Platform Preview" 
              className="relative rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* <div>
      <img src="/video.jpg" alt="" />
      </div> */}
    </div>
  );
};

export default Hero;
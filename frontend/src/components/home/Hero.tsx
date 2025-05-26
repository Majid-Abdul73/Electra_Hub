import type { FC } from 'react';

const Hero: FC = () => {
  return (
    <div className="min-h-screen bg-white pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-12">
          {/* Main Content Section */}
          <div className="flex-1 space-y-0">
            {/* Logo and Title Section */}
            <div className='flex justify-center mt-8 gap-0'>
              <div className=''>
                <div className="flex items-center ml-52 mb-2 justify-center">
                  <img src="/icons/icon1.svg" alt="lightning" className="w-18 h-16" />
                  <span className="text-7xl mr-8 font-medium">Vote, Buy</span> <br />
                </div>
                <div className='flex items-center justify-center'>
                  <span className="text-7xl font-medium">Tickets and book</span>
                </div>
              </div>

              <div>
                <img src="/icons/hero-image.svg" alt="" className='w-[250px] mt-1'/>
              </div>
            </div>
            
            {/* Secondary Title Section */}
            <div className="flex items-center gap-4 justify-center">
              <span className='text-7xl font-medium'>ride</span>
                <img src="/icons/icon2.svg" alt="ride" className="w-20 h-18" />
              <span className="text-7xl font-medium">all in one!</span>
            </div>

            {/* Description Section */}
           <div className='justify-center items-center py-16 '>
            <p className="flex text-gray-400 text-lg justify-center">
              Electra makes your life easier. Vote seamlessly, book tickets effortlessly, and enjoy
            </p>
            <p className="flex text-gray-400 text-lg justify-center">
              affordable rides all in one app.</p>
           </div>

            {/* Call-to-Action Section */}
            <div className="flex items-center gap-6 justify-center ">
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
                See Events
              </button>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-4">
                  <img src="/icons/ppl.svg" alt="users" className="w-16 h-16 rounded-full border-2 border-white" />
                </div>
                <span className="font-normal text-3xl">15 Million+</span>
              </div>
              <h3 className='text-sm text-gray-400'>Trusted by million of satidfied users, our financial <br /> services have made a real impact on people’s lives</h3>
            </div>
          </div>

            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/video.jpg"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
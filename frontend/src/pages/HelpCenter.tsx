import type { FC } from 'react';

const HelpCenter: FC = () => {
  return (
    <div className="min-h-screen py-16">
      <img src="/images/banner.jpg" alt="" className='w-full h-128 object-cover mb-8 -mt-32'/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h1 className="text-6xl font-normal mb-4">
            How can <span className="text-gray-400">we help?</span>
          </h1>
          <p className="text-gray-500">
            Electra makes your life easier. Vote seamlessly, book tickets effortlessly, and enjoy <br /> affordable rides all in one app.
          </p>
        </div>

        <div className="bg-[#F5F5F] p-12 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Phone Contact */}
            <div className="items-center flex gap-4 bg-[#FFFBF2] p-8">
              <img src="/icons/phone.svg" alt="" className='w-10 h-12'/>
              <div className="mb-4">
                <h3 className="text-sm text-gray-400 font mb-2">Call us today</h3>
                <p className="text-xl">+233 24 031 2264</p>
              </div>
            </div>

            {/* Location */}
            <div className="items-center flex gap-4 bg-[#FFFBF2] p-8">
              <img src="/icons/location.svg" alt="" className='w-10 h-12'/>
              <div className="mb-4">
                <h3 className="text-sm text-gray-400 font-medium mb-2">Locate us today</h3>
                <p className="text-xl">North Legon, Street</p>
              </div>
            </div>

            {/* Email */}
            <div className="items-center flex gap-4 bg-[#FFFBF2] p-8">
              <img src="/icons/email.svg" alt="" className='w-10 h-12'/>
              <div className="mb-4">
                <h3 className="text-sm text-gray-400 font-medium mb-2">Email us today</h3>
                <p className="text-xl">info@electra.com</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HelpCenter;
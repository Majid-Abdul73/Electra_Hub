import type { FC } from 'react';
// import VoteCard from '../components/cards/VoteCard';

const Marketplace: FC = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center mb-8 text-center">
          <h1 className="text-8xl font-normal">Elevate Your Event</h1>
          <h1 className='text-8xl text-gray-400 font-normal mb-10'>Experience!</h1>
          <p className='text-gray-400'>Electra makes your life easier. Vote seamlessly, book tickets effortlessly, <br />
            and enjoy affordable rides all in one app.
          </p>
          <button className='bg-black text-white px-4 p-1 rounded-3xl mt-10'>Get Started</button>
        </div>
        
        {/* How Electra works section */}
        <div className="bg-[#F0ECE4] py-8 px-8 rounded-lg mb-12">
          <h2 className="text-3xl font-semibold mb-8">How Electra works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Create Your Event */}
            <div className="bg-black text-white p-6 rounded-lg flex flex-col">
              <div className="bg-black p-4 rounded-lg mb-4">
                <img src="/icons/create.svg" alt="" className='w-12 h-12' />
              </div>
              <h3 className="text-xl font-medium mb-2">Create Your Event</h3>
              <p className="text-sm text-gray-300">
                Sign up and create your event in just a few simple steps.
              </p>
            </div>

            {/* Sell Tickets or Vote */}
            <div className="bg-white text-white p-6 rounded-lg flex flex-col">
              <div className="p-4 rounded-lg mb-4">
               <img src="/icons/sell.svg" alt="" className='w-12 h-12' />
              </div>
              <h3 className="text-xl text-black font-medium mb-2">Sell Tickets or Vote</h3>
              <p className="text-sm text-black">
                Leverage our platform to sell tickets or create voting events easily.
              </p>
            </div>

            {/* Get Paid */}
            <div className="bg-black text-white p-6 rounded-lg flex flex-col">
              <div className="bg-black p-4 rounded-lg mb-4">
               <img src="/icons/paid.svg" alt="" className='w-12 h-12'/>
              </div>
              <h3 className="text-xl font-medium mb-2">Get Paid</h3>
              <p className="text-sm text-gray-300">
                Receive payments directly to your account quickly and securely.
              </p>
            </div>
          </div>
        </div>


        {/* why choose electra section */}
        <div className="py-8 px-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-12">Why Choose Electra?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Simple & Fast */}
            <div className="bg-[#F5F5F5] p-6 rounded-lg flex flex-col">
              <div className="p-4 rounded-lg mb-4">
                <img src="/icons/simple.svg" alt="" className='w-12 h-12' />
              </div>
              <h3 className="text-xl font-medium mb-2">Simple & Fast</h3>
              <p className="text-sm">
                Streamlined ticket selling that lets you focus on your event.
              </p>
            </div>

            {/* Mobile Optimized */}
            <div className="bg-black text-white p-6 rounded-lg flex flex-col">
              <div className="p-4 rounded-lg mb-4">
               <img src="/icons/mobile.svg" alt="" className='w-12 h-12' />
              </div>
              <h3 className="text-xl font-medium mb-2">Mobile Optimized</h3>
              <p className="text-sm">
              Responsive design for a seamless experience on any device.
              </p>
            </div>

            {/* Multiple Payments */}
            <div className="bg-[#F5F5F5] p-6 rounded-lg flex flex-col">
              <div className="p-4 rounded-lg mb-4">
               <img src="/icons/payment.svg" alt="" className='w-12 h-12'/>
              </div>
              <h3 className="text-xl font-medium mb-2">Multiple Payments</h3>
              <p className="text-sm">
                Receive payments directly to your account quickly and securely.
              </p>
            </div>

            {/* USSD Ticketing */}
            <div className="bg-[#F5F5F5] p-6 rounded-lg flex flex-col">
              <div className="p-4 rounded-lg mb-4">
               <img src="/icons/ussd.svg" alt="" className='w-12 h-12'/>
              </div>
              <h3 className="text-xl font-medium mb-2">USSD Ticketing</h3>
              <p className="text-sm">
              Reach every corner of Ghana with our innovative USSD system.
              </p>
            </div>


            {/* Secure & Trustworthy */}
            <div className="bg-black text-white p-6 rounded-lg flex flex-col">
              <div className="bg-black p-4 rounded-lg mb-4">
               <img src="/icons/paid.svg" alt="" className='w-12 h-12'/>
              </div>
              <h3 className="text-xl font-medium mb-2">Secure & Trustworthy</h3>
              <p className="text-sm text-gray-300">
              Your data and payments are protected with top-notch security.</p>
            </div>


            {/* 24/7 Support */}
            <div className="bg-[#F5F5F5] p-6 rounded-lg flex flex-col">
              <div className="p-4 rounded-lg mb-4">
               <img src="/icons/support.svg" alt="" className='w-12 h-12'/>
              </div>
              <h3 className="text-xl font-medium mb-2">24/7 Support</h3>
              <p className="text-sm">
              Our technical team is here to help anytime you need it.</p>
            </div>

          </div>
        </div>


        {/* Why Electra Outshines the Competition section */}
        <div className='flex justify-between py-12'>
          <div>
            <h1 className='text-2xl font-medium'>Why Electra Outshines the Competition section</h1>
            <p className='text-gray-400'>A seamless platform for ticketing, e-voting, and ride booking, enhanced by 
              AI-powered <br /> tools and integrated payment options. It offers USSD ticketing, 
              sales analytics, custom <br /> branding, email marketing, and bio links for organizers. 
              With a user-friendly interface and <br /> cost-effective pricing, it’s transforming how 
              people connect, vote, and move.
            </p>
          </div>

          <div>
            <button className='text-white bg-black p-1 px-4 rounded-2xl'>Get Started</button>
          </div>
        </div>

        <div className='py-20'>
          <img src="/images/video.jpg" alt="" />
        </div>


        {/* Get all your questions answered here! section */}
        <div className="py-16 bg-black text-white rounded-lg px-8">
          <div className='flex justify-between px-16'>
          <div className="flex flex-col items-start mb-8">
            <h2 className="text-4xl font-normal mb-2">Get all your questions</h2>
            <h2 className="text-4xl font-normal mb-6">answered here!</h2>
            <p className="text-gray-300 mb-8">Electra makes your life easier. Vote seamlessly, book <br /> tickets effortlessly, and enjoy affordable rides all in one app.</p>
            <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">See Events</button>
          </div>
          
          <div className="space-y-4">
            {Array(8).fill(null).map((_, index) => (
              <div key={index} className="bg-white text-black p-4 rounded-lg flex items-center justify-between cursor-pointer hover:bg-[#2A2A2A] transition-colors">
                <span>Why Does Electra Charge Event Organisers</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            ))}
          </div>
          </div>
        </div>


        {/* Event Revenue Estimator section */}
        <div className="bg-[#F5F5F5] rounded-lg p-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-medium">Event Revenue Estimator</h2>
            <span className="bg-[#4CAF50] text-white px-4 py-1 rounded-full text-sm">For Ticket Events only</span>
          </div>
          
          <p className="text-gray-600 mb-8">Plan your earnings with ease</p>
          
          <div className="space-y-6">
            {/* Attendees Expected Input */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M20 17.5C20 19.985 20 22 12 22C4 22 4 19.985 4 17.5C4 15.015 7.582 13 12 13C16.418 13 20 15.015 20 17.5Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>Attendees Expected:</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="number" placeholder="0" className="w-32 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black" />
                <span className="w-8">00</span>
              </div>
            </div>

            {/* Ticket Price Input */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M4 9V15C4 15.5523 4.44772 16 5 16H19C19.5523 16 20 15.5523 20 15V9C20 8.44772 19.5523 8 19 8H5C4.44772 8 4 8.44772 4 9Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M4 11H20" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>Ticket Price (GH¢):</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="number" placeholder="0" className="w-32 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black" />
                <span className="w-8">00</span>
              </div>
            </div>

            {/* Calculations */}
            <div className="space-y-3 pt-4 border-t">
              <div className="flex justify-between">
                <span>Gross Sales:</span>
                <span>00</span>
              </div>
              <div className="flex justify-between">
                <span>Commission Fee (5%):</span>
                <span>00</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Your Revenue (GH¢):</span>
                <span>000</span>
              </div>
            </div>

            <p className="text-sm text-gray-500 italic">Note: Ticket fees exclude payment processing charges.</p>
          </div>
        </div>


        <div className='bg-[#FEFAF1] px-8 py-10 rounded-lg'>
          <h1 className='text-2xl font-normal mb-2'>Join the Winning Team of Organizers</h1>
          <p className='text-sm text-gray-400'>Start selling tickets with Ayatickets and experience seamless event management, powerful analytics, <br /> 
          and top-notch support. Let’s take your event to the next level.</p>
          <button className='bg-black text-white p-1 px-4 rounded-2xl mt-4'>Get Started</button>
        </div>

        {/* marketplace item section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Marketplace items will be rendered here */}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
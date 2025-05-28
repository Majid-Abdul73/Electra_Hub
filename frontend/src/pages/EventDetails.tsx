import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Import the events from all event components
import { votingEvents } from '../components/events/VotingEvent';
import { ticketingEvents } from '../components/events/TicketingEvent';
import { voteTicketEvents } from '../components/events/VoteAndTicketEvent';
import BuyTicketModal from '../components/modals/BuyTicketModal';
import BuyVoteModal from '../components/modals/BuyVoteModal';

interface Event {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  description: string;
  type: 'voting' | 'ticketing' | 'both';
  organizer: {
    name: string;
    image: string;
  };
}

const EventDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [isVoteModalOpen, setIsVoteModalOpen] = useState(false);
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);

  useEffect(() => {
    // fetch event data using the id
    const fetchEvent = async () => {
      try {
        // Find the voting event by ID
        const votingEvent = votingEvents.find((event: typeof votingEvents[0]) => event.id === id);
        const ticketingEvent = ticketingEvents.find((event: typeof ticketingEvents[0]) => event.id === id);
        const voteTicketEvent = voteTicketEvents.find((event: typeof voteTicketEvents[0]) => event.id === id);
        
        let eventData: Event | null = null;
        
        if (votingEvent) {
          eventData = {
            id: votingEvent.id,
            title: votingEvent.title,
            subtitle: `${votingEvent.title} - Voting Event`,
            image: votingEvent.image,
            date: votingEvent.date,
            time: votingEvent.time,
            venue: votingEvent.venue,
            location: votingEvent.location,
            description: `Vote for your favorite contestant in ${votingEvent.title}.`,
            type: 'voting',
            organizer: {
              name: "Charterhouse Productions",
              image: "/images/organizers/charterhouse.jpg"
            }
          };
        } else if (ticketingEvent) {
          eventData = {
            id: ticketingEvent.id,
            title: ticketingEvent.title,
            subtitle: `${ticketingEvent.title} - Ticketing Event`,
            image: ticketingEvent.image,
            date: ticketingEvent.date,
            time: ticketingEvent.time,
            venue: ticketingEvent.venue,
            location: ticketingEvent.location,
            description: `Get your tickets for ${ticketingEvent.title}. Price: ${ticketingEvent.price}`,
            type: 'ticketing',
            organizer: {
              name: "Event Masters",
              image: "/images/organizers/event-masters.jpg"
            }
          };
        } else if (voteTicketEvent) {
          // Transform the vote and ticket event to match the Event interface
          eventData = {
            id: voteTicketEvent.id,
            title: voteTicketEvent.title,
            subtitle: `${voteTicketEvent.title} - Voting & Ticketing Event`,
            image: voteTicketEvent.image,
            date: voteTicketEvent.date,
            time: voteTicketEvent.time,
            venue: voteTicketEvent.venue,
            location: voteTicketEvent.location,
            description: `Get your tickets and vote for your favorite contestant in ${voteTicketEvent.title}. Ticket Price: $${voteTicketEvent.ticketPrice}`,
            type: 'both',
            organizer: {
              name: "Global Entertainment",
              image: "/images/organizers/global-entertainment.jpg"
            }
          };
        }
        
        if (eventData) {
          setEvent(eventData);
        } else {
          throw new Error('Event not found');
        }
      } catch (error) {
        console.error('Error fetching event:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!event) {
    return <div className="min-h-screen flex items-center justify-center">Event not found</div>;
  }

  return (
    <div className="min-h-screen py- bg-white">
      <img src="/images/banner.jpg" alt="Banner" className="w-full h-80 object-cover mb-8 -mt-16" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="flex flex-col md:flex-row gap-8">
          <div className="w-full max-7-4xl mx-auto px-4">
            <div className='flex justify-between'>
              {/* Event Title and Subtitle */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
                <p className="text-gray-600">{event.subtitle}</p>
              </div>

              {/* Back Button */}
              <button className="mb-6" onClick={() => window.history.back()}>
                <img src="/icons/back.svg" alt="Back" className="w-6 h-6" />
              </button>
            </div>

            
            <div className='grid grid-cols-3 space-x-4 py-8 mb-12'>
              {/* Event Image */}
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Description */}
              <div className='bg-[#FAFAFA] p-8 rounded-xl'>
                  <div className="mb-6 border-b-2 pb-20">
                    <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
                    <p className="text-gray-600">{event.description}</p>
                  </div>

                  {/* Read More Button */}
                  <div className="text-start flex gap-4 items-center pt-10">
                    <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-200">
                      Read More
                    </button>
                    <img src="/icons/share.svg" alt="" className='w-10 h-10 shadow-lg p-2 rounded-full bg-white'/>
                  </div>
              </div>

              {/* Event Details */}
              <div className='bg-[#FFFBF2] p-8 rounded-xl'>
                {/* Date and Time */}
                <div className="mb-6 flex gap-4">
                  <div className="flex items-center gap-2 mb-2">
                    <img src="/icons/calendar.svg" alt="" className="w-10 h-10" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="/icons/clock.svg" alt="" className="w-10 h-10" />
                    <span>{event.time}</span>
                  </div>
                </div>

                {/* Location */}
                <div className="mb-6">
                  <div className="flex items-center gap-2">
                    <img src="/icons/location.svg" alt="" className="w-10 h-10" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mb-6">
                  {(event.type === 'ticketing' || event.type === 'both') && (
                    <button 
                      onClick={() => setIsTicketModalOpen(true)}
                      className="bg-[#69D097] text-white py-2 px-2 rounded-full flex items-center justify-center gap-2"
                    >
                      <span className='text-s'>BUY A TICKET</span>
                      <img src="/icons/ticket.svg" alt="" className="w-5 h-5" />
                    </button>
                  )}
                
                  {event && (
                    <BuyTicketModal
                      isOpen={isTicketModalOpen}
                      onClose={() => setIsTicketModalOpen(false)}
                      eventDetails={{
                        title: event.title,
                        description: event.description,
                        image: event.image
                      }}
                    />
                  )}
                  {(event.type === 'voting' || event.type === 'both') && (
                    <button 
                      onClick={() => setIsVoteModalOpen(true)}
                      className="bg-[#69D097] text-white py-2 px-2 rounded-full flex items-center justify-center gap-2"
                    >
                      <span>BUY A VOTE</span>
                      <img src="/icons/vote.svg" alt="" className="w-5 h-5" />
                    </button>
                  )}
                
                  {event && (
                    <BuyVoteModal
                      isOpen={isVoteModalOpen}
                      onClose={() => setIsVoteModalOpen(false)}
                      voteDetails={{
                        title: event.title,
                        description: event.description,
                        price: 10, // a default price or get from the event data
                        image: event.image
                      }}
                    />
                  )}
                </div>

                {/* Organizer */}
                <div className="mb-6 bg-white p-4">
                  <div className='flex items-center justify-between'>
                    <div>
                      <h3 className="font-semibold mb-2">Organized by</h3>
                      <span>{event.organizer.name}</span>
                    </div>
                    <div className='flex gap-3'>
                      <img src="/icons/facebook.svg" alt="" />
                      <img src="/icons/youtube1.svg" alt="" />
                    </div>
                  </div>
                </div>

                {/* Connect to Ride */}
                <div className='px-'>
                  <div className='flex py-8'>
                    <h3 className="font-semibold">Connect to ride</h3>
                    <span className="text-gray-600">/Optional</span>
                  </div>

                  <div className='flex gap-2 items-center justify-center'>
                    <img src="/icons/uber.svg" alt="uber" className='w-20 h-16'/>
                    <img src="/icons/yango.svg" alt="yango" className='w-20 h-16'/>
                    <img src="/icons/bolt.svg" alt="bolt" className='w-20 h-16'/>
                    <img src="/icons/shaxi.svg" alt="shaxi" className='w-20 h-16'/>
                  </div>
                </div>
              </div>

            </div>           
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventDetails;
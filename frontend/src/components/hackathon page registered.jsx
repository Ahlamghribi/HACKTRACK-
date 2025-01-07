import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect} from 'react';
import axios from 'axios'
import { MessageSquare, Instagram, Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';

const SavedEventsSection = () => {
  const location = useLocation();
  const user = location.state?.user || JSON.parse(localStorage.getItem('user')); // Use state or localStorage
  const [events, setEvents] = useState([]); // Store fetched data
  const [activeFilter, setActiveFilter] = useState('All'); // Manage filter state
  const [filteredEvents, setFilteredEvents] = useState([]); // Store filtered events

  const filters = ['All', 'Now Running', 'Upcoming', 'Archive'];

  // Fetch data from the backend
  useEffect(() => {
    const fetchHackathons = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/hackathons');
        setEvents(response.data);
      } catch (err) {
        console.error('Error fetching hackathons:', err);
      }
    };

    fetchHackathons();
  }, []);

  // Filter events based on the active filter
  useEffect(() => {
    const now = new Date();
    const hackathons = Array.isArray(events.hackathons) ? events.hackathons : [];
    const filtered = hackathons.filter((event) => {
      const [startDate, endDate] = event.date.split(' - ').map((d) => new Date(d));

      if (activeFilter === 'Now Running') {
        return now >= startDate && now <= endDate;
      }
      if (activeFilter === 'Upcoming') {
        return now < startDate;
      }
      if (activeFilter === 'Archive') {
        return now > endDate;
      }
      return true; // 'All' filter
    });

    setFilteredEvents(filtered);
  }, [activeFilter, events]);

  return (
    <div className="p-8 bg-[#1A232E] min-h-screen">
       <h1 className="text-white font-['Necosmic'] text-3xl mt-12 mb-12 text-center">
        <span className="text-white">HACKATHONS</span> 
      </h1>

       <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-full text-white font-['New'] border-2 ${
              activeFilter === filter
                ? 'bg-purple-500 border-purple-500 font-bold'
                : 'bg-transparent border-white hover:bg-purple-500/20'
            } transition-all duration-300`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-[rgba(255,255,255,0.14)] rounded-xl overflow-hidden backdrop-blur-sm">
        <table className="w-full font-['New2'] text-white">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left p-4 text-2xl">Name</th>
              <th className="text-left p-4 text-2xl">Date</th>
              <th className="text-left p-4 text-2xl">Location</th>
              <th className="text-left p-4 text-2xl">Team Members</th>
              <th className="text-left p-4 text-2xl">Organization</th>
              <th className="text-left p-4 text-2xl">Discover</th>
            </tr>
          </thead>
          <tbody>
            
            {filteredEvents.map((event, index) => (
              <tr
                key={index}
                className="border-b border-t-2 border-white mt-6 hover:bg-purple-500/10 transition-colors"
              >
                <td className="p-4">{event.name}</td>
                <td className="p-4">{event.date}</td>
                <td className="p-4">{event.location}</td>
                <td className="p-4">{event.team_members}</td>
                <td className="p-4">{event.Organization}</td>
                <td className="p-4">
                  <Link to="/hackathonpagediscover" state={{event, user}} className="px-4 py-2 bg-purple-500 rounded-full hover:bg-purple-400 font-['New'] transition-colors">
                    <button>Discover More</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};


const NewsletterSection = () => (
  <div className="container mx-auto px-8 mt-32 mb-32 text-center">
    <h2 className="text-purple-400 font-['Necosmic'] text-6xl mb-8">
      COMING SOON
    </h2>
    
    <div className="mb-8">
      <span className="text-purple-400 font-['New2'] text-4xl">Subscribe</span>
      <span className="text-white font-['New2'] text-4xl"> to our </span>
      <span className="text-purple-400 font-['New2'] text-4xl">newsletter</span>
      <span className="text-white font-['New2'] text-4xl"> to stay </span>
      <span className="text-purple-400 font-['New2'] text-4xl">updated</span>
    </div>
    
    <div className="flex justify-center items-center space-x-4 max-w-2xl mx-auto">
      <input
        type="email"
        placeholder="Your Email..."
        className="flex-1 bg-transparent border border-purple-500 font-['Antipasto'] rounded-lg px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <button className="bg-purple-500 px-8 py-3 rounded-lg text-white font-['Antipasto'] text-xl hover:bg-purple-400">
        Subscribe
      </button>
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className=" backdrop-blur-sm p-8 mt-16">
      <div className="flex justify-center mb-12">
        <img 
          src="/logo.png" 
          alt="HACKTRACK" 
          className="h-16 w-auto"   
        />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4 text-center md:text-left">
          <div className="space-y-3">
              <p className="text-gray-400 hover:text-purple-400 cursor-pointer font-['Necosmic'] text-lg md:text-xl">HACKATHONS</p>
              <p className="text-gray-400 hover:text-purple-400 cursor-pointer font-['Necosmic'] text-lg md:text-xl">CTFS</p>
              <p className="text-gray-400 hover:text-purple-400 cursor-pointer font-['Necosmic'] text-lg md:text-xl">DATATHONS</p>
              <p className="text-gray-400 hover:text-purple-400 cursor-pointer font-['Necosmic'] text-lg md:text-xl">CALENDAR</p>
              <p className="text-gray-400 hover:text-purple-400 cursor-pointer font-['Necosmic'] text-lg md:text-xl">NEWSLETTER</p>
              <p className="text-gray-400 hover:text-purple-400 cursor-pointer font-['Necosmic'] text-lg md:text-xl">PROFILE</p>
            </div>
        </div>

        <div className="text-center space-y-6">
          <h3 className="text-white font-['Necosmic'] text-2xl">Follow Us</h3>
          <div className="flex justify-center space-x-8">
           <div className="flex space-x-6 items-center justify-center mt-4">
                           <MessageSquare className="text-blue-600 hover:text-blue-500 cursor-pointer w-10 h-10" />
                           <Instagram className="text-pink-600 hover:text-pink-500 cursor-pointer w-10 h-10" />
                           <Github className="text-gray-900 hover:text-gray-700 cursor-pointer w-10 h-10" />
                           <Linkedin className="text-blue-700 hover:text-blue-500 cursor-pointer w-10 h-10" />
                         </div>
          </div>
        </div>

        <div className="text-center md:text-left space-y-6">
          <h3 className="text-white font-['Necosmic'] text-2xl">Contact Us</h3>
          <div className="space-y-4">
            <a href="mailto:hacktrack@gmail.com" className="flex items-center justify-center md:justify-start space-x-3 group">
              <Mail className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
              <span className="text-gray-400 group-hover:text-purple-400 transition-colors duration-200 font-['New2']">
                hacktrack@gmail.com
              </span>
            </a>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Phone className="w-5 h-5 text-purple-400" />
              <span className="text-gray-400 font-['New2']">
                +213 666 66 35 07
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16" style={{ borderBottom: '2px solid #A965F8' }}></div> 

      <div className="text-center mt-12 flex items-center justify-center space-x-2">
        <span className="text-purple-400 font-['Necosmic'] text-2xl">MADE WITH</span>
        <Heart className="w-6 h-6 text-purple-400 fill-current" />
      </div>
 
    </footer>
  );
};

const HomePage = () => {
  const location = useLocation();
  const user = location.state?.user || JSON.parse(localStorage.getItem('user')); // Use state or localStorage
  return (
    <div className="min-h-screen bg-[#1A232E] relative">
      <nav className="flex justify-between items-center px-30 py-16 bg-transparent ml-12">
        <div className="flex space-x-32 items-center">
          <Link to="/hackathonpage" state= {user} className="text-purple-400 font-['Necosmic'] hover:text-purple-300">
            HACKATHONS
          </Link>
          <Link to="/ctfpage" state= {user} className="text-purple-400 font-['Necosmic'] hover:text-purple-300">
            CTFS
          </Link>
          <Link to="/home">
            <img 
              src="/logo.png" 
              alt="HackTrack Logo" 
              className="h-16 w-auto" 
            />
          </Link>
          <Link to="/datathonpage" state= {user} className="text-purple-400 font-['Necosmic'] hover:text-purple-300">
            DATATHONS
          </Link>
          <Link className="flex items-center space-x-2">
            <span className="text-white font-['Necosmic'] text-[22px]">Hello!</span>
          </Link>
        </div>
      </nav>
   
      <div style={{ borderBottom: '2px solid #A965F8' }}></div>
      <SavedEventsSection />
      <div style={{ borderBottom: '2px solid #A965F8' }}></div>
      <NewsletterSection />
      <div style={{ borderBottom: '2px solid #A965F8' }}></div>
      <Footer />
      <div style={{ borderBottom: '2px solid #A965F8' }}></div>
    </div>
  );
};

export default HomePage;
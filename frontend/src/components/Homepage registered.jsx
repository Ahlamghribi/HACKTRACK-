import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { MessageSquare, Instagram, Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';

const PopularHackathonsSection = () => {
  const [hackathons, setHackathons] = useState([]);

  useEffect(() => {
    const fetchHackathons = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/hackathons3');
        const data = await response.json();
        setHackathons(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching hackathons:', error);
      }
    };

    fetchHackathons();
  }, []);
  // Get the first three hackathons
  const topHackathons = hackathons.slice(0, 3);

  return (
    <div className="container mx-auto px-8 mt-32 mb-20">
      <h2 className="text-center mb-12">
        <span className="text-white text-4xl" style={{ fontFamily: 'Necosmic' }}>POPULAR </span>
        <span className="text-purple-400 text-4xl" style={{ fontFamily: 'Necosmic' }}>HACKATHONS</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {topHackathons.map((hackathon, index) => (
          <div
            key={index}
            className="rounded-3xl overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.14)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div className="p-8">
              <div className="space-y-2">
                <h3 className="text-white text-3xl font-['New'] font-bold">{hackathon.name}</h3>
                <p className="text-white text-xl font-['New3']">Organized by {hackathon.Organization}</p>
                <p className="text-white font-['New2']">{hackathon.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PopularCtfSection = () => {
  const [CTFs, setCTFs] = useState([]);

  useEffect(() => {
    const fetchCTFs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/CTFs3');
        const data = await response.json();
        setCTFs(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching CTFs:', error);
      }
    };

    fetchCTFs();
  }, []);
  // Get the first three CTFs
  const topCTFs = CTFs.slice(0, 3);

  return (
    <div className="container mx-auto px-8 mt-32 mb-20">
      <h2 className="text-center mb-12">
        <span className="text-white text-4xl" style={{ fontFamily: 'Necosmic' }}>POPULAR </span>
        <span className="text-purple-400 text-4xl" style={{ fontFamily: 'Necosmic' }}>CTFs</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {topCTFs.map((CTF, index) => (
          <div
            key={index}
            className="rounded-3xl overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.14)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div className="p-8">
              <div className="space-y-2">
                <h3 className="text-white text-3xl font-['New'] font-bold">{CTF.name}</h3>
                <p className="text-white text-xl font-['New3']">Organized by {CTF.Organization}</p>
                <p className="text-white font-['New2']">{CTF.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PopularDatathonsSection = () => {
  const [Datathons, setDatathons] = useState([]);

  useEffect(() => {
    const fetchDatathons = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/datathons3');
        const data = await response.json();
        setDatathons(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching Datathons:', error);
      }
    };

    fetchDatathons();
  }, []);
  // Get the first three Datathons
  const topDatathons = Datathons.slice(0, 3);

  return (
    <div className="container mx-auto px-8 mt-32 mb-20">
      <h2 className="text-center mb-12">
        <span className="text-white text-4xl" style={{ fontFamily: 'Necosmic' }}>POPULAR </span>
        <span className="text-purple-400 text-4xl" style={{ fontFamily: 'Necosmic' }}>Datathons</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {topDatathons.map((Datathon, index) => (
          <div
            key={index}
            className="rounded-3xl overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.14)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div className="p-8">
              <div className="space-y-2">
                <h3 className="text-white text-3xl font-['New'] font-bold">{Datathon.name}</h3>
                <p className="text-white text-xl font-['New3']">Organized by {Datathon.Organization}</p>
                <p className="text-white font-['New2']">{Datathon.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SavedEventsSection = () => {
  const location = useLocation();
  const user = location.state?.user || JSON.parse(localStorage.getItem('user')); // Use state or localStorage

  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Now Running', 'Upcoming', 'Archive'];

  const events = [
    {
      name: 'Micro Hack',
      date: '20/12/2024 - 24/12/2024',
      location: 'USTHB',
      teamMembers: 'Team of 4',
      organization: 'Micro Club'
    },
    {
      name: 'Micro Hack',
      date: '20/12/2024 - 24/12/2024',
      location: 'On-line',
      teamMembers: 'Individual',
      organization: 'Micro Club'
    },
    {
      name: 'Micro Hack',
      date: '20/12/2024 - 24/12/2024',
      location: 'USTHB',
      teamMembers: 'Team of 4',
      organization: 'Micro Club'
    },
    {
      name: 'Micro Hack',
      date: '20/12/2024 - 24/12/2024',
      location: 'USTHB',
      teamMembers: 'Team of 4',
      organization: 'Micro Club'
    }
  ];

  return (
    <div className="p-8 bg-[#1A232E] min-h-screen">
       <h1 className="text-white font-['Necosmic'] text-3xl mb-8 text-center">
        <span className="text-white">HELLO AGAIN </span>
        <span className="text-purple-400 font-['Necosmic']">{user.profession}</span>
        <span className="text-white"> !</span>
      </h1>

       <h2 className="text-white font-['New'] text-4xl mb-6 text-left">Saved Events</h2>

       <div className="flex flex-wrap gap-4 mb-8">
  {filters.map((filter) => (
    <button
      key={filter}
      onClick={() => setActiveFilter(filter)}
      className={`px-6 py-2 rounded-full text-white font-['New'] border-2 ${
        activeFilter === filter
          ? 'bg-purple-500 border-purple-500 font-bold'  // Active button with bold text and purple border
          : 'bg-transparent border-white hover:bg-purple-500/20'  // Inactive button with transparent background and white border
      } transition-all duration-300`}
    >
      {filter}
    </button>
  ))}
</div>
 

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
            {events.map((event, index) => (
              <tr 
                key={index} 
                className="border-b border-t-2 border-white mt-6 hover:bg-purple-500/10 transition-colors"
              >
                <td className="p-4">{event.name}</td>
                <td className="p-4">{event.date}</td>
                <td className="p-4">{event.location}</td>
                <td className="p-4">{event.teamMembers}</td>
                <td className="p-4">{event.organization}</td>
                <td className="p-4">
                  <button className="px-4 py-2 bg-purple-500 rounded-full hover:bg-purple-400 font-['New'] transition-colors">
                    Discover More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
            <span className="text-white font-['Necosmic'] text-[18px]">Hello!</span>
          </Link>

        </div>
      </nav>

      <div style={{ borderBottom: '2px solid #A965F8' }}></div>

      <div className="container mx-auto px-8 mt-20 flex justify-between items-center">
        <div className="w-1/2">
          <img 
            src="/logo.png" 
            alt="HackTrack Logo" 
            className="w-auto h-32"
          />
          <div className="space-y-4 mb-12">
            <h2 className="text-4xl font-['Necosmic'] flex justify-between">
              <span className="text-white">WHERE</span>
              <span className="text-white">INNOVATORS</span>
            </h2>
            <h2 className="text-4xl font-['Necosmic'] flex justify-between">
              <span className="text-purple-400">MEET<span className="text-white">,</span></span>
              <span className="text-purple-400">COMPETE<span className="text-white">,</span></span>
              <span className="text-white">AND</span>
            </h2>
            <h2 className="text-4xl font-['Necosmic'] flex justify-between">
              <span className="text-purple-400">EXCEL<span className="text-white">.</span></span>
            </h2>
          </div>
        </div>

        <div className="w-1/2 relative ml-16">
          <div className="relative w-[500px] h-[500px]">
            <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-3xl"></div>
            <img 
              src="/world.png" 
              alt="Interactive Globe" 
              className="w-full h-full object-contain relative z-10"
            />
            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-500 rounded-full"></div>
            <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-purple-500 rounded-full"></div>
            <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-purple-500 rounded-full"></div>
          </div>
        </div>
      </div>

      <div style={{ borderBottom: '2px solid #A965F8' }}></div>

      <PopularHackathonsSection />
      <div style={{ borderBottom: '2px solid #A965F8' }}></div>
      <PopularCtfSection />
      <div style={{ borderBottom: '2px solid #A965F8' }}></div>
      <PopularDatathonsSection />
      <div style={{ borderBottom: '2px solid #A965F8' }}></div>
      {/* <SavedEventsSection />
      <div style={{ borderBottom: '2px solid #A965F8' }}></div> */}
      <NewsletterSection />
      <div style={{ borderBottom: '2px solid #A965F8' }}></div>
      <Footer />
      <div style={{ borderBottom: '2px solid #A965F8' }}></div>
    </div>
  );
};

export default HomePage;
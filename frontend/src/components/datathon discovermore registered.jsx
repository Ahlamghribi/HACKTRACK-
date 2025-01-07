import { useLocation, Link } from 'react-router-dom';
import React, { useState } from 'react';
import { MessageSquare, Instagram, Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';

const EventDetailCard = () => {
  const location_event = useLocation();
  const event = location_event.state?.event || JSON.parse(localStorage.getItem('event')); // Use state or localStorage

  return (
    <div className="min-h-screen bg-[#1A232E] p-8">
      <h1 className="text-white text-4xl text-center font-['Necosmic'] mb-12">Datathon</h1>

      <div className="max-w-4xl font-['New2'] mx-auto bg-[rgba(255,255,255,0.14)] rounded-2xl p-8 backdrop-blur-sm">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            <h2 className="text-white text-4xl font-['New3']">{event.name}</h2>
            <button className="bg-transparent border-2 border-purple-500 text-purple-500 px-2 py-0.5 rounded-lg hover:bg-purple-500 text-white transition-colors">
              Save Event
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-4">
            <p className="text-white">{event.date}</p>

            <div>
              <span className="text-purple-400">On-site : </span>
              <span className="text-white">{event.location}</span>
            </div>

            <div>
              <span className="text-purple-400">Team Members : </span>
              <span className="text-white">{event.team_members}</span>
            </div>

            <div>
              <span className="text-purple-400">Organized by : </span>
              <span className="text-white">{event.Organization}</span>
            </div>

            <div>
              <span className="text-purple-400">Official URL : </span>
              <a
                href={event.url}
                className="text-white hover:text-purple-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {event.URL}
              </a>
            </div>

            <div className="mt-8 w-full px-0">
              <h3 className="text-purple-400 text-xl mb-2">Event Description :</h3>
              <p className="text-white leading-relaxed w-full max-w-full">
                {event.description}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button href={event.URL} className="bg-purple-500 px-8 py-3 font-['New3'] rounded-full text-white text-lg hover:bg-purple-400 transition-colors">
            Register Now !
          </button>
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
  const location_user = useLocation();
  const user = location_user.state?.user || JSON.parse(localStorage.getItem('user')); // Use state or localStorage
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
      <EventDetailCard />
      <div style={{ borderBottom: '2px solid #A965F8' }}></div>
      <NewsletterSection />
      <div style={{ borderBottom: '2px solid #A965F8' }}></div>
      <Footer />
      <div style={{ borderBottom: '2px solid #A965F8' }}></div>
    </div>
  );
};

export default HomePage;
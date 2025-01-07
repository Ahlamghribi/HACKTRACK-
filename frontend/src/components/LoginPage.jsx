import React, { useState } from 'react';
import { MessageSquare, Instagram, Github, Linkedin, Mail, Phone, Eye, EyeOff, Heart } from 'lucide-react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password){
      alert("All fields are required!");
    } else {
      axios.post('http://localhost:5000/api/login', {email, password})
      .then(result => {
        const user = result.data.user; // assuming user info is returned from API
        const token = result.data.token;

        // Store the token and user data in localStorage for session persistence
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);

        // Navigate to home or profile page and pass user data through state
        navigate('/home', { state: { user } });
      })
      .catch(err => {
        console.log(err);
        alert(err);
      })
      
    }//TODO lazem yaffichi ll user wesh raho ghalet
  };

  return (
    <>
      <div className="min-h-screen bg-[#1A232E] flex flex-col relative">
         <div className="absolute top-0 right-0 pointer-events-none">
          <div className="w-[10rem] h-[10rem] bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute top-0 left-0 pointer-events-none">
          <div className="w-[10rem] h-[10rem] bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

         <div className="flex-1 flex flex-col items-center justify-center p-6 relative">
           <div className="mt-24 mb-8">
            <img 
              src="/public/logo.png" 
              alt="HACKTRACK" 
              className="h-24 w-auto" 
              />
          </div> 

           <div className="w-full max-w-[800px] bg-[#FFFFFF24] border-2 border-[#A965F899] p-10 rounded-lg shadow-xl">
          <h2 className="text-white text-4xl text-center mb-6 font-['New2']">Welcome Back !</h2>
            
          <form onSubmit={handleSubmit} className="space-y-4 w-[400px] mx-auto">
  <div>
    <label className="text-gray-300 text-2xl sm:text-xl text-base block mb-2">Email</label>
    <input
      type="email"
      className="w-full bg-transparent border-2 border-[#A965F899] rounded-lg p-4 text-white font-['New2'] text-lg focus:outline-none focus:border-[#A965F899]"
      placeholder="Your Email..."
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
 

    <div className="relative">
      <label className="text-gray-300 text-2xl sm:text-xl text-base block mb-2">Password</label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          className="w-full bg-transparent border-2 border-[#A965F899] rounded-lg p-4 text-white font-['New2'] text-lg focus:outline-none focus:border-[#A965F899]"
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-[#A965F899]"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
      <a 
  href="#" 
  className="text-xl text-[#A965F899] hover:text-[#A965F899] mt-1 font-['New2'] block text-left font-extrabold"
>      Forgot password?
</a>

    </div>

    <button
      type="submit"
      className="w-full bg-gradient-to-r from-purple-600 to-purple-400 text-white py-2 rounded-lg hover:opacity-90 transition-opacity text-2xl sm:text-xl text-base"
    >
      Log In
    </button>
  </form>

 <p className="text-center text-gray-400 mt-4 font-['New2'] font-bold text-xl">
  You don't have an account? 
  <a href="/signup" className="text-2xl text-[#A965F899] hover:text-[#A965F899] font-['New2']"> Sign up</a>
</p>

</div>
        </div>
        <div className="mb-32"></div>

        <div className="h-1 bg-[#8657CC]"></div>

         <footer className="bg-gray-900/50 backdrop-blur-sm p-8 relative">
           <div className="flex justify-center mt-8 mb-4">
            <img 
              src="/logo.png" 
              alt="HACKTRACK" 
              className="h-16 w-auto"   
            />
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="space-y-2">
              <p className="text-gray-400 hover:text-purple-400 cursor-pointer font-['Necosmic'] text-lg md:text-xl">HACKATHONS</p>
              <p className="text-gray-400 hover:text-purple-400 cursor-pointer font-['Necosmic'] text-lg md:text-xl">CTFS</p>
              <p className="text-gray-400 hover:text-purple-400 cursor-pointer font-['Necosmic'] text-lg md:text-xl">DATATHONS</p>
              <p className="text-gray-400 hover:text-purple-400 cursor-pointer font-['Necosmic'] text-lg md:text-xl">CALENDAR</p>
              <p className="text-gray-400 hover:text-purple-400 cursor-pointer font-['Necosmic'] text-lg md:text-xl">NEWSLETTER</p>
              <p className="text-gray-400 hover:text-purple-400 cursor-pointer font-['Necosmic'] text-lg md:text-xl">PROFILE</p>
            </div>

             <div className="space-y-4">
              <p className="text-gray-400 hover:text-purple-400 cursor-pointer font-['Necosmic'] text-center text-xl">Follow Us</p>
              <div className="flex space-x-6 items-center justify-center mt-4">
                <MessageSquare className="text-blue-600 hover:text-blue-500 cursor-pointer w-10 h-10" />
                <Instagram className="text-pink-600 hover:text-pink-500 cursor-pointer w-10 h-10" />
                <Github className="text-gray-900 hover:text-gray-700 cursor-pointer w-10 h-10" />
                <Linkedin className="text-blue-700 hover:text-blue-500 cursor-pointer w-10 h-10" />
              </div>
            </div>

             <div className="space-y-4 font-['Necosmic']">
              <p className="text-gray-400 hover:text-purple-400 cursor-pointer font-['Necosmic'] text-xl">CONTACT US ON</p>
              
               <div className="flex items-center space-x-2 text-gray-400 font-['New2 Pro']">
                <Mail size={18} className="text-purple-500" />
                <span className="hover:text-purple-500 cursor-pointer">hacktrack@gmail.com</span>
              </div>

               <div className="flex items-center space-x-2 text-gray-400 font-['New2'] font-semibold">
                <Phone size={18} className="text-purple-500" />
                <span>+213 666 66 35 07</span>
              </div>
            </div>
            
          </div>

           <div className="text-center text-purple-400 flex items-center justify-center space-x-2 font-['Necosmic'] text-2xl md:text-xl">
            <span>MADE WITH</span>
            <Heart className="fill-current" size={24} />
          </div>
        </footer>
      </div>
    </>
  );
};

export default LoginPage;

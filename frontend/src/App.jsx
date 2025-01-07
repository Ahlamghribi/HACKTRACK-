import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignupPage';
import HomePage from './components/Homepage'; // Assurez-vous que le nom correspond exactement
import Homepage from './components/Homepage registered'; // Assurez-vous que le nom correspond exactement
import Savedevent from './components/saved event'; // Assurez-vous que le nom correspond exactement
import Datathonpageregistered from './components/datathon page registered'; // Assurez-vous que le nom correspond exactement
import Datathonpageunregistered from './components/datathon page unregistered'; // Assurez-vous que le nom correspond exactement
import Datathonpageregisterediscover from './components/datathon discovermore registered'; // Assurez-vous que le nom correspond exactement
import Datathonpageunregisterediscover from './components/datathon discovermore unregistered'; // Assurez-vous que le nom correspond exactement
import Ctfspageregistered from './components/ctfs page registered'; // Assurez-vous que le nom correspond exactement
import Ctfspageunregistered from './components/ctfs page unregistered'; // Assurez-vous que le nom correspond exactement
import Ctfspageregisterediscover from './components/ctfs discovermore registered'; // Assurez-vous que le nom correspond exactement
import Ctfspageunregisterediscover from './components/ctfs discovermore unregistered'; // Assurez-vous que le nom correspond exactement
import Hackathonpageregistered from './components/hackathon page registered'; // Assurez-vous que le nom correspond exactement
import Hackathonpageunregistered from './components/hackathon page unregistered'; // Assurez-vous que le nom correspond exactement
import Hackathonpageregisterediscover from './components/hackathon discovermore registered'; // Assurez-vous que le nom correspond exactement
import Hackathonpageunregisterediscover from './components/hackathon discovermore unregistered'; // Assurez-vous que le nom correspond exactement

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the Home Page */}
        <Route path="/" element={<HomePage />} /> 
        <Route path="/home" element={<Homepage />} />  
        <Route path="/savedevent" element={<Savedevent />} /> 
        <Route path="/hackathon" element={<Hackathonpageunregistered />} />
        <Route path="/hackathonpage" element={<Hackathonpageregistered />} />
        <Route path="/hackathondiscover" element={<Hackathonpageunregisterediscover />} />
        <Route path="/hackathonpagediscover" element={<Hackathonpageregisterediscover />} />
        <Route path="/datathon" element={<Datathonpageunregistered />} />
        <Route path="/datathonpage" element={<Datathonpageregistered />} />
        <Route path="/datathondiscover" element={<Datathonpageunregisterediscover />} />
        <Route path="/datathonpagediscover" element={<Datathonpageregisterediscover />} />
        <Route path="/ctf" element={<Ctfspageunregistered />} />
        <Route path="/ctfpage" element={<Ctfspageregistered />} />
        <Route path="/ctfdiscover" element={<Ctfspageunregisterediscover />} />
        <Route path="/ctfpagediscover" element={<Ctfspageregisterediscover />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;

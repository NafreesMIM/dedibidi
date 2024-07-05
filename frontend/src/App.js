import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Navbar/Footer';
import Home from './Components/Home/home';
import About from './Components/Pages/About'; 
import Contact from './Components/Pages/Contact'; 
import Privacy from './Components/Pages/privacy'; 
import Login from './Components/Pages/login'; 
import Register from './Components/Pages/Register'; 
import Service1 from './Components/Job/service1'; 
import Service3 from './Components/Consultation/service3'; 
import ConsNavbar from './Components/Consultation/ConsultationNavbar';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          {/* Render Navbar for specific routes */}
          <Routes>
            <Route path='/' element={<CustomNavbar />} />
            <Route path='/about' element={<CustomNavbar />} /> 
            <Route path='/contact' element={<CustomNavbar />} /> 
            <Route path='/privacy' element={<CustomNavbar />} /> 
            <Route path='/login' element={<CustomNavbar />} /> 
            <Route path='/Consultation/*' element={<CustomNavbar />} /> 
            <Route path='/register' element={<CustomNavbar />} />
          </Routes>

          {/* Render content */}
          <Routes>
            <Route path='/' element={<HomeWithContentContainer />} />
            <Route path='/about' element={<AboutWithContentContainer />} /> 
            <Route path='/contact' element={<ContactWithContentContainer />} /> 
            <Route path='/privacy' element={<PrivacyWithContentContainer />} /> 
            <Route path='/login' element={<LoginWithContentContainer />} /> 
            <Route path='/register' element={<RegisterWithContentContainer />} />
            <Route path='/Consultation/*' element={<ConsNavbar />} /> 
            <Route path='/Consultation/service3' element={<Service3 />} /> 
            <Route path='/Job/service1' element={<Service1 />} /> 
          </Routes>

          <hr />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

// Components with content container for each route
function HomeWithContentContainer() {
  return (
    <div className='content-container'>
      <Home />
    </div>
  );
}

function AboutWithContentContainer() {
  return (
    <div className='content-container'>
      <About />
    </div>
  );
}

function ContactWithContentContainer() {
  return (
    <div className='content-container'>
      <Contact />
    </div>
  );
}

function PrivacyWithContentContainer() {
  return (
    <div className='content-container'>
      <Privacy />
    </div>
  );
}

function LoginWithContentContainer() {
  return (
    <div className='content-container'>
      <Login />
    </div>
  );
}

function RegisterWithContentContainer() {
  return (
    <div className='content-container'>
      <Register />
    </div>
  );
}

function CustomNavbar() {
  const location = useLocation();
  
  // Check if the current location is under consultation route
  if (location.pathname.startsWith('/Consultation')) {
    return null;
  } else {
    return <Navbar />;
  }
}

export default App;

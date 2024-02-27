// App.js
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Navbar/Footer';
import Home from './Components/Home/home';
import About from './Components/Pages/About'; 
import Contact from './Components/Pages/Contact'; 
import Privacy from './Components/Pages/privacy'; 
import Login from './Components/Pages/login'; 
import Register from './Components/Pages/Register'; 
import Service3 from './Components/Consultation/service3';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            {/* Only render Navbar for routes other than /Consultation/service3 */}
            <Route index element={<Navbar />} />
            <Route path='/about' element={<About />} /> 
            <Route path='/contact' element={<Contact />} /> 
            <Route path='/privacy' element={<Privacy />} /> 
            <Route path='/login' element={<Login />} /> 
            <Route path='/register' element={<Register />} />
          </Route>
        </Routes>

        <div >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} /> 
            <Route path='/contact' element={<Contact />} /> 
            <Route path='/privacy' element={<Privacy />} /> 
            <Route path='/login' element={<Login />} /> 
            <Route path='/register' element={<Register />} />
            <Route path='/Consultation/service3' element={<Service3 />} />
          </Routes>
        </div>

        <hr />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

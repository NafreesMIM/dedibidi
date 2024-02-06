import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Navbar/Footer';
import Home from './Components/Home/home';
import About from './Components/Pages/Aboute'; 
import Contact from './Components/Pages/Contact'; 
import Privacy from './Components/Pages/privacy'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar className="navbar" />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} /> 
          <Route path='/contact' element={<Contact />} /> 
          <Route path='/privacy' element={<Privacy />} /> 
        </Routes>
        {/* don't use anything under this */}
        <hr />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

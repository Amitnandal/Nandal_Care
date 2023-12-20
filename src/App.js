
import './App.css';
import './Components/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'aos/dist/aos.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import Services from './Components/Services';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact';
import Fresh from './Components/Fresh';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path='' element={<Home/>} />
      <Route path='/About' element={<About/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Fresh' element={<Fresh  />}/>
    </Routes>
    
    <Footer/>

    </BrowserRouter>
  );
}

export default App;

import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavbarTop from './components/NavbarTop';
import NavbarBottom from './components/NavbarBottom';
import Home from './pages/Home'
import About from './pages/About';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { useState } from 'react';
import Data from './Data';



function App() {

  const[pageBar, setPageBar] = useState(false);

  return (
    <div className={pageBar? ("app on"): ("app off")}>

      <NavbarTop pageBar={pageBar} setPageBar={setPageBar}/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects projects={Data}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/*' element={<Home/>}/>
      </Routes>

      <NavbarBottom />
      <Footer/>
    </div>
  );
}

export default App;

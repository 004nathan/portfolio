import { useMediaQuery } from 'react-responsive';
import MediaQuery from 'react-responsive'
// import { DesktopNav, TabletNav, MobileNav } from './components';
import Style from './App.module.css';
import {Routes,Route} from "react-router-dom"
import Navigationbar from './Components/Navigationbar/Navigationbar';
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Skill from './Skill';
function App() {
  return (
    <div className={Style.App}>
    <Navigationbar/>
    <div className={Style.routeDiv}>
     <Routes>

     <Route path="/home" element={<Home/>}></Route>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/about" element={<About/>}></Route>
     <Route path="/work" element={<Work/>}></Route>
     <Route path="/skill" element={<Skill/>}></Route>
     <Route path="contact" element={<Contact/>}></Route>
     
     </Routes>
     </div>
    </div>
  );
}

export default App;

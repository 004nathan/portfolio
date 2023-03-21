import React from 'react'
import { NavLink,useLocation } from 'react-router-dom'
import Style from './Navigationbar.module.css'
export default function Navigationbar() {
  let location = useLocation();

  // React.useEffect(() => {
  //   // Google Analytics
    
  // }, [location]);
  return (
    <div className={Style.navContainer}>
       <NavLink to='/home'>
    <div className={Style.logodiv}>
  <img src="../assets/2-removebg-preview.png" className={Style.imgLogo}/>
   {/* <lord-icon
    src="https://cdn.lordicon.com/albqovim.json"
    trigger="hover"
    style={{width:'250px',height:'250px',backgroundColor:"white"}}>
</lord-icon> */}
   </div>
   </NavLink>
   <div className={Style.NavigationName}>
    <div className={Style.home}>
    <NavLink to='/home'  className={location.pathname==='/home'||location.pathname==='/'?null:Style.link}>Home</NavLink>
<div className={location.pathname==='/home'||location.pathname==='/'?Style.border:Style.borderNone}> </div>
    </div>
    <div className={Style.home}>
    <NavLink to='/about' className={location.pathname==='/about'?null:Style.link}>About</NavLink>
<div className={location.pathname==='/about'?Style.border:Style.borderNone}> </div>
    </div>
    <div className={Style.home}>
    <NavLink to='/work'  className={location.pathname==='/work'?null:Style.link}>Work</NavLink>
<div className={location.pathname==='/work'?Style.border:Style.borderNone}> </div>
    </div>
    <div className={Style.home}>
    <NavLink to='/skill'  className={location.pathname==='/skill'?null:Style.link}>Skills</NavLink>
<div className={ location.pathname==='/skill'?Style.border:Style.borderNone}> </div>
    </div>
    
    <div className={Style.home}>
    <NavLink to='/contact'  className={location.pathname==='/contact'?null:Style.link}>Contact</NavLink>
<div className={ location.pathname==='/contact'?Style.border:Style.borderNone}> </div>
    </div>
    
   </div>
    </div>
  )
}

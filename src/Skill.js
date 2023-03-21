import React from 'react'
import Style from './App.module.css'
export default function Skill() {
    let skillDetails=[{"name":"HTML","img":"../assets/download (1).png","percentage":"90%"},{"name":"Css","img":"../assets/download (2).png","percentage":"80%"},{"name":"Js","img":"../assets/images.png","percentage":"80%"},{"name":"Node","img":"../assets/download (6).png","percentage":"60%"},{"name":"React","img":"../assets/download (3).png","percentage":"40%"},{"name":"Sql","img":"../assets/download (7).png","percentage":"50%"},{"name":"Deluge","img":"../assets/download.png","percentage":"30%"},{"name":"Java","img":"../assets/images (2).png","percentage":"30%"},{"name":"Creator","img":"../assets/creator.png","percentage":"40%"}]

  return (
    <div className={`${Style.skillParent} ${Style.animationTop}`}>
          <div className={Style.headingWorkDiv}>
    <h1>Skills</h1>
    <div className={Style.borderAbout} style={{width:"8vw"}}></div>
    </div>
   
    <div  id={Style.projectContentApiSkill}>
      
    <div className={Style.scrollSkillDiv}>
{
skillDetails.map((ele,i)=>{
return(
  <div className={Style.nameH1}>
<div className={Style.projectContentSkill} key={i} style={{backgroundColor:ele.color}}>

     <div className={Style.ProfileImgSkill}>
        <img src={ele.img} className={Style.skillImg}/>
       
        
</div>

<div className={Style.percentageDiv}><b className={Style.percentage}>{ele.percentage}</b></div>

   </div>
   <h1>{ele.name}</h1>
   </div>
  
)
})}
</div>

</div>
</div>
  )
}

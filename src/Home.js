import React from 'react'
import Style from './App.module.css';
export default function Home() {
  return (
    <div className={Style.home}>
        <div className={Style.nameDiv}>
        <h1 className={Style.myName}>Parvathi Nathan S</h1>
        <p>I'm a frontend developer</p>
        </div>
    </div>
  )
}

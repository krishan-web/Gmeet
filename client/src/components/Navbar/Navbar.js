import React from 'react'
import style from './Navbar.module.css'
import MyLocation from './Location'

function Navbar() {
  return (
    <div>
       <div className={style.box}>
         <h2 className={style.h2}>BookUsNow</h2>
         <div className={style.box1}>
           <div className={style.categories}>
             <i className="fa-solid fa-bars"></i>
             <p>Categories</p> 
           </div>
           <div className={style.search}>
             <input type="search" style={{border:"0px", width:"95%",padding:"1.5%",outline:"none" }}/> 
             <i className="fa-solid fa-magnifying-glass" style={{width:"7%"}}></i> 
           </div>
         </div>
           <div className={style.Favorite}>
           <i class="fa-solid fa-heart"></i>
           <span>Favorites</span>
         </div>
         <div>
           <button className={style.sign}>Sign In</button>
         </div>
      </div> 
      <div className={style.box2}>
         <div className={style.location}><MyLocation/></div>
         <div className={style.category} >
            <span>Live shows</span>
            <span>Streams</span>
            <span>Movies</span>
            <span>Plays</span>
            <span>Events</span>
            <span>Sports</span>
            <span>Activities</span>
         </div>
      </div>
    </div>
  )
}

export default Navbar

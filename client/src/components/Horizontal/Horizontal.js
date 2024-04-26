import React, { useState,useEffect } from 'react'
import style from './Horizontal.module.css'
import banner from '../Image/Banner.svg'
import CardBox from '../CardBox/CardBox.js';
import axios from 'axios';

function Horizontal() {

  const [event,setEvent]=useState([]);

 useEffect( ()=>{
  const get= async()=>{
    const res= await axios("https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco");
    // const data=await res.json();
    // console.log(res.data.events[0]);
    const arr=res.data.events;
    // console.log(arr);
    setEvent(arr);

  }
  get();
 },[])
  console.log("My array :",event);
  return (
    <div>
       <div className={style.box}>
         <img src={banner} alt="error"/>
       <div className={style.content}>
           <h1 className={style.h1}> Discover Exciting Events Happening Near You - Stay Tuned for Updates!</h1>
           <span className={style.span}> Dorem ipsum dolor sit amet, consec tetur adipisicing elit. Nunc vulputate libero et velit interdium,
           <br/>ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
           </span>
       </div>
       <div className={style.box1}>
         <div className={style.shows}>
           <h3>Recommended shows</h3>
           <i className="fa-solid fa-arrow-right" style={{marginTop:"1.3%"}}></i>
          </div>
          <div><span className={style.spanAll}>See all</span></div>          
       </div>
      <div className={style.card}>
       {event.length>1?event.map((element,index) => {
         return <CardBox cityName={element.cityName} date={element.date} weather={element.weather} 
          distance={element.distanceKm} key={index} image={element.imgUrl} eventName={element.eventName}
         />
        }):"Loading"}
        </div>
        </div>
    </div>
  )
}

export default Horizontal

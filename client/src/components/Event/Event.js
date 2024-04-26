import React, { useEffect, useState } from 'react'
import style from './Event.module.css'
import axios from 'axios'
import InfiniteScroll from "react-infinite-scroll-component";
import CardEvent from '../CardEvent/CardEvent';

function Event() {

    const [event,setEvent]=useState([]);
    const [totalresults,setTotalResults]=useState(null);
    const [page,setPage]=useState(null);

    useEffect(()=>{
    
      const getdata=async(pageValue)=>{
        const res= await axios.get(`https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming`);
        // console.log(res.data.events);
        setEvent(res.data.events);
        setTotalResults(res.data.totalEvents);
        setPage(page+1);
        
      }

     getdata();
    },[])

    async function fetchMoreData(){
      
      const getdata=async(pageValue)=>{
        const res= await axios.get(`https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${pageValue}&type=upcoming`);
        setEvent(event.concat(res.data.events));
        setPage(page+1);
        console.log(res);
      }
      console.log("Event of my life",event);
       getdata(page+1);
    }

  return (
    <div className={style.Container}>
      <span className={style.box}>Upcoming Events<i className="fa-solid fa-arrow-right" ></i></span>
      <InfiniteScroll
          dataLength={event.length}
          next={fetchMoreData}
          hasMore={event.length!==totalresults}
          loader={<h4>Loading...</h4>}
        >
          <div style={{display:"flex",justifyContent:"space-around", flexWrap:"wrap"}}>
            {event.length>0?event.map((ele,index)=>{
                return <CardEvent image={ele.imgUr} key={index} distance={ele.distanceKm}
                        weather={ele.weather} cityName={ele.cityName} eventName={ele.eventName} />
          }):"Error"}
          </div>
          </InfiniteScroll>  
          
    </div>
  )
}

export default Event

import React from 'react'
import style from './CardEvent.module.css'
function CardEvent(props) {
    const {image,distance,eventName,cityName,weather,date}=props;
  return (    
    <div >
      <div className={style.Card1}>
          <img src="https://drive.google.com/file/d/1lS1XAo47YvNSoFp1NE5rmhTSQ8qNBWEh/view" alt="error"/>
          <span className={style.box}>{eventName}</span>
          <div className={style.box1}>
            <span>{cityName}</span>
             <div className={style.box2}>
              <span>{weather} |</span>
              <span>{Math.ceil(distance)}</span>
             </div>
          </div>
      </div>
    </div>
  )
}

export default CardEvent

import React from 'react'
import style from './CreateCard.module.css'
function CreateCard(props) {
  const {cityName,date,weather,distance,image,eventName}=props;
  // console.log("My image link is ",image);
  return (
    <div >
    <div className={style.Card1}>
        <img src={image} alt="error"/>
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

export default CreateCard

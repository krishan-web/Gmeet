
import React from 'react'
import CreateCard from '../CreateCard/CreateCard';

function CardBox(props) {

  const {eventName,date,distanceKm,weather,image,cityName}=props;

  return (
    <>
        <CreateCard name={eventName} date={date} distance={distanceKm} weather={weather} image={image} cityname={cityName} />
    </>
  )
}

export default CardBox


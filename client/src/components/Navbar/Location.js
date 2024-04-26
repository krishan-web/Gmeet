import React, { useState, useEffect } from 'react';
import axios from "axios";
//API key: fbb304a104bd477fc95ff7e16b11cdbd
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={fbb304a104bd477fc95ff7e16b11cdbd}
function MyLocation() {
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [city,setCity]=useState({cityname:"In",countryname:"In"});
  
  const getdata=async(lat,lon)=>{
        const res= await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fbb304a104bd477fc95ff7e16b11cdbd`,(e)=>console.log(e));
        console.log(res.data.name);  
        console.log(res.data.sys.country); 
        setCity(
            {
                cityname:res.data.name,
                countryname:res.data.sys.country
            }
        ); 
  }

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        getdata(position.coords.latitude,position.coords.longitude);
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
    
    // getdata(position.coords.latitude,position.coords.longitude);

  }, []);

  return (
    <div>
      {position.latitude && position.longitude ? (
        <div style={{display:"flex",flexDirection:"row",alignItems:"center",padding:"2px",justifyContent:"flex-start"}}>
          {/* Latitude: {position.latitude}, Longitude: {position.longitude} */}
          <i class="fa-solid fa-location-dot"> </i>
          <span>{city.cityname } ,{city.countryname}</span>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MyLocation;
import React from 'react'
import axios from "axios"
import './Home.css'
import Maploader from './Maploader';
import History from './History';


export default function Home() {
    const geoCode="https://maps.googleapis.com/maps/api/geocode/json?";
    const places="https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
    const API_KEY="AIzaSyAoHHaTxMhoWmEO2SrEDsFtvMcep7EWyMM"
    const [latitude,setLatitude]=React.useState('');
    const [longitude,setLongitude]=React.useState("");
    const [place,setPlace]=React.useState("");
    const [addressH,setAddressH]=React.useState("");
    React.useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position.coords);
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        })
    },[])

    const handleClick = (e) => {
        e.preventDefault();
        axios.get(`${geoCode}latlng=${latitude},${longitude}&key=${API_KEY}`)
        .then(res=>
            {
                console.log(res.data.results); 
                setAddressH(res.data);
                
            });
        
        console.log(addressH);
        axios.get(`https://cors-anywhere.herokuapp.com/${places}location=${latitude},${longitude}&radius=10000&type=restaurant&key=${API_KEY}`)
        .then(res=>
            {
                console.log(res.data.results);
                setPlace(res.data.results);
                console.log(place)
            });
      }

  //<Maploader lat={Number(latitude)} long={Number(longitude)}/>  /<Placesrender/>
   //<History/>
  return (
    <div className="flex-container">
        <button onClick={handleClick} className='button' title="Finds 20 restaurants closest to your location">Locate Restaurants</button>
       <div>
        <Maploader lat={Number(latitude)} lng={Number(longitude)} places={place}/>
       </div>
        
    </div>
  )
}

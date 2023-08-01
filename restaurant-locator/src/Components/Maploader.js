import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';


const containerStyle = {
  width: '400px',
  height: '400px'
};




function Maploader(props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAoHHaTxMhoWmEO2SrEDsFtvMcep7EWyMM"
  })
  console.log(props)
let itemList;
  if(props.places){
       console.log(props)
        itemList=props.places.map((item)=>{
            return <Marker position={item.geometry.location}></Marker>
        })
        }
  else{
    itemList=()=>{
             return(
           <div>Loading...</div>
        )
 }
}
  const center = {
    lat: props.lat,
    lng: props.lng
  };
  /*
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
*/
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        //onLoad={onLoad}
        //onUnmount={onUnmount}
      >
        <Marker position={center}></Marker>
        {itemList}
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Maploader)
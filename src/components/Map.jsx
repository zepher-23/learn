import React from 'react'
import { GoogleMap, LoadScript ,Marker} from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
  borderRadius:'20px'
};
const containerStyleMob = {
  width: '100vw',
  height: '460px',
  
}
  
const center = {
 
  lat:12.87312682497882, lng:74.85123385300423
};

function MyComponent({isMobile}) {
  return (
    <LoadScript googleMapsApiKey="AIzaSyA7x-BWZIYMBmoFTDxfI5pl6ZqY3QIUaao">
      <GoogleMap
        mapContainerStyle={isMobile ? containerStyleMob :containerStyle}
        center={center}
        zoom={18}
      >
               <Marker position={center} />

        <></>

      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)
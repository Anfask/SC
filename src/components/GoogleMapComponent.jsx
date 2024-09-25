// GoogleMapComponent.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 11.265668709111111, 
  lng: 75.77709855331584  
};

const position = {
  lat: 11.265668709111111, 
  lng: 75.77709855331584  
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyB3_n176MWS8ox5t-lSKCTXYeVb81ys384"> 
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        {/* Marker */}
        <Marker position={position} />
      </GoogleMap>
    </LoadScript>
  );
}


export default GoogleMapComponent;

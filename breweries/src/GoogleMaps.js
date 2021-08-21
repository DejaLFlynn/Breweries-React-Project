import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
const {googleMapsApiKey} = process.env;

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function GoogleMaps() {

   const secret = googleMapsApiKey
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: secret
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  

  return isLoaded ? (
    <GoogleMap
    onLoad={map => {
      const bounds = new window.google.maps.LatLngBounds();
      map.fitBounds(bounds);
    }}
    onUnmount={map => {
      // do your stuff before map is unmounted
    }}
  />
  
  ) : <></>
}

export default React.memo(GoogleMaps)

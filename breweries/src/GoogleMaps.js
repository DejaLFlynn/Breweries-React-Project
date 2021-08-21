import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMaps extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
  
      <div style={{ height: '25vh', width: '25%' }}>
        <GoogleMapReact
        //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMaps;

// import React, { useState, useEffect } from "react";
// import {
//   GoogleMap,
//   Marker,
//   InfoWindow
// } from "react-google-maps";
// // import * as parkData from "./data/skateboard-parks.json";
//  import mapStyles from "./mapStyles";

// function GoogleMaps({listBrew}) {
//   const [selectedBrewery, setSelectedBrewery] = useState(null);

//   useEffect(() => {
//     const listener = e => {
//       if (e.key === "Escape") {
//         setSelectedBrewery(null);
//       }
//     };
//     window.addEventListener("keydown", listener);

//     return () => {
//       window.removeEventListener("keydown", listener);
//     };
//   }, []);

//   return (
//     <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
//       defaultOptions={{ styles: mapStyles }}
//     >
//       {listBrew.map(park => (
//         <Marker
//           key={park.properties.PARK_ID}
//           position={{
//             lat: park.geometry.coordinates[1],
//             lng: park.geometry.coordinates[0]
//           }}
//           onClick={() => {
//             setSelectedBrewery(park);
//           }}
//           icon={{
//             url: ``,
//             scaledSize: new window.google.maps.Size(25, 25)
//           }}
//         />
//       ))}

//       {selectedBrewery && (
//         <InfoWindow
//           onCloseClick={() => {
//             setSelectedBrewery(null);
//           }}
//           position={{
//             lat: selectedBrewery.geometry.coordinates[1],
//             lng: selectedBrewery.geometry.coordinates[0]
//           }}
//         >
//           <div>
//             <h2>{selectedBrewery.properties.NAME}</h2>
//             <p>{selectedBrewery.properties.DESCRIPTIO}</p>
//           </div>
//         </InfoWindow>
//       )}
//     </GoogleMap>
//   );
// }
// export default GoogleMaps;

// const MapWrapped = withScriptjs(withGoogleMap(Map));

// export default function App() {
//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       <MapWrapped
//         googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
//           process.env.REACT_APP_GOOGLE_KEY
//         }`}
//         loadingElement={<div style={{ height: `100%` }} />}
//         containerElement={<div style={{ height: `100%` }} />}
//         mapElement={<div style={{ height: `100%` }} />}
//       />
//     </div>
//   );
// }

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text, listBrew }) => <div>{text}</div>;

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
          bootstrapURLKeys={{
             key: "AIzaSyByST46Pv18sO3NNIXStk7acWK2l75nTPQ" 
             
            }}
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


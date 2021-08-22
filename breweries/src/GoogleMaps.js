import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text, listBrew }) => <div>{text}</div>;

class GoogleMaps extends Component {
  static defaultProps = {
    center: {
      lat: 39.9648491,
      lng: -75.13506341,
    },
    zoom: 11,
  };

  render() {
    return (
      <div style={{ height: "50vh", width: "50%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyByST46Pv18sO3NNIXStk7acWK2l75nTPQ",
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={39.9648491}
            lng={-75.13506341}
            text="📍"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMaps;

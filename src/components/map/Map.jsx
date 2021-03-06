import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import './Map.scss'

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
       <div className="map" id="map">
      <Map 
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
    </div> 
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY_GOES_HERE'
})(MapContainer);
import React, { Component, useState } from 'react'
import Leaflet from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { MovingMarker } from './marker';

Leaflet.Icon.Default.imagePath =
    '../node_modules/leaflet'

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});



// export default class MapDisplay extends Component {
//     state = {
//         lat: 35.705413908738436,
//         lng: 51.387143908068545,
//         zoom: 20,
//     }









//     render() {
//         const position = [this.state.lat, this.state.lng]
//         return (
//             <MapContainer center={position} zoom={this.state.zoom} style={{ height: '100%' }}>
//                 <TileLayer
//                     attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />
//                 <MovingMarker />
//                 {/* <Marker position={position}>
//         <Popup>
//             Son Konum
//         </Popup>
//         </Marker> */}
//             </MapContainer>
//         )
//     }
// }


const MapDisplay = ({setposition,position}) => {
    // const [state, setstate] = useState(
    //     {
    //         lat: 35.705413908738436,
    //         lng: 51.387143908068545,
    //         zoom: 12,
    //     }
    // );
    console.log("position",position);

    let loc = [position.lat,position.lng]

    console.log("loc",loc);
    return (
        <MapContainer center={loc} zoom={position.zoom} style={{ height: '100%' }}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MovingMarker setposition={setposition} position={position}/>
            {/* <Marker position={position}>
            <Popup>
                Son Konum
            </Popup>
            </Marker> */}
        </MapContainer>
    )
}

export default MapDisplay;

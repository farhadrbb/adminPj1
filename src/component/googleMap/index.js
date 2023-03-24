import React, { Component, useMemo, useState } from 'react'
import Leaflet from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, CircleMarker, Tooltip, Circle, Polygon, Rectangle } from 'react-leaflet'
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


const MapDisplay = ({ setposition, position, shoab }) => {
    // const [state, setstate] = useState(
    //     {
    //         lat: 35.705413908738436,
    //         lng: 51.387143908068545,
    //         zoom: 12,function TooltipCircle() {

    const center = [35.725413908738436, 51.357143908068545]

    const multiPolygon = [
        [
            [35.725413908738436, 51.357143908068545],
            [35.735413908738436, 51.207143908068545],
            [35.755413908738436, 51.367143908068545],
        ],
        // [
        //     [51.51, -0.05],
        //     [51.51, -0.07],
        //     [51.53, -0.07],
        // ],
    ]

    const rectangle = [
        [35.775413908738436,51.377143908068545],
        [35.715413908738436, 51.337143908068545],
    ]


    function TooltipCircle() {
        const [clickedCount, setClickedCount] = useState(0)
        const eventHandlers = useMemo(
            () => ({
                click() {
                    setClickedCount((count) => count + 1)
                },
            }),
            [],
        )

        const clickedText =
            clickedCount === 0
                ? 'Click this Circle to change the Tooltip text'
                : `Circle click: ${clickedCount}`

        return (
            <Circle
                center={center}
                eventHandlers={eventHandlers}
                pathOptions={{ fillColor: 'blue' }}
                radius={3000}>
                <Tooltip>{clickedText}</Tooltip>
            </Circle>
        )
    }

    //     }
    // );
    console.log("position", position);

    let loc = [position.lat, position.lng]

    return (
        <MapContainer center={loc} zoom={position.zoom} style={{ height: '100%' }}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MovingMarker setposition={setposition} position={position} />
            {/* <CircleMarker
                center={[51.38, 35.70]}
                pathOptions={{ color: 'red' }}
                radius={20}>
                <Tooltip>Tooltip for CircleMarker</Tooltip>
            </CircleMarker> */}

            <TooltipCircle />

            <Polygon pathOptions={{ color: 'green'}} positions={multiPolygon} >
                <Tooltip sticky>sticky Tooltip for Polygon</Tooltip>
            </Polygon>
            <Rectangle bounds={rectangle} pathOptions={{ color: 'black' }}></Rectangle>
            <Marker position={{
                lat: 35.725413908738436,
                lng: 51.357143908068545,
                zoom: 12,
            }}>
                <Popup>
                    Son Konum
                </Popup>
            </Marker>

        </MapContainer>
    )
}

export default MapDisplay;

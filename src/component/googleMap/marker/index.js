import { useRef } from "react";
import { useState } from "react";
import { Marker, useMapEvent } from "react-leaflet";

export function MovingMarker() {
  const [position, setPosition] = useState({
    lat:35.705413908738436,
    lng: 51.387143908068545,
    zoom: 20,
  });
  console.log("position",position);
  const markerRef = useRef(null);
  const map = useMapEvent("click", (e) => {
    console.log("click");
    setPosition(e.latlng);
  });

  return <Marker position={position} ref={markerRef}></Marker>;
}

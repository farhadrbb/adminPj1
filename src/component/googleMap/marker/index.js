import { useRef } from "react";
import { useState } from "react";
import { Marker, useMapEvent } from "react-leaflet";

export function MovingMarker() {
  const [position, setPosition] = useState({
    lat: 50.257017,
    lng: 20.077524,
    zoom: 13,
  });
  console.log("position",position);
  const markerRef = useRef(null);
  const map = useMapEvent("click", (e) => {
    console.log("click");
    setPosition(e.latlng);
  });

  return <Marker position={position} ref={markerRef}></Marker>;
}

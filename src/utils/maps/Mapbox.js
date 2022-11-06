import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import supabase from "../../supabase/subabase";
import styles from "./maps.module.scss";

import Map, {
  GeolocateControl,
  Marker,
  NavigationControl,
  Source,
  Layer,
  Popup,
} from "react-map-gl/dist/es5";

const MapBox = () => {
  const map = useRef(null);
  const [center, setCenter] = React.useState({ lat: 0, lng: 0 });
  const [ambulances, setAmbulances] = React.useState(null);

  // useEffect(() => {
  //   map.current?.resize();
  // }, [map.current]);

  const getAmbulances = async () => {
    const patientInfo = await supabase.from("patients").select("*");
    setAmbulances(patientInfo.data);
    const obj = {
      lat: patientInfo.data[0].coordinates.latitude,
      lng: patientInfo.data[0].coordinates.longitude,
    };
    if (!(center.lat === obj.lat && center.lng === obj.lng)) {
      setCenter({
        lat: patientInfo.data[0].coordinates.latitude,
        lng: patientInfo.data[0].coordinates.longitude,
      });
    }
  };

  useEffect(() => {
    console.log("Center: ", center);
    if (center != null && map != null) {
      const b = 0.00051;
      const bounds = {
        north: -b + center.lat,
        south: b + center.lat,
        west: -b + center.lng,
        east: b + center.lng,
      };

      map.current?.fitBounds(
        [
          [bounds.east, bounds.south],
          [bounds.west, bounds.north],
        ],
        { padding: 10, duration: 1000 }
      );
      getAmbulances();
    }
    return () => {
      map.current?.resize();
      // navigator.geolocation.getCurrentPosition(success, error, options);
    };
  }, [center]);

  return (
    <div className={styles.mapContainer}>
      <Map
        mapboxAccessToken="pk.eyJ1IjoiZGhydXY0NzU4NiIsImEiOiJjbDIxbjFxdWQwMm90M2Vvb2s1cjg0YzUwIn0.dF0jG5YjBNyDYrWsa9j3HQ"
        ref={map}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        initialViewState={{
          latitude: center.lat,
          longitude: center.lng,
          zoom: 9,
        }}
        testMode={process.env.NODE_ENV === "development"}
        style={{ width: "100vw", height: "87vh" }}
      >
        <GeolocateControl position="bottom-left" />
        <NavigationControl
          showCompass={true}
          showZoom={true}
          position="bottom-left"
        />
        {ambulances &&
          ambulances.map((p) => (
            <Marker
              key={p.id}
              longitude={p.coordinates.longitude}
              latitude={p.coordinates.latitude}
            >
              <img src="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png" />
            </Marker>
          ))}
        {ambulances &&
          ambulances.map((p) => (
            <Popup
              key={p.id}
              longitude={p.coordinates.longitude}
              latitude={p.coordinates.latitude}
              anchor="top-left"
            >
              <b>ID:</b> {p.id} &nbsp; <b>Name: </b> {p.name}
              <br />
              <b>ETA:</b> {p.eta} &nbsp; <b>Dist: </b> {p.distance}
            </Popup>
          ))}
      </Map>
    </div>
  );
};

export default React.memo(MapBox);

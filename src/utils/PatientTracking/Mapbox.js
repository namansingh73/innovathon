import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import supabase from "../../supabase/subabase";
import styles from "./maps.module.scss";
import { useParams } from "react-router-dom";

import Map, {
  GeolocateControl,
  Marker,
  NavigationControl,
  Source,
  Layer,
  Popup,
} from "react-map-gl/dist/es5";

const MapBox = () => {
  const params = useParams();
  const map = useRef(null);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [operator, setOperator] = useState([
    {
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
  ]);
  const [currentLoc, setCurrentLoc] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    async function success(pos) {
      const crd = pos.coords;
      const coordinates = {
        latitude: crd.latitude,
        longitude: crd.longitude,
      };
      const patient = await supabase
        .from("patients")
        .update({ coordinates })
        .eq("id", params.id);

      setCurrentLoc({
        lat: coordinates.latitude,
        lng: coordinates.longitude,
      });
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    const id = navigator.geolocation.watchPosition(success, error, options);

    return () => {
      navigator.geolocation.clearWatch(id);
    };
  }, []);

  const getOperator = async () => {
    const operatorInfo = await supabase
      .from("operator")
      .select("*")
      .eq("id", params.id);

    setOperator(operatorInfo.data);

    const obj = {
      lat: operatorInfo.data[0].coordinates.latitude,
      lng: operatorInfo.data[0].coordinates.longitude,
    };
    if (!(center.lat === obj.lat && center.lng === obj.lng)) {
      setCenter({
        lat: operatorInfo.data[0].coordinates.latitude,
        lng: operatorInfo.data[0].coordinates.longitude,
      });
    }
  };

  function getDistanceFromLatLonInM(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1); // deg2rad below
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return parseInt(d);
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

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
      getOperator();
    }
  }, [center]);

  return (
    <div className={styles.mapContainer}>
      <Map
        mapboxAccessToken="pk.eyJ1IjoiZGhydXY0NzU4NiIsImEiOiJjbDIxbjFxdWQwMm90M2Vvb2s1cjg0YzUwIn0.dF0jG5YjBNyDYrWsa9j3HQ"
        ref={map}
        // maxBounds={[
        //   [currentLoc.lng, currentLoc.lat],
        //   [operator[0].coordinates.longitude, operator[0].coordinates.latitude],
        // ]}
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
        <Marker longitude={currentLoc.lng} latitude={currentLoc.lat}>
          <img src="https://res.cloudinary.com/dnzuzshzs/image/upload/v1667763676/innovathon/location-removebg-preview_1_l3nv3u.png" />
        </Marker>
        <Popup
          longitude={currentLoc.lng}
          latitude={currentLoc.lat}
          anchor="top-left"
        >
          You are here
        </Popup>
        {operator &&
          operator.map((p) => (
            <Marker
              key={p.id}
              longitude={p.coordinates.longitude}
              latitude={p.coordinates.latitude}
            >
              <img src="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png" />
            </Marker>
          ))}
        {operator &&
          operator.map((p) => (
            <Popup
              key={p.id}
              longitude={p.coordinates.longitude}
              latitude={p.coordinates.latitude}
              anchor="top-left"
            >
              <b>ID:</b> {p.id} &nbsp; <b>Name: </b> {p.name}
              <br />
              <b>ETA:</b>{" "}
              {parseInt(
                (getDistanceFromLatLonInM(
                  currentLoc.lat,
                  currentLoc.lng,
                  p.coordinates.latitude,
                  p.coordinates.longitude
                ) *
                  120) /
                  35
              )}{" "}
              mins &nbsp; <b>Dist: </b>{" "}
              {getDistanceFromLatLonInM(
                currentLoc.lat,
                currentLoc.lng,
                p.coordinates.latitude,
                p.coordinates.longitude
              ) * 1.5}{" "}
              km
            </Popup>
          ))}
      </Map>
    </div>
  );
};

export default React.memo(MapBox);

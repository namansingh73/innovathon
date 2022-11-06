import React from "react";
import Navbar from "../../../pages/patient/Navbar/Navbar";
import Mapbox from "../../../utils/PatientTracking/Mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./TrackAmbulance.module.css";

const TrackAmbulance = () => {
  return (
    <div className={styles.mapContainer}>
      <Navbar />
      <Mapbox />
    </div>
  );
};

export default TrackAmbulance;

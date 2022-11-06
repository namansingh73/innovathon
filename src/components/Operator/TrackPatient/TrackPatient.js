import React from "react";
import Navbar from "../../../pages/operator/Navbar/Navbar";
import Mapbox from "../../../utils/OperatorTracking/Mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./TrackPatient.module.css";

const TrackPatient = () => {
  return (
    <div className={styles.mapContainer}>
      <Navbar />
      <Mapbox />
    </div>
  );
};

export default TrackPatient;

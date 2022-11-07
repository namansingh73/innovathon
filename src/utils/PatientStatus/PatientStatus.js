import React, { useState, useEffect } from "react";
import styles from "./PatientStatus.module.css";
// import Button from "../../../utils/Button/Button";
import PatientLogo from "../Images/patient.jpg";

const PatientStatus = (props) => {
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

  const { id, name, age, riskFactor, note, gender, coordinates } =
    props.patient;
  console.log(props.patient);
  let riskVar = styles.high;
  let riskIcon = "fas fa-radiation-alt";
  if (riskFactor === "Low") {
    riskVar = styles.low;
    riskIcon = "fas fa-check";
  } else if (riskFactor === "Medium") {
    riskVar = styles.medium;
    riskIcon = "fas fa-exclamation-triangle";
  }

  return (
    <div className={styles.outerContainer}>
      <div className={styles.companyInfo}>
        <img src={PatientLogo} alt="..." className={styles.companyImg} />
        <div className={styles.innerContainer}>
          <div className={styles.nameMottoCnt}>
            <span className={styles.companyName}>ID: {id}</span>
            <span className={styles.companyMoto}>Name: {name}</span>
            <span className={styles.companyMoto}>Age: {age}</span>
            <span className={styles.companyEmployeesCnt}>
              Gender: <i className="fas fa-male"></i> {gender}
            </span>
            <span className={styles.companyMoto}>
              ETA:{" "}
              {parseInt(
                (getDistanceFromLatLonInM(
                  currentLoc.lat,
                  currentLoc.lng,
                  coordinates.latitude,
                  coordinates.longitude
                ) *
                  120) /
                  35
              )}{" "}
              mins
            </span>
          </div>
          <div className={styles.jobStatusOuter}>
            <span className={`${styles.jobStatus} ${riskVar}`}>
              <span className={styles.jobStatusCircle}>
                <i className={riskIcon}></i>
              </span>
              <span className={styles.jobStatusText}>
                Risk Factor: {riskFactor}
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.jobDescriptionApplication}>
        <div className={styles.jobDescription}>
          <div className={styles.salary}>Note: {note}</div>
        </div>
        {/* <div className={styles.saveApply}>
          <span className={styles.postedDate}>postedDate</span> */}
        {/* <Button
            white
            className={styles.btn}
            onClick={() => props.toggleSaveHandler(id)}
          >
            {saved ? "Remove" : "Save"}
          </Button>
          <Button
            black
            className={styles.btn}
            onClick={() => props.applyHandler(id)}
          >
            {applied ? (
              <Fragment>
                <i className="fas fa-check"></i>
                Applied{" "}
              </Fragment>
            ) : (
              "Apply"
            )}
          </Button> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default PatientStatus;

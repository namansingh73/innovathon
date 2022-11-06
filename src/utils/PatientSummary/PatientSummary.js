import React from "react";
import styles from "./PatientSummary.module.css";
import PatientStatus from "../PatientStatus/PatientStatus";
import { useEffect, useState } from "react";
import supabase from "../../supabase/subabase";

const PatientSummary = () => {
  const [patients, setPatients] = useState(null);
  useEffect(() => {
    const getPatients = async () => {
      const { data } = await supabase.from("patients").select("*");
      setPatients(data);
    };
    getPatients();
    // eslint-disable-next-line
  }, []);
  return (
    <div className={styles.outerContainer}>
      {patients &&
        patients.map((patient) => {
          return <PatientStatus patient={patient} key={patient.id} />;
        })}
    </div>
  );
};

export default PatientSummary;

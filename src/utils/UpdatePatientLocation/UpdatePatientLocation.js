import React from "react";
import styles from "./UpdatePatientLocation.module.css";
import LocationForm from "../LocationForm/LocationForm";

const UpdatePatientLocation = () => {
  // const [patients, setPatients] = useState(null);
  // useEffect(() => {
  //   const getPatients = async () => {
  //     const { data } = await supabase.from("patients").select("*");
  //     setPatients(data);
  //   };
  //   getPatients();
  //   // eslint-disable-next-line
  // }, []);
  return (
    <div className={styles.outerContainer}>
      <LocationForm />
    </div>
  );
};

export default UpdatePatientLocation;

import React from "react";
import styles from "./UpdateOperatorLocation.module.css";
import OperatorLocationForm from "../OperatorLocationForm/OperatorLocationForm";

const UpdateOperatorLocation = () => {
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
      <OperatorLocationForm />
    </div>
  );
};

export default UpdateOperatorLocation;

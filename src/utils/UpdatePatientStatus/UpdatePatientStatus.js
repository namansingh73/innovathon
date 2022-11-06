import React from "react";
import styles from "./UpdatePatientStatus.module.css";
import UpdateForm from "../UpdateForm/UpdateForm";

const UpdatePatientStatus = () => {
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
      <UpdateForm />
    </div>
  );
};

export default UpdatePatientStatus;

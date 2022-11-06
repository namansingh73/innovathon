import React from "react";
import styles from "./CreateEvent.module.css";
import EventForm from "../EventForm/EventForm";

const CreateEvent = () => {
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
      <EventForm />
    </div>
  );
};

export default CreateEvent;

import React from "react";
import styles from "./PatientEvents.module.css";
import SingleEvent from "../SingleEvent/SingleEvent";
import { useEffect, useState } from "react";
import supabase from "../../supabase/subabase";

const PatientEvents = () => {
  const [events, setEvents] = useState(null);
  useEffect(() => {
    const getEvents = async () => {
      const { data } = await supabase.from("events").select("*");
      setEvents(data);
    };
    getEvents();
    // eslint-disable-next-line
  }, []);
  return (
    <div className={styles.outerContainer}>
      {events &&
        events.map((event) => {
          return <SingleEvent event={event} key={event.id} />;
        })}
    </div>
  );
};

export default PatientEvents;

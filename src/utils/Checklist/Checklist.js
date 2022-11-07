import React from "react";
import styles from "./Checklist.module.css";
import ChecklistItem from "../ChecklistItem/ChecklistItem";
import first from "../Images/first.webp";
import second from "../Images/second.webp";
import third from "../Images/third.png";
import fourth from "../Images/fourth.png";
import fifth from "../Images/fifth.png";

const Checklist = () => {
  return (
    <div className={styles.outerContainer}>
      <ChecklistItem
        text="Is the area around you and the patient safe?"
        number="1"
        imageIcon={first}
      />
      <ChecklistItem
        text="Is the area around you and the patient safe?"
        number="2"
        imageIcon={second}
      />
      <ChecklistItem
        text="Is the area around you and the patient safe?"
        number="3"
        imageIcon={third}
      />
      <ChecklistItem
        text="Is the area around you and the patient safe?"
        number="4"
        imageIcon={fourth}
      />
      <ChecklistItem
        text="Is the area around you and the patient safe?"
        number="5"
        imageIcon={fifth}
      />
    </div>
  );
};

export default Checklist;

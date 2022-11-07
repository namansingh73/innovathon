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
        yes="Yes, I will proceed to the next step."
        no="No, I will move the patient to the nearest safe area."
        number="1"
        imageIcon={first}
      />
      <ChecklistItem
        text="Is the casuality responsive?"
        yes="Yes, the casuality can gesture or talk."
        no="No, I need to act more urgently."
        number="2"
        imageIcon={second}
      />
      <ChecklistItem
        text="Is the causalty's airway open and clear?"
        secondText="Method for checking: Open the airway by placing one hand on the forehead to tilt the head back and use two fingers from the other hand to lift the chin."
        yes="Yes, it is open and clear."
        no="No, move to next step asap."
        number="3"
        imageIcon={third}
      />
      <ChecklistItem
        text="Is the area around you and the patient safe?"
        secondText="Method for checking: Place your ear above their mouth, looking down their body. Listen for sounds of breathing and see if you can feel their breath on your cheek."
        yes="Yes, they are breathing normally. Proceed to next step."
        no="No, start CPR urgently."
        number="4"
        imageIcon={fourth}
      />
      <ChecklistItem
        text="Is the area around you and the patient safe?"
        yes="Yes, control bleeding by applying direct pressure to wound."
        no="No, put them in the recovery position."
        number="5"
        imageIcon={fifth}
      />
    </div>
  );
};

export default Checklist;

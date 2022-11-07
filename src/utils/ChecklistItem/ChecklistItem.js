import React from "react";
import styles from "./ChecklistItem.module.css";
// import Button from "../../../utils/Button/Button";
import ChecklistRadioButton from "../ChecklistRadioButton/ChecklistRadioButton";

const ChecklistItem = (props) => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.companyInfo}>
        <div className={styles.numberContainer}>
          <h2 className={styles.numbers}>{props.number}</h2>
        </div>
        <div className={styles.innerContainer}>
          <div className={styles.nameMottoCnt}>
            <span className={styles.companyName}>{props.text}</span>
            <span className={styles.companyName}>{props.secondText}</span>
          </div>
          <img
            src={props.imageIcon}
            alt="iconImage"
            className={styles.checklistIcon}
          />
        </div>
      </div>
      <ChecklistRadioButton yes={props.yes} no={props.no} />
    </div>
  );
};

export default ChecklistItem;

import React from "react";
import styles from "./SingleEvent.module.css";
// import Button from "../../../utils/Button/Button";
import PatientLogo from "../Images/patient.jpg";

const SingleEvent = (props) => {
  const { id, title, date, timing, note, venue } = props.event;

  return (
    <div className={styles.outerContainer}>
      <div className={styles.companyInfo}>
        <img src={PatientLogo} alt="..." className={styles.companyImg} />
        <div className={styles.innerContainer}>
          <div className={styles.nameMottoCnt}>
            <span className={styles.companyName}>Title: {title}</span>
            <span className={styles.companyMoto}>
              Date / Time: {date} / {timing}
            </span>
            <span className={styles.companyEmployeesCnt}>
              Venue: <i className="fas fa-male"></i> {venue}
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

export default SingleEvent;

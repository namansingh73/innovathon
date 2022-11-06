import React from "react";
import styles from "./PatientStatus.module.css";
// import Button from "../../../utils/Button/Button";
import PatientLogo from "../Images/patient.jpg";

const JobCard = (props) => {
  const { id, name, age, riskFactor, note, gender } = props.patient;
  let riskVar = styles.high;
  let riskIcon = "fas fa-radiation-alt";
  if (riskFactor === "Low") {
    riskVar = styles.low;
    riskIcon = "fas fa-check";
  } else if (riskFactor === "Medium") {
    riskVar = styles.medium;
    riskIcon = "fas fa-exclamation-triangle";
  }

  return (
    <div className={styles.outerContainer}>
      <div className={styles.companyInfo}>
        <img src={PatientLogo} alt="..." className={styles.companyImg} />
        <div className={styles.innerContainer}>
          <div className={styles.nameMottoCnt}>
            <span className={styles.companyName}>ID: {id}</span>
            <span className={styles.companyMoto}>Name: {name}</span>
            <span className={styles.companyMoto}>Age: {age}</span>
            <span className={styles.companyEmployeesCnt}>
              Gender: <i className="fas fa-male"></i> {gender}
            </span>
          </div>
          <div className={styles.jobStatusOuter}>
            <span className={`${styles.jobStatus} ${riskVar}`}>
              <span className={styles.jobStatusCircle}>
                <i className={riskIcon}></i>
              </span>
              <span className={styles.jobStatusText}>
                Risk Factor: {riskFactor}
              </span>
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

export default JobCard;

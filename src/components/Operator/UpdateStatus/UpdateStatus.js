import React from "react";
import Navbar from "../../../pages/operator/Navbar/Navbar";
import UpdatePatientStatus from "../../../utils/UpdatePatientStatus/UpdatePatientStatus";

const UpdateStatus = () => {
  return (
    <div>
      <Navbar />
      <UpdatePatientStatus />
    </div>
  );
};

export default UpdateStatus;

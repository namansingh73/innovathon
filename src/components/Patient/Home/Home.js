import React from "react";
import Navbar from "../../../pages/patient/Navbar/Navbar";
import UpdatePatientLocation from "../../../utils/UpdatePatientLocation/UpdatePatientLocation";

const Home = () => {
  return (
    <div>
      <Navbar />
      <UpdatePatientLocation />
    </div>
  );
};

export default Home;

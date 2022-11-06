import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../utils/Input/Input";
import Button from "../../utils/Button/Button";
import styles from "./LocationForm.module.css";
import supabase from "../../supabase/subabase";

const LocationForm = () => {
  const [Id, setId] = useState("");
  const navigate = useNavigate();
  const submitHandler = async (event) => {
    event.preventDefault();
    navigate(`/patient/track/${Id}`);
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        label="ID*"
        id="id"
        type="text"
        placeholder="Id"
        name="Id"
        required
        onChange={(event) => setId(event.target.value)}
        value={Id}
      />

      <Button className={styles.classLinkBtn} rounded fullWidth>
        Update Location
      </Button>
    </form>
  );
};

export default LocationForm;

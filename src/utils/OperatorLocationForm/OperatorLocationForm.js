import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from "./OperatorLocationForm.module.css";

const LocationForm = () => {
  const [Id, setId] = useState("");
  const navigate = useNavigate();
  const submitHandler = async (event) => {
    event.preventDefault();
    navigate(`/operator/track/${Id}`);
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

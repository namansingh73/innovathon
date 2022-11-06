import React, { useState } from "react";
import Input from "../../utils/Input/Input";
import Button from "../../utils/Button/Button";
import styles from "./LocationForm.module.css";
import supabase from "../../supabase/subabase";

const LocationForm = () => {
  const [Id, setId] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    async function success(pos) {
      const crd = pos.coords;
      const coordinates = {
        latitude: crd.latitude,
        longitude: crd.longitude,
      };
      const patient = await supabase
        .from("patients")
        .update({ coordinates })
        .eq("id", Id);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    navigator.geolocation.getCurrentPosition(success, error, options);
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

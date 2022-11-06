import React, { useState } from "react";
import Input from "../../utils/Input/Input";
import Button from "../../utils/Button/Button";
import styles from "./UpdateForm.module.css";
import RowRadioButtonsGroup from "../RadioButton/RadioButton";
import supabase from "../../supabase/subabase";

const UpdateForm = () => {
  const [Id, setId] = useState("");
  const [note, setNote] = useState("");
  const [risk, setRisk] = useState("");
  const submitHandler = async (event) => {
    event.preventDefault();
    const patient = await supabase
      .from("patients")
      .update({ note, riskFactor: risk })
      .eq("id", Id);
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

      <Input
        label="Note*"
        id="note"
        type="note"
        placeholder="write a note"
        name="note"
        required
        onChange={(event) => setNote(event.target.value)}
        value={note}
      />
      <RowRadioButtonsGroup setRisk={setRisk} />
      <Button className={styles.classLinkBtn} rounded fullWidth>
        Send Update
      </Button>
    </form>
  );
};

export default UpdateForm;

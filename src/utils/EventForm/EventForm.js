import React, { useState } from "react";
import Input from "../../utils/Input/Input";
import Button from "../../utils/Button/Button";
import styles from "./EventForm.module.css";
import supabase from "../../supabase/subabase";

const EventForm = () => {
  const [title, setTitle] = useState("");
  const [timing, setTiming] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [venue, setVenue] = useState("");
  const submitHandler = async (event) => {
    event.preventDefault();
    const { data, error } = await supabase
      .from("events")
      .insert([{ title, timing, venue, note, date }]);
    console.log(data);
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        label="Title*"
        id="tile"
        type="text"
        placeholder="title"
        name="title"
        required
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />

      <Input
        label="Timing*"
        id="timing"
        type="text"
        placeholder="timing"
        name="timing"
        required
        onChange={(event) => setTiming(event.target.value)}
        value={timing}
      />
      <Input
        label="Date*"
        id="date"
        type="text"
        placeholder="date"
        name="date"
        required
        onChange={(event) => setDate(event.target.value)}
        value={date}
      />
      <Input
        label="Venue*"
        id="venue"
        type="venue"
        placeholder="venue"
        name="venue"
        required
        onChange={(event) => setVenue(event.target.value)}
        value={venue}
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
      <Button className={styles.classLinkBtn} rounded fullWidth>
        Post Event
      </Button>
    </form>
  );
};

export default EventForm;

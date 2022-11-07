import * as React from "react";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import styles from "./ChecklistRadioButton.module.css";

const ChecklistRadioButton = (props) => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className={styles.formControl}>
      <FormControl>
        <FormLabel
          id="demo-row-radio-buttons-group-label"
          className={styles.formLabel}
        ></FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="Yes"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
            }
            label={<span className={styles.formLabel}>Yes</span>}
          />
          <FormControlLabel
            value="No"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
            }
            label={<span className={styles.formLabel}>No</span>}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default ChecklistRadioButton;

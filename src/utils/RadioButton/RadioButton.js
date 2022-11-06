import * as React from "react";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import styles from "./RadioButton.module.css";

const RowRadioButtonsGroup = (props) => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
    props.setRisk(event.target.value);
  };
  return (
    <div className={styles.formControl}>
      <FormControl>
        <FormLabel
          id="demo-row-radio-buttons-group-label"
          className={styles.formLabel}
        >
          Risk Factor*
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="Low"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
            }
            label={<span className={styles.formLabel}>Low</span>}
          />
          <FormControlLabel
            value="Medium"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
            }
            label={<span className={styles.formLabel}>Medium</span>}
          />
          <FormControlLabel
            value="High"
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
            }
            label={<span className={styles.formLabel}>High</span>}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default RowRadioButtonsGroup;

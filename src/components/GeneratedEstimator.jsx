import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const GeneratedEstimator = ({ estimatorConfig, setCalculation }) => {
  const parameters = estimatorConfig.parameters;
  console.log("Rendering input parameters", parameters);
  const handleChange = (key, value) => {
    console.log("Changing input", key, value);

    //for that field, set all selected options to false and toggle the selected to true
    const newEstimatorConfig = { ...estimatorConfig };

    newEstimatorConfig.parameters[key].values.map((v) => {
      v.selected = false;
      console.log(
        "v",
        v,
        newEstimatorConfig.parameters[key].values.filter(
          (f) => f.inputFactor == v.inputFactor
        )[0].selected
      );
      if (v.inputFactor == value && key == newEstimatorConfig.parameters[key]) {
        console.log("Found match");
        /*newEstimatorConfig.parameters[key].values.filter(
          (f) => f.inputFactor == v.inputFactor
        )[0].selected = true;*/
      }
    });

    console.log("Updated estimator config", newEstimatorConfig);
    //setCalculation(newEstimatorConfig);
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        {estimatorConfig.flavour}
      </Typography>
      <div>
        {Object.entries(parameters).map(([field, data]) => (
          <FormControl key={field} fullWidth style={{ marginBottom: "16px" }}>
            <InputLabel id="demo-simple-select-standard-label">
              {data.label}
            </InputLabel>
            <Select
              sx={{ fontPalette: "black" }}
              labelId={`${field}-label`}
              label={data.label}
              value={data.values.filter((d) => d.selected)[0].inputFactor}
              onChange={(e) => handleChange(field, e.target.value)}
            >
              {data.values.map((option, index) => (
                <MenuItem key={index} value={option.inputFactor}>
                  {option.inputFactor}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}
      </div>
    </div>
  );
};

export default GeneratedEstimator;

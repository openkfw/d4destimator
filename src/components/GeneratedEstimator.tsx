import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import runEngine from "../utils/runEngine";

const GeneratedEstimator = ({ estimatorConfig, setCalculation }:{estimatorConfig:any, setCalculation:any}) => {
  const parameters = estimatorConfig.parameters;
  console.log("Rendering input parameters", parameters);
  const handleChange = (key:any, value:any) => {
    console.log("Changing input", key, value); //e.g. users, 50+

    //for that field, set all selected options to false and toggle the selected to true
    const newEstimatorConfig = { ...estimatorConfig };

    newEstimatorConfig.parameters[key].values.map((v:any) => {
      console.log("Changing this field", v);
      v.selected = false;
      if (v.inputFactor == value) {
        console.log("Found match", v);
        v.selected = true;
      }
    });

    console.log("Updated estimator config", newEstimatorConfig);

    setCalculation(runEngine(newEstimatorConfig));
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        {estimatorConfig.flavour} parameters
      </Typography>
      <div>
        {Object.entries(parameters).map(([field, data]: [string, any]) => (
          <FormControl key={field} fullWidth style={{ marginBottom: "16px" }}>
            <InputLabel id="demo-simple-select-standard-label">
              {data.label}
            </InputLabel>
            <Select
              sx={{ fontPalette: "black" }}
              labelId={`${field}-label`}
              label={data.label}
              value={data.values.filter((d:any) => d.selected)[0].inputFactor}
              onChange={(e) => handleChange(field, e.target.value)}
            >
              {data.values.map((option:any, index:any) => (
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

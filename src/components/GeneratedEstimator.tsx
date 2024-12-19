import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import runEngine from "../utils/runEngine";
import { EstimatorConfig } from "../types/estimatorConfigType";

interface GeneratedConstantsProps {
  estimatorConfig: EstimatorConfig;
  setCalculation: Dispatch<SetStateAction<EstimatorConfig>>;
}

const GeneratedEstimator: React.FC<GeneratedConstantsProps> = ({
  estimatorConfig,
  setCalculation,
}) => {
  const parameters = estimatorConfig.parameters;
  console.log("Rendering input parameters", parameters);
  const handleChange = (key: string, value: string) => {
    console.log("Changing input", key, value); //e.g. users, 50+

    //for that field, set all selected options to false and toggle the selected to true
    const newEstimatorConfig = { ...estimatorConfig };

    newEstimatorConfig.parameters[key].values.forEach((v) => {
      console.log("Changing this field", v);
      v.selected = false;
      if (v.inputFactor === value) {
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

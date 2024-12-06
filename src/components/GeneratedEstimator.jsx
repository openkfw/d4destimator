import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import runEngine from "../utils/runEngine";

const GeneratedEstimator = ({ estimatorConfig }) => {
  const [inputParameters, setInputParameters] = useState(
    estimatorConfig.parameters,
  );

  const handleChange = (event) => {
    //testing engine
  };

  const dropdownItems = ["Placeholder 1", "Placeholder 2", "Placeholder 3"];
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        {estimatorConfig.flavour}
      </Typography>
      {inputParameters.users.values.map((value, index) => (
        <FormControl key={index} style={{ margin: "10px", minWidth: 200 }}>
          <InputLabel id={`dropdown-label-${index}`}>
            Select Input Factor
          </InputLabel>
          <Select
            labelId={`dropdown-label-${index}`}
            value={"placeholder"}
            onChange={handleChange(index)}
          >
            {inputParameters.users.values.map((option, optionIndex) => (
              <MenuItem key={optionIndex} value={option.inputFactor}>
                {option.inputFactor}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
    </Box>
  );
};

export default GeneratedEstimator;

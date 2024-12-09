import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import Slider from "@mui/material/Slider";
import { useState } from "react";
import runEngine from "../utils/runEngine";

const GeneratedConstants = ({ estimatorConfig, setCalculation }: any) => {
  const handleChange = (event: Event, newValue: number | number[]) => {
    const newConfig = { ...estimatorConfig };
    newConfig.constants.dailyrate.value = newValue;

    setCalculation(runEngine(newConfig));
  };
  function valuetext(value: number) {
    return `${value}`;
  }

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        {estimatorConfig.flavour} settings
      </Typography>
      <Typography>
        Daily rate: {estimatorConfig.constants.dailyrate.value}
      </Typography>
      <Slider
        aria-label="Rate"
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        value={estimatorConfig.constants.dailyrate.value}
        onChange={handleChange}
        shiftStep={30}
        step={100}
        marks
        min={100}
        max={2000}
      />
      <Typography>Run percentage</Typography>
      <Typography>TCO duration</Typography>
      <div></div>
    </div>
  );
};

export default GeneratedConstants;

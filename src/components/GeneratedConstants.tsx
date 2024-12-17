import { Typography } from "@mui/material";

import Slider from "@mui/material/Slider";
import React from "react";
import runEngine from "../utils/runEngine";

const GeneratedConstants = ({ estimatorConfig, setCalculation }: any) => {
  const handleChange =
    (id: string) => (event: Event, newValue: number | number[]) => {
      //console.log("Handle change for", id);
      const newConfig = { ...estimatorConfig };
      switch (id) {
        case "rate":
          newConfig.constants.dailyrate.value = newValue;
          break;

        case "runPercentage":
          newConfig.constants.runcosts.value =
            parseFloat(newValue as any) / 100;
          break;

        case "tcoDuration":
          newConfig.constants.tcoduration.value = newValue;
          break;

        default:
          console.log("Unknown parameter");
          // Handle any other cases or errors
          break;
      }

      setCalculation(runEngine(newConfig));
    };
  function valuetext(value: number) {
    return `${value}`;
  }

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        {estimatorConfig.flavour} estimator settings
      </Typography>
      <Typography>
        Daily rate: {estimatorConfig.constants.dailyrate.value}
      </Typography>
      <Slider
        aria-label="Rate"
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        value={estimatorConfig.constants.dailyrate.value}
        onChange={handleChange("rate")}
        shiftStep={30}
        step={100}
        marks
        min={100}
        max={2000}
      />
      <Typography>
        Run percentage: {estimatorConfig.constants.runcosts.value * 100} %
      </Typography>
      <Slider
        aria-label="Rate"
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        value={estimatorConfig.constants.runcosts.value * 100}
        onChange={handleChange("runPercentage")}
        shiftStep={4}
        step={5}
        marks
        min={0}
        max={100}
      />
      <Typography>
        TCO duration: {estimatorConfig.constants.tcoduration.value}
      </Typography>
      <Slider
        aria-label="Rate"
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        value={estimatorConfig.constants.tcoduration.value}
        onChange={handleChange("tcoDuration")}
        shiftStep={1}
        step={1}
        marks
        min={1}
        max={10}
      />
      <div></div>
    </div>
  );
};

export default GeneratedConstants;

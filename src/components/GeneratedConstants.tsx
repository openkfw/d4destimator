import { Typography } from "@mui/material";

import Slider from "@mui/material/Slider";
import React from "react";

import runEngine from "../utils/runEngine";
import { GeneratedConstantsProps } from "../types/estimatorConfigType";

const GeneratedConstants: React.FC<GeneratedConstantsProps> = ({
  estimatorConfig,
  setCalculation,
}) => {
  const handleChange =
    (id: string) => (event: Event, newValue: number | number[]) => {
      const newConfig = { ...estimatorConfig };
      switch (id) {
        case "rate":
          if (Array.isArray(newValue)) {
            throw new Error("newValue should be a number, not an array");
          }
          newConfig.constants.dailyrate.value = newValue;
          break;

        case "runPercentage":
          if (Array.isArray(newValue)) {
            throw new Error("newValue should be a number, not an array");
          }
          // Quick fix: round the percentage to 2 decimals when storing to reduce
          // floating-point artifacts (e.g. 55.00000000000001)
          // newValue is expected as 0..100 (slider), store as fraction 0..1
          newConfig.constants.runcosts.value = Math.round(newValue as number) / 100;
          break;

        case "tcoDuration":
          if (Array.isArray(newValue)) {
            throw new Error("newValue should be a number, not an array");
          }
          newConfig.constants.tcoduration.value = newValue;
          break;

        case "licenceFee":
          if (Array.isArray(newValue)) {
            throw new Error("newValue should be a number, not an array");
          }
          newConfig.constants.licensefee.value = newValue;
          break;

        default:
          console.log("Unknown parameter");
          // Handle any other cases or errors
          break;
      }

      setCalculation(runEngine(newConfig));
    };
  function valuetext(value: number) {
    return `${value} %`;
  }

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        {estimatorConfig.flavour} estimator settings
      </Typography>
      <Typography>
       {estimatorConfig.constants.dailyrate.label}: {estimatorConfig.constants.dailyrate.value}
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
      
      {/* Licence Fee Slider */}
      <Typography>
        {estimatorConfig.constants.licensefee.label}: {estimatorConfig.constants.licensefee.value}
      </Typography>
      <Slider
        aria-label="Licence Fee"
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        value={estimatorConfig.constants.licensefee.value}
        onChange={handleChange("licenceFee")}
        shiftStep={10}
        step={25}
        marks
        min={0}
        max={500}
      />
      
      <Typography>
        Run percentage: {(estimatorConfig.constants.runcosts.value * 100).toFixed(2)} %
      </Typography>
      <Slider
        aria-label="Run Percentage"
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        // Ensure slider sees a clean numeric value (rounded to nearest integer percent)
        value={Math.round(estimatorConfig.constants.runcosts.value * 100)}
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

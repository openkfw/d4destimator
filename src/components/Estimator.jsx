import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const Estimator = (props) => {
  const [formValues, setFormValues] = React.useState({
    localNodes: "",
    users: "",
    connectedSystems: "",
    userProvisioning: "",
    organizationalComplexity: "",
    cybersecuritySetup: "",
    infrastructureLocation: "",
    costPerPersonDay: "",
    runCosts: "",
    hardwareCosts: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const dropdownItems = ["Placeholder 1", "Placeholder 2", "Placeholder 3"];
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Cost estimator configuration Form
      </Typography>
      {Object.keys(formValues).map((key) => (
        <FormControl fullWidth sx={{ marginBottom: 2 }} key={key}>
          <InputLabel>
            {key
              .replace(/([A-Z])/g, " $1")
              .replace(/^\w/, (c) => c.toUpperCase())}
          </InputLabel>
          <Select name={key} value={formValues[key]} onChange={handleChange}>
            {dropdownItems.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
    </Box>
  );
};

export default Estimator;
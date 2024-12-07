import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const CostDetails = ({ config, handleChange }) => {
  console.log("Received a new engine result", config);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Components</TableCell>
              <TableCell>Initial cost</TableCell>
              <TableCell>Run Cost per year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(config.costs).map((key) => (
              <TableRow key={key}>
                <TableCell>{config.costs[key].label}</TableCell>
                <TableCell>
                  <Typography variant="body">
                    {new Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: config.constants.dailyrate.currency,
                    }).format(config.costs[key].value)}
                  </Typography>
                </TableCell>
                <TableCell>{config.costs[`${key}Run`] || "-"} €</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CostDetails;

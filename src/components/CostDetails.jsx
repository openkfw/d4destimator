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
} from "@mui/material";
import config from "../assets/estimatorconfig.json";

const CostDetails = ({ costs, handleChange }) => {
  return (
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
                <TextField
                  type="text"
                  value={costs[`${key}Initial`]}
                  onChange={(e) =>
                    handleChange(`${key}Initial`, e.target.value)
                  }
                  variant="outlined"
                  size="small"
                />{" "}
                €
              </TableCell>
              <TableCell>{costs[`${key}Run`] || "-"} €</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CostDetails;

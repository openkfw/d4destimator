import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { Cost, ConfigProps } from "../types/estimatorConfigType";
import TooltipWrapper from "./TooltipWrapper";

const CostDetails: React.FC<ConfigProps> = ({ config }) => {
  console.log("Received a new engine result", config);

  if (!config.costs) {
    throw new Error("Invalid costs object");
  }
  const categories: { [key: string]: Cost[] } = {};
  Object.values(config.costs).forEach((cost) => {
    if (!categories[cost.category]) {
      categories[cost.category] = [];
    }
    categories[cost.category].push(cost);
  });

  const sortedCategories = Object.keys(categories).sort();
  console.log("Sorted categories", sortedCategories);
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography>Components</Typography>
              </TableCell>
              <TableCell>
                <Typography>Initial cost</Typography>
              </TableCell>
              <TableCell>
                <Typography>Run Cost per year</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedCategories.map((category) => (
              <React.Fragment key={category}>
                <TableRow>
                  <TableCell colSpan={3}>
                    <Typography variant="h6">{category}</Typography>
                  </TableCell>
                </TableRow>
                {categories[category].map((cost) => {
                  // Deklariere die Variablen
                  let initialCost = 0;
                  let runningCost = 0;
                  
                  // Berechne die Werte basierend auf der Unit
                  if (cost.unit === "dailyrate") {
                    initialCost = cost.value;
                    runningCost = cost.value * config.constants.runcosts.value;
                  }
                  else if (cost.unit === "licensefee") {
                    initialCost = cost.value * 2;
                    runningCost = cost.value;
                  }
                  
                  console.log("Costs", cost.unit);
                  
                  // Gib das JSX-Element zurück
                  return (
                    <TableRow key={cost.label}>
                      <TableCell>
                        <TooltipWrapper tooltip={cost.tooltip}>
                          <Typography>{cost.label}</Typography>
                        </TooltipWrapper>
                      </TableCell>
                      <TableCell>
                        <Typography>
                          {new Intl.NumberFormat("de-DE", {
                            style: "currency",
                            currency: config.constants.dailyrate.currency,
                          }).format(initialCost)}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        {new Intl.NumberFormat("de-DE", {
                          style: "currency",
                          currency: config.constants.dailyrate.currency,
                        }).format(runningCost)}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CostDetails;

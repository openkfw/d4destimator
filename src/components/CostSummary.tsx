import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { CostTotals } from "../types/CostTotals";

const CostSummary = ({ totalInitial, totalRun, totalTCO, tCODuration }: CostTotals) => {
  //do some formatting
  const formattedTotalInitial = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(totalInitial);
  const formattedTotalRun = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(totalRun);
  const formattedTotalCostOfOwnership = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(totalTCO);

  return (
    <Box p={2} component={Paper}>
      <Grid container spacing={2}>
        <Grid size={6}>
          <Typography align="left">Total Initial Cost:</Typography>
        </Grid>
        <Grid size={6}>
          <Typography align="right">{formattedTotalInitial}</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid size={6}>
          <Typography align="left">Total Run Cost per Year:</Typography>
        </Grid>
        <Grid size={6}>
          <Typography align="right">{formattedTotalRun}</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: '6pt' }}>
        <Grid size={6}>
          <Typography align="left" sx={{ fontWeight: "bold" }}>
            Total Cost of Ownership ({tCODuration} years):
          </Typography>
        </Grid>
        <Grid size={6}>
          <Typography align="right" sx={{ fontWeight: "bold" }}>
            {formattedTotalCostOfOwnership}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CostSummary;

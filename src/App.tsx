import React, { useEffect, useState } from "react";

import "./App.css";

import CostOverview from "./components/CostOverview";

import GeneratedEstimator from "./components/GeneratedEstimator";
import runEngine from "./utils/runEngine";

import estimatorConfig from "./assets/estimatorconfig.json";
import CostDetails from "./components/CostDetails";
import {
  AppBar,
  Box,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";

function App() {
  const [calculation, setCalculation] = useState(estimatorConfig);
  useEffect(() => {
    const result = runEngine(estimatorConfig) as any;
    setCalculation(result);

    console.log("Running engine:", result);
  }, []);
  return (
    <div className="App">
      <Box
        sx={{
          minHeight: "100vh",
          background:
            " linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(10,48,5,1) 35%, rgba(19,4,136,1) 100%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <AppBar position="static" sx={{ backgroundColor: "#333" }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              D4D Cost Estimator for digital systems
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Content */}
        <Container sx={{ flex: 1, py: 4 }}>
          <Grid
            container
            spacing={4}
            sx={{
              height: "100%",
            }}
          >
            {/* Left Side */}
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  backgroundColor: "rgba(255, 255, 255, 1.0)",
                }}
              >
                <div>
                  <GeneratedEstimator
                    estimatorConfig={calculation}
                    setCalculation={setCalculation}
                  />
                </div>
              </Paper>
            </Grid>

            {/* Right Side */}
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <div>
                  <CostDetails config={calculation} handleChange={null} />
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            py: 2,
            textAlign: "center",
            backgroundColor: "#333",
          }}
        >
          <Typography variant="body2" color="white">
            © 2024 KfW. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default App;

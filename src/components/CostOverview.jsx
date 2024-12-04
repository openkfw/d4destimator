import React, { useState } from "react";
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

const CostOverview = ({ estimatorConfig }) => {
  const [costs, setCosts] = useState({
    hardwareInitial: "",
    hardwareRun: "-",
    procurementInitial: "",
    procurementRun: "-",
    infrastructureInitial: "",
    infrastructureRun: "-",
    integrationInitial: "",
    integrationRun: "-",
    securityInitial: "",
    securityRun: "-",
    monitoringInitial: "",
    monitoringRun: "-",
    documentationInitial: "",
    documentationRun: "-",
    changeManagementInitial: "",
    changeManagementRun: "-",
    adminTrainingInitial: "",
    adminTrainingRun: "-",
    userTrainingInitial: "",
    userTrainingRun: "-",
    adminOverheadInitial: "",
    adminOverheadRun: "-",
    analysisDesignInitial: "",
  });

  const handleChange = (field, value) => {
    setCosts((prevCosts) => ({
      ...prevCosts,
      [field]: value,
      [`${field.replace("Initial", "Run")}`]: value
        ? (parseFloat(value) * 0.2).toFixed(2)
        : "-",
    }));
  };

  const totalInitial = Object.keys(costs)
    .filter((key) => key.endsWith("Initial"))
    .reduce((acc, key) => acc + (parseFloat(costs[key]) || 0), 0);
  const totalRun = Object.keys(costs)
    .filter((key) => key.endsWith("Run") && costs[key] !== "-")
    .reduce((acc, key) => acc + (parseFloat(costs[key]) || 0), 0)
    .toFixed(2);
  const totalCostOfOwnership = (totalInitial + totalRun * 3).toFixed(2);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Components at Partner</TableCell>
            <TableCell>Initial cost</TableCell>
            <TableCell>Run Cost per year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell colSpan={3}>Hard- and Software costs</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Hardware</TableCell>
            <TableCell>
              <TextField
                type="text"
                value={costs.hardwareInitial}
                onChange={(e) =>
                  handleChange("hardwareInitial", e.target.value)
                }
                variant="outlined"
                size="small"
              />{" "}
              €
            </TableCell>
            <TableCell>{costs.hardwareRun} €</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3}>IT related staffing costs</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Procurement process</TableCell>
            <TableCell>
              <TextField
                type="text"
                value={costs.procurementInitial}
                onChange={(e) =>
                  handleChange("procurementInitial", e.target.value)
                }
                variant="outlined"
                size="small"
              />{" "}
              €
            </TableCell>
            <TableCell>{costs.procurementRun} €</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Infrastructure configuration</TableCell>
            <TableCell>
              <TextField
                type="text"
                value={costs.infrastructureInitial}
                onChange={(e) =>
                  handleChange("infrastructureInitial", e.target.value)
                }
                variant="outlined"
                size="small"
              />{" "}
              €
            </TableCell>
            <TableCell>{costs.infrastructureRun} €</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Integration of other systems via API</TableCell>
            <TableCell>
              <TextField
                type="text"
                value={costs.integrationInitial}
                onChange={(e) =>
                  handleChange("integrationInitial", e.target.value)
                }
                variant="outlined"
                size="small"
              />{" "}
              €
            </TableCell>
            <TableCell>{costs.integrationRun} €</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3}>Staffing costs</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Security setup</TableCell>
            <TableCell>
              <TextField
                type="text"
                value={costs.securityInitial}
                onChange={(e) =>
                  handleChange("securityInitial", e.target.value)
                }
                variant="outlined"
                size="small"
              />{" "}
              €
            </TableCell>
            <TableCell>{costs.securityRun} €</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Monitoring setup</TableCell>
            <TableCell>
              <TextField
                type="text"
                value={costs.monitoringInitial}
                onChange={(e) =>
                  handleChange("monitoringInitial", e.target.value)
                }
                variant="outlined"
                size="small"
              />{" "}
              €
            </TableCell>
            <TableCell>{costs.monitoringRun} €</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Adapt documentation to local requirements</TableCell>
            <TableCell>
              <TextField
                type="text"
                value={costs.documentationInitial}
                onChange={(e) =>
                  handleChange("documentationInitial", e.target.value)
                }
                variant="outlined"
                size="small"
              />{" "}
              €
            </TableCell>
            <TableCell>{costs.documentationRun} €</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Change Management business processes</TableCell>
            <TableCell>
              <TextField
                type="text"
                value={costs.changeManagementInitial}
                onChange={(e) =>
                  handleChange("changeManagementInitial", e.target.value)
                }
                variant="outlined"
                size="small"
              />{" "}
              €
            </TableCell>
            <TableCell>{costs.changeManagementRun} €</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Administrator training</TableCell>
            <TableCell>
              <TextField
                type="text"
                value={costs.adminTrainingInitial}
                onChange={(e) =>
                  handleChange("adminTrainingInitial", e.target.value)
                }
                variant="outlined"
                size="small"
              />{" "}
              €
            </TableCell>
            <TableCell>{costs.adminTrainingRun} €</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>User training</TableCell>
            <TableCell>
              <TextField
                type="text"
                value={costs.userTrainingInitial}
                onChange={(e) =>
                  handleChange("userTrainingInitial", e.target.value)
                }
                variant="outlined"
                size="small"
              />{" "}
              €
            </TableCell>
            <TableCell>{costs.userTrainingRun} €</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Admin overhead</TableCell>
            <TableCell>
              <TextField
                type="text"
                value={costs.adminOverheadInitial}
                onChange={(e) =>
                  handleChange("adminOverheadInitial", e.target.value)
                }
                variant="outlined"
                size="small"
              />{" "}
              €
            </TableCell>
            <TableCell>{costs.adminOverheadRun} €</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Initial analyse and design</TableCell>
            <TableCell>
              <TextField
                type="text"
                value={costs.analysisDesignInitial}
                onChange={(e) =>
                  handleChange("analysisDesignInitial", e.target.value)
                }
                variant="outlined"
                size="small"
              />{" "}
              €
            </TableCell>
            <TableCell>-</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Initial costs</TableCell>
            <TableCell>{totalInitial} €</TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Run costs (per year)</TableCell>
            <TableCell></TableCell>
            <TableCell>{totalRun} €</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total cost of ownership (3 years)</TableCell>
            <TableCell colSpan={2}>{totalCostOfOwnership} €</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CostOverview;

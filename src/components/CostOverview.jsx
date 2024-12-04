import React, { useState } from 'react';

const CostOverview = () => {
  const [costs, setCosts] = useState({
    hardwareInitial: '',
    hardwareRun: '-',
    procurementInitial: '',
    procurementRun: '-',
    infrastructureInitial: '',
    infrastructureRun: '-',
    integrationInitial: '',
    integrationRun: '-',
    securityInitial: '',
    securityRun: '-',
    monitoringInitial: '',
    monitoringRun: '-',
    documentationInitial: '',
    documentationRun: '-',
    changeManagementInitial: '',
    changeManagementRun: '-',
    adminTrainingInitial: '',
    adminTrainingRun: '-',
    userTrainingInitial: '',
    userTrainingRun: '-',
    adminOverheadInitial: '',
    adminOverheadRun: '-',
    analysisDesignInitial: '',
  });

  const handleChange = (field, value) => {
    setCosts(prevCosts => ({
      ...prevCosts,
      [field]: value,
      [`${field.replace('Initial', 'Run')}`]: (parseFloat(value) * 0.2).toFixed(2)
    }));
  };

  const totalInitial = Object.keys(costs).filter(key => key.endsWith('Initial')).reduce((acc, key) => acc + (parseFloat(costs[key]) || 0), 0);
  const totalRun = Object.keys(costs).filter(key => key.endsWith('Run') && costs[key] !== '-').reduce((acc, key) => acc + (parseFloat(costs[key]) || 0), 0).toFixed(2);
  const totalCostOfOwnership = (totalInitial + (totalRun * 3)).toFixed(2);


  return (
    <table>
      <thead>
        <tr>
          <th>Components</th>
          <th>Initial cost</th>
          <th>Run Cost per year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="3">Hard- and Software costs</td>
        </tr>
        <tr>
          <td>Hardware</td>
          <td><input type="text" value={costs.hardwareInitial} onChange={(e) => handleChange('hardwareInitial', e.target.value)} /> €</td>
          <td>{costs.hardwareRun} €</td>
        </tr>
        <tr>
          <td colSpan="3">IT related staffing costs</td>
        </tr>
        <tr>
          <td>Procurement process</td>
          <td><input type="text" value={costs.procurementInitial} onChange={(e) => handleChange('procurementInitial', e.target.value)} /> €</td>
          <td>{costs.procurementRun} €</td>
        </tr>
        <tr>
          <td>Infrastructure configuration</td>
          <td><input type="text" value={costs.infrastructureInitial} onChange={(e) => handleChange('infrastructureInitial', e.target.value)} /> €</td>
          <td>{costs.infrastructureRun} €</td>
        </tr>
        <tr>
          <td>Integration of other systems via API</td>
          <td><input type="text" value={costs.integrationInitial} onChange={(e) => handleChange('integrationInitial', e.target.value)} /> €</td>
          <td>{costs.integrationRun} €</td>
        </tr>
        <tr>
          <td colSpan="3">Staffing costs</td>
        </tr>
        <tr>
          <td>Security setup</td>
          <td><input type="text" value={costs.securityInitial} onChange={(e) => handleChange('securityInitial', e.target.value)} /> €</td>
          <td>{costs.securityRun} €</td>
        </tr>
        <tr>
          <td>Monitoring setup</td>
          <td><input type="text" value={costs.monitoringInitial} onChange={(e) => handleChange('monitoringInitial', e.target.value)} /> €</td>
          <td>{costs.monitoringRun} €</td>
        </tr>
        <tr>
          <td>Adapt documentation to local requirements</td>
          <td><input type="text" value={costs.documentationInitial} onChange={(e) => handleChange('documentationInitial', e.target.value)} /> €</td>
          <td>{costs.documentationRun} €</td>
        </tr>
        <tr>
          <td>Change Management business processes</td>
          <td><input type="text" value={costs.changeManagementInitial} onChange={(e) => handleChange('changeManagementInitial', e.target.value)} /> €</td>
          <td>{costs.changeManagementRun} €</td>
        </tr>
        <tr>
          <td>Administrator training</td>
          <td><input type="text" value={costs.adminTrainingInitial} onChange={(e) => handleChange('adminTrainingInitial', e.target.value)} /> €</td>
          <td>{costs.adminTrainingRun} €</td>
        </tr>
        <tr>
          <td>User training</td>
          <td><input type="text" value={costs.userTrainingInitial} onChange={(e) => handleChange('userTrainingInitial', e.target.value)} /> €</td>
          <td>{costs.userTrainingRun} €</td>
        </tr>
        <tr>
          <td>Admin overhead</td>
          <td><input type="text" value={costs.adminOverheadInitial} onChange={(e) => handleChange('adminOverheadInitial', e.target.value)} /> €</td>
          <td>{costs.adminOverheadRun} €</td>
        </tr>
        <tr>
          <td>Initial analyse and design</td>
          <td><input type="text" value={costs.analysisDesignInitial} onChange={(e) => handleChange('analysisDesignInitial', e.target.value)} /> €</td>
          <td></td>
        </tr>
        <tr>
          <td>Initial costs</td>
          <td>{totalInitial} €</td>
          <td></td>
        </tr>
        <tr>
          <td>Run costs (per year)</td>
          <td></td>
          <td>{totalRun} €</td>
        </tr>
        <tr>
          <td>Total cost of ownership (including 3 years of run)</td>
          <td colSpan="2">{totalCostOfOwnership} €</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CostOverview;
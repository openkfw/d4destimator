export interface EstimatorConfig {
  flavour: string;
  author: string;
  version: string;
  parameters: {
    [key: string]: {
      label: string;
      values: Array<{
        inputFactor: string;
        selected: boolean;
        initialAnalysisDesign: string;
        procurement?: string;
        hardware?: string;
        infrastructureConfiguration?: string;
        integrationSystems?: string;
        securitySetup?: string;
        monitoringSetup?: string;
        documentationAdaptation?: string;
        changeManagement?: string;
        adminTraining?: string;
        userTraining?: string;
        adminOverhead?: string;
      }>;
    };
  };
  costs: {
    [key: string]: {
      label: string;
      value: string;
      category: string;
    };
  };
  constants: {
    dailyrate: {
      label: string;
      currency: string;
      value: string;
    };
    runcosts: {
      unit: string;
      value: string;
    };
    tcoduration: {
      unit: string;
      value: string;
    };
  };
}

export default EstimatorConfig;

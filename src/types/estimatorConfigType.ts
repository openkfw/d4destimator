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
      value: number;
      category: string;
    };
  };
  constants: {
    dailyrate: {
      label: string;
      currency: string;
      value: number;
    };
    runcosts: {
      unit: string;
      value: number;
    };
    tcoduration: {
      unit: string;
      value: number;
    };
  };
}

export interface ConfigProps {
  config: EstimatorConfig;
}

export default EstimatorConfig;

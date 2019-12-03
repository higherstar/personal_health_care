import React from 'react';

import PublicRoute from './publicRoutes';
import Welcome from '../pages/welcome';
import Journey from '../pages/journey';
import Enablers from '../pages/enablers';
import Abbreviation from '../pages/abbreviation';
import Acknowledgements from '../pages/acknowledgements';
import Diagnosis from '../pages/journey/diagnosis';
import DiagnosisOverview from '../pages/journey/diagnosis/Overview';
import DiagnosisDiagnostics from '../pages/journey/diagnosis/Diagnostics';
import DiagnosisGenomics from '../pages/journey/diagnosis/Genomics';
import DiagnosisAdvancedImaging from '../pages/journey/diagnosis/AdvancedImaging';
import DiagnosisDigitalHealth from '../pages/journey/diagnosis/DigitalHealth';
import DiagnosisCDSSystems from '../pages/journey/diagnosis/CDSSystems';
import DiagnosisDigitalPathology from '../pages/journey/diagnosis/DigitalPathology';
import MonitoringDigitalHealth from '../pages/journey/monitoring/DigitalHealth';
import MonitoringAdvancedImaging from '../pages/journey/monitoring/AdvancedImaging';
import MonitoringCDSSystems from '../pages/journey/monitoring/CDSSystems';
import MonitoringDiagnostics from '../pages/journey/monitoring/Diagnostics';
import MonitoringGenomics from '../pages/journey/monitoring/Genomics';
import MonitoringOverview from '../pages/journey/monitoring/Overview';
import DataInsights from '../pages/journey/data';
import DataOverview from '../pages/journey/data/Overview';
import AdvancedAnalytics from '../pages/journey/data/AdvancedAnalytics';
import RealWorldData from '../pages/journey/data/RealWorldData';
import Monitoring from '../pages/journey/monitoring';
import CarePlan from '../pages/journey/care';
import CareDigitalHealth from '../pages/journey/care/DigitalHealth';
import CareCDSSystems from '../pages/journey/care/CDSSystems';
import CareDiagnostics from '../pages/journey/care/Diagnostics';
import CareOverview from '../pages/journey/care/Overview';
import Access from '../pages/journey/access';
import AccessCDSSystems from '../pages/journey/access/CDSSystems';
import AccessDiagnostics from '../pages/journey/access/Diagnostics';
import AccessDigitalHealth from '../pages/journey/access/DigitalHealth';
import ValueBasedHealthCare from '../pages/journey/access/vbhc';
import AccessOverview from '../pages/journey/access/Overview';
import Partners from '../pages/enablers/partners';
import RocheInitiatives from '../pages/enablers/roche';
import Context from '../pages/enablers/roche/Context';
import Rozlytrek from '../pages/enablers/roche/Rozlytrek';
import ShiningTowers from '../pages/enablers/roche/ShinigTowers';
import Showcases from '../pages/enablers/roche/Showcases';
import PatientPartnership from '../pages/enablers/partners/PatientPartnership';
import Policy from '../pages/enablers/partners/Policy';
import StakeHolders from '../pages/enablers/partners/StakeHolders';
import Technology from '../pages/enablers/partners/Technology';

const Routes = (props) => [
  <PublicRoute exact path="/phc/welcome" component={Welcome} props={props} key="welcome" />,
  <PublicRoute exact path="/phc/future-patient-journey" component={Journey} props={props} key="future-journey" />,
  <PublicRoute
    exact
    path="/phc/future-patient-journey/diagnosis"
    component={Diagnosis}
    props={props}
    key="diagnosis"
  />,
  <PublicRoute
    exact
    path="/phc/future-patient-journey/diagnosis/overview"
    component={DiagnosisOverview}
    props={props}
    key="diagnosis-overview"
  />,
  <PublicRoute
    exact
    path="/phc/future-patient-journey/diagnosis/diagnostics"
    component={DiagnosisDiagnostics}
    props={props}
    key="diagnosis-diagnostics"
  />,
  <PublicRoute
    exact
    path="/phc/future-patient-journey/diagnosis/genomics"
    component={DiagnosisGenomics}
    props={props}
    key="diagnosis-genomics"
  />,
  <PublicRoute
    exact
    path="/phc/future-patient-journey/diagnosis/advanced-imaging"
    component={DiagnosisAdvancedImaging}
    props={props}
    key="diagnosis-advanced-imaging"
  />,
  <PublicRoute
    exact
    path="/phc/future-patient-journey/diagnosis/digital-pathology"
    component={DiagnosisDigitalPathology}
    props={props}
    key="diagnosis-digital-pathology"
  />,
  <PublicRoute
    exact
    path="/phc/future-patient-journey/diagnosis/cds-systems"
    component={DiagnosisCDSSystems}
    props={props}
    key="diagnosis-cds-systems"
  />,
  <PublicRoute
    exact
    path="/phc/future-patient-journey/diagnosis/digital-health"
    component={DiagnosisDigitalHealth}
    props={props}
    key="diagnosis-digital-health"
  />,
  <PublicRoute
    exact
    path="/phc/future-patient-journey/monitoring"
    component={Monitoring}
    props={props}
    key="monitoring"
  />,
  <PublicRoute
    exact
    path="/phc/future-patient-journey/monitoring/digital-health"
    component={MonitoringDigitalHealth}
    props={props}
    key="monitoring-digital-health"
  />,
  <PublicRoute
    exact
    path="/phc/future-patient-journey/monitoring/advanced-imaging"
    component={MonitoringAdvancedImaging}
    props={props}
    key="monitoring-advanced-imaging"
  />,
  <PublicRoute
    exact
    path="/phc/future-patient-journey/monitoring/cds-systems"
    component={MonitoringCDSSystems}
    props={props}
    key="monitoring-cds-systems"
  />,
  <PublicRoute
    exact
    path="/phc/future-patient-journey/monitoring/diagnostics"
    component={MonitoringDiagnostics}
    props={props}
    key="monitoring-diagnostics"
  />,
  <PublicRoute
    exact
    path="/phc/future-patient-journey/monitoring/genomics"
    component={MonitoringGenomics}
    props={props}
    key="monitoring-genomics"
  />,
  <PublicRoute
    exact
    path="/phc/future-patient-journey/monitoring/overview"
    component={MonitoringOverview}
    props={props}
    key="monitoring-overview"
  />,
  <PublicRoute
    exact
    path="/phc/future-patient-journey/data"
    component={DataInsights}
    props={props}
    key="data-insights"
  />,
  <PublicRoute
    exact
    path="/phc/future-patient-journey/data/overview"
    component={DataOverview}
    props={props}
    key="data-overview"
  />,
  <PublicRoute
    exact
    path="/phc/future-patient-journey/data/advanced-analytics"
    component={AdvancedAnalytics}
    props={props}
    key="advanced-analytics"
  />,
  <PublicRoute
    exact
    path="/phc/future-patient-journey/data/real-world-data"
    component={RealWorldData}
    props={props}
    key="real-world-data"
  />,
  <PublicRoute
    exact
    path="/phc/future-patient-journey/care"
    component={CarePlan}
    props={props}
    key="care"
  />,
  <PublicRoute
    exact
    path="/phc/future-patient-journey/care/digital-health"
    component={CareDigitalHealth}
    props={props}
    key="care-digital-health"
  />,
  <PublicRoute
    exact
    path="/phc/future-patient-journey/care/cds-systems"
    component={CareCDSSystems}
    props={props}
    key="care-cds-systems"
  />,
  <PublicRoute
    exact
    path="/phc/future-patient-journey/care/diagnostics"
    component={CareDiagnostics}
    props={props}
    key="care-diagnostics"
  />,
  // <PublicRoute
  //  exact
  //   path="/phc/future-patient-journey/care/mgtos"
  //   component={MGTOs}
  //   props={props}
  //   key="care-mgtos"
  // />,
  <PublicRoute
    exact
    path="/phc/future-patient-journey/care/overview"
    component={CareOverview}
    props={props}
    key="care-overview"
  />,
  <PublicRoute
    exact
    path="/phc/future-patient-journey/access"
    component={Access}
    props={props}
    key="access"
  />,
  <PublicRoute
    exact
    path="/phc/future-patient-journey/access/cds-systems"
    component={AccessCDSSystems}
    props={props}
    key="access-cds-systems"
  />,
  <PublicRoute
    exact
    path="/phc/future-patient-journey/access/diagnostics"
    component={AccessDiagnostics}
    props={props}
    key="access-diagnostics"
  />,
  <PublicRoute
    exact
    path="/phc/future-patient-journey/access/digital-health"
    component={AccessDigitalHealth}
    props={props}
    key="access-digital-health"
  />,
  <PublicRoute
    exact
    path="/phc/future-patient-journey/access/overview"
    component={AccessOverview}
    props={props}
    key="access-overview"
  />,
  <PublicRoute
    exact
    path="/phc/future-patient-journey/access/value-based-healthcare"
    component={ValueBasedHealthCare}
    props={props}
    key="access-overview"
  />,
  <PublicRoute exact path="/phc/systems-enablers" component={Enablers} props={props} key="systems-enablers" />,
  <PublicRoute
    exact
    path="/phc/systems-enablers/roches-initiatives"
    component={RocheInitiatives}
    props={props}
    key="systems-enablers-roches-initiatives"
  />,
  <PublicRoute
    exact
    path="/phc/systems-enablers/roches-initiatives/context"
    component={Context}
    props={props}
    key="systems-enablers-roches-initiatives-context"
  />,
  <PublicRoute
    exact
    path="/phc/systems-enablers/roches-initiatives/rozlytrek"
    component={Rozlytrek}
    props={props}
    key="systems-enablers-roches-initiatives-rozlytrek"
  />,
  <PublicRoute
    exact
    path="/phc/systems-enablers/roches-initiatives/shining-towers"
    component={ShiningTowers}
    props={props}
    key="systems-enablers-roches-initiatives-shining-towers"
  />,
  <PublicRoute
    exact
    path="/phc/systems-enablers/roches-initiatives/showcases"
    component={Showcases}
    props={props}
    key="systems-enablers-roches-initiatives-showcases"
  />,
  <PublicRoute
    exact
    path="/phc/systems-enablers/partners"
    component={Partners}
    props={props}
    key="systems-enablers-partners"
  />,
  <PublicRoute
    exact
    path="/phc/systems-enablers/partner/patient-partnerships"
    component={PatientPartnership}
    props={props}
    key="systems-enablers-patient-partnership"
  />,
  <PublicRoute
    exact
    path="/phc/systems-enablers/partner/policy"
    component={Policy}
    props={props}
    key="systems-enablers-policy"
  />,
  <PublicRoute
    exact
    path="/phc/systems-enablers/partner/stakeholders"
    component={StakeHolders}
    props={props}
    key="systems-enablers-stakeholders"
  />,
  <PublicRoute
    exact
    path="/phc/systems-enablers/partner/phc-it"
    component={Technology}
    props={props}
    key="systems-enablers-phc-it"
  />,
  <PublicRoute exact path="/phc/abbreviation" component={Abbreviation} props={props} key="abbreviation" />,
  <PublicRoute exact path="/phc/acknowledgements" component={Acknowledgements} props={props} key="acknowledgements" />,
];

export default Routes;

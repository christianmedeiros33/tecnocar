import Analytics from '@vercel/analytics';
Analytics.initialize({ projectID: 'prj_iRf1RPrgwcbGxy2ArqkpIDUiiQPP' });

import "./App.css";
import Header from "./components/headerTecnocar/Header";
import SectionTecnocar from "./components/sectionTecnocar/SectionTecnocar";
import SectionAbout from "./components/sectionAbout/SectionAbout";
import SectionSpecialties from "./components/sectionSpecialties/SectionSpecialties";
import SectionServices from "./components/sectionServices/SectionServices";
import SectionScheduling from "./components/sectionScheduling/SectionScheduling";
import SectionMap from "./components/sectionMap/SectionMap";
import SectionContact from "./components/sectionContact/SectionContact";
import SectionCredit from "./components/sectionCredit/SectionCredit";
function App() {
  return (
    <div className="App">
      <Header />
      <SectionTecnocar />
      <SectionAbout />
      <SectionSpecialties />
      <SectionServices />
      <SectionScheduling />
      <SectionMap />
      <SectionContact />
      <SectionCredit />
    </div>
  );
}

export default App;

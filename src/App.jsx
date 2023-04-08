import "./App.css";

import Header from "./components/headerTecnocar/Header";
import ContentTecnocar from "./components/contentTecnocar/ContentTecnocar";
import ContentAbout from "./components/contentAbout/ContentAbout";
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
      <ContentTecnocar />
      <ContentAbout />
      <SectionSpecialties />
      <SectionServices />
      <SectionScheduling />
      <SectionMap />
      <SectionContact/>
      <SectionCredit />
    </div>
  );
}

export default App;

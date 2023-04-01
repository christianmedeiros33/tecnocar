import "./App.css";
import ContentIndex from "./components/contentIndex/ContentIndex";
import ContentSobre from "./components/contentSobre/ContentSobre";
import Header from "./components/header/Header";
import Location from "./components/location/Location";
import SectionServices from "./components/sectionServices/SectionServices";
import Services from "./components/services/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <ContentIndex />
      <ContentSobre />
      <SectionServices />
      <Services />
      <Location/>
    </div>
  );
}

export default App;

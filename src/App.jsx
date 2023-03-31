import "./App.css";
import { ContentIndex } from "./components/contentIndex/contentIndex";
import ContentSobre from "./components/contentSobre/ContentSobre";
import Header from "./components/header/Header";
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
    </div>
  );
}

export default App;

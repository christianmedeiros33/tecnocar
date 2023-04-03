import "./App.css";



import Header from "./components/header/Header";
import ContentSobre from "./components/contentSobre/ContentSobre";
import ContentIndex from "./components/contentIndex/ContentIndex";
import SectionServices from "./components/sectionServices/SectionServices";
import Services from "./components/services/Services";
import Location from "./components/location/Location";
import Footer from "./components/footer/Footer";
import { Credit } from "./components/credit/Credit";

function App() {
  return (
    <div className="App">
      <Header />
      <ContentIndex />
      <ContentSobre />
      <SectionServices />
      <Services />
      <Location />
      <Footer/>
      <Credit/>
    </div>
  );
}

export default App;

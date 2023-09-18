import "./App.css";
import NavBar from "./components/NavBar";
import CreateStartUp from "./components/CreateStartUp";
import WhoWeAre from "./components/WhoWeAre";
import LoveSolving from "./components/LoveSolving";
import OurCoreValue from "./components/OurCoreValue";
import OurWorks from "./components/OurWorks";
import StartupBuilding from "./components/StartupBuilding";
import WeHiring from "./components/WeHiring";
import Ready from "./components/Ready";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <CreateStartUp />
      <div className="container mx-auto px-4">
        <WhoWeAre />
        <LoveSolving />
        <OurCoreValue />
        <OurWorks />
        <StartupBuilding />
      </div>
      <WeHiring />
      <Ready />
      <Footer />
    </>
  );
}

export default App;

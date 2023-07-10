import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebgiViwer from "./components/WebgiViwer";

function App() {

  return (
    <div className="App">
      <Nav/>
      <Jumbotron />
      <SoundSection />
      <DisplaySection />
      <WebgiViwer />
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {Banner} from './components/Banner';
import { NavBar } from "./components/Navbar/Navbar";
import {Skills} from "./components/Skill";
import {Projects} from "./components/Projects";
import { Contact } from "./components/Contact";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;

import yaml from "js-yaml";
import "animate.css";
import logo from './logo.svg';
import './App.css';
import Hero from "./components/Hero/Hero.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import WorkExperience from "./components/WorkExperience/WorkExperience.jsx";
import Contact from "./components/Contact/Contact.jsx";


function App() {

  return (
    <div className="App">
      <Hero />
      <Nav />
      <About />
      <WorkExperience />
      <Contact />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

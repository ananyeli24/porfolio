import { Routes, Route, Link } from "react-router-dom";
import { NavBar } from "./PortfolioContainer/Home/NavBar";
import Profile from "./PortfolioContainer/Home/Profile";
import { Aboutme } from "./PortfolioContainer/About Me/Aboutme";
import { Project } from "./PortfolioContainer/Projects/Project";
import { Contact } from "./PortfolioContainer/ContactMe/Contact";
import { Footer } from "./PortfolioContainer/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Profile />
      <Aboutme />
      <Project />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;

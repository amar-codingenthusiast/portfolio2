import React from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

const siteProps = {
  name: "Amar Kumar",
  title: "Java Developer, C++ Developer & MERN Stack Developer",
  portfolio: "https://amar-codingenthusiast.github.io/portfolio",
  resume: "https://drive.google.com/file/d/1b4CT4swECODIr5rF9Lw44uQqH3Xww6t_/view?usp=drive_link",
  gitHub: "https://github.com/amar-codingenthusiast",
  leetcode: "https://leetcode.com/amar-codingenthusiast",
  linkedIn: "https://linkedin.com/in/amar-codingenthusiast",
  email: "mailto:amar.codingenthusiast@gmail.com",
  mobile: "tel:+916200110130",
  address: "https://maps.app.goo.gl/FujDqcBCqbbX7rsQA",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;

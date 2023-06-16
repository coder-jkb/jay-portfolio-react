import { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./contents/Home";
import About from "./contents/About";
import Projects from "./contents/Projects";

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#14073ce0" : "#4527a04f"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .condiv{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#14073ce0" : "#7b5fd059"};
      // props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  nav{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#14073ce0" : "#7b5fd059"};
      // props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  a{
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .back1{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#180a3f" : "#ab9bdb"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }

  .back3{
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .social{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "transparent" : "transparent"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .btnsame{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#180a3f" : "#d3c7fb"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .neu1{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#3e345f" : "#bdaef0"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .neu2{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#322757" : "#c3b3f9"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .hr_line{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .hr_inner{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .vr_line{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .vr_inner{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "blueviolet" : "blueviolet"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }

  .p10, .p1, .aboutTitles, .proj-title, .proj-desc{
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }

  .proj-cat{
    color: ${(props) =>
      props.theme.mode === "dark" ? "lightgrey" : "#202020"};
  }
  .proj-link{
    color: ${(props) =>
      props.theme.mode === "dark" ? "#76cdfabf" : "#0023f1"};
  }


`;

function App() {
  const [theme, setTheme] = useState({ mode: "dark" });
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            {/* <Route path="/contact">
              <Contact />
            </Route> */}
            <div
              className="back1"
              style={{position: 'absolute',top: '2%'}}

              onClick={(e) =>
                setTheme(
                  theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
                )
              }
            >
              <i
                className={theme.mode === "dark" ? "fa fa-sun i1" : "fa fa-moon i1"}
              ></i>
            </div>
          </div>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;

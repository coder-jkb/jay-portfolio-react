import { Component } from "react";
import Navitem from "./Navitem";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItemActive: "",
    };
  }
  activeitem = (x) => {
    if (this.state.NavItemActive.length > 0) {
      document
        .getElementById(this.state.NavItemActive)
        .classList.remove("active");
    }
    this.setState({ NavItemActive: x }, () => {
      document.getElementById(this.state.NavItemActive).classList.add("active");
    });
  };
  render() {
    return (
      <nav>
        <ul>
          <Navitem item="Home" tolink="/" activec={this.activeitem}></Navitem>
          <Navitem
            item="About"
            tolink="/about"
            activec={this.activeitem}
          ></Navitem>
          <Navitem
            item="Projects"
            tolink="/projects"
            activec={this.activeitem}
          ></Navitem>
        </ul>

        {/* Downloads & Socials */}
        <div className="NavFooter">
          <a
            className="back3"
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/15eAynkNCpUDH9M6DL2ngLbAZTIy7Y4X7/view?usp=sharing"
          >
            <i className="fa fa-download fa-sm fa-fw" aria-hidden="true"></i>{" "}
            Resume
          </a>

          <a
            className="back3"
            href="mailto:youremail@gmail.com"
          >
            <i className="fa fa-envelope fa-sm fa-fw" aria-hidden="true"></i>{" "}
            Email
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;

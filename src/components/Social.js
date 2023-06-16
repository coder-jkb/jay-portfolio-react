import { Component } from "react";

class Social extends Component {
  render() {
    return (
      <div className="social">
        <a
          className="btnsame btn1"
          href="https://github.com/coder-jkb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github"></i>
        </a>
        {/* <a
          className="btnsame btn2"
          href="https://twitter.com/@kaushik_vikalp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-twitter"></i>
        </a> */}
        <a
          className="btnsame btn2"
          href="https://www.linkedin.com/in/jay-bhanushali1792/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin"></i>
        </a>
        {/* <a
          className="btnsame btn4"
          href="https://instagram.com/vikalp._.kaushik"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-instagram"></i>
        </a> */}
      </div>
    );
  }
}

export default Social;

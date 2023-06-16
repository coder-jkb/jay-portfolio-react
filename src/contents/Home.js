import { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilepic from "../img/jay-pic.png";
import Social from "../components/Social";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <div className="neu2">
          <div className="neu1">
            <img
              src={profilepic}
              className="profilepic"
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <h1>
          <mark>Jay Bhanushali</mark>
        </h1>

        <div className="typingeffect_box">
          <p className="typingeffect_box_top">
            <span className="ctrl-btns ctrl-cross">
              <i className="fa fa-times fa-sm fa-fw"></i>
            </span>
            <span className="ctrl-btns ">
              <i className="fa fa-minus fa-sm fa-fw"></i>
            </span>
            <span className="ctrl-btns ctrl-maxi">
              <i className="fa fa-square-o fa-sm fa-fw"></i>
            </span>
            <span style={{ color: "white", fontSize: "1rem" }}>
              jay@ubuntu:~
            </span>
          </p>
          <br />
          <span>You Can Call Me</span>
          <div className="typingeffect_box_div">
            &gt;_&nbsp;
            <ReactTypingEffect
              className="typingeffect"
              text={[
                "Python Developer",
                "Data Scientist",
                "ML Engineer",
                "Frontend Developer",
              ]}
              speed={50}
              eraseSpeed={100}
              eraseDelay={800}
            />
          </div>
        </div>
        <Social />
      </div>
    );
  }
}

export default Home;

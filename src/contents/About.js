import { Component } from 'react';


class About extends Component {
    render() {
        return (
          <div className="condiv">
            <h1 className="subtopic">About Me</h1>
            <div className="hr_line line2">
              <div className="inner2 inner3"></div>
            </div>
            <h1>
              <mark>Jay Bhanushali</mark>
            </h1>
            <p className="aboutTitles">Python Developer & Data Enthusiast </p>

            <div className="about">
                <ul className='p10'
                  style={{
                    listStyleType: "circle",
                    listStylePosition: "outside",
                  }}
                >
                  <li style={{ padding: "5px 0" }}>
                    Third Year Engineering
                    <b style={{ color: "blueviolet" }}>
                      {" "}
                      (Data Science branch)
                    </b>
                  </li>
                  <li style={{ padding: "5px 0" }}>
                    Flexible to <u>quickly adapt to change</u> & always{" "}
                    <u>ready to learn</u> new technologies.
                  </li>
                  <li style={{ padding: "5px 0" }}>
                    Love{" "}
                    <kbd>Python programing</kbd>{" "}
                    and always fascinated about the data space.
                  </li>
                </ul> 

              <div className="section">
                <div className="Edu">
                  <u>
                    <h3 style={{ marginLeft: "70px" }}>Education</h3>
                  </u>
                  <div className="EduContent">
                    <div className="edu-left">
                      <div className="back1 back2">
                        <i className="fa fa-book i1 i3"></i>
                      </div>
                      <div className="vr_line">
                        <div className="vr_inner inn1"></div>
                        <div className="vr_inner inn2"></div>
                      </div>
                    </div>
                    <div className="edu-right">
                      <h4>
                        {" "}
                        <i
                          className="fa fa-graduation-cap i2"
                          aria-hidden="true"
                        ></i>{" "}
                        B.Tech (CSE - Data Science)
                      </h4>
                      <p className="p1">
                        {" "}
                        <i
                          className="fa fa-building-o i2"
                          aria-hidden="true"
                        ></i>{" "}
                        DJSCE, Mumbai
                      </p>
                      <p className="p1">
                        <i className="fa fa-calendar i2"></i> June 2020 - 2024
                      </p>
                      <h4>
                        <i
                          className="fa fa-graduation-cap i2"
                          aria-hidden="true"
                        ></i>{" "}
                        High School
                      </h4>
                      <p className="p1">
                        {" "}
                        <i
                          className="fa fa-building-o i2"
                          aria-hidden="true"
                        ></i>{" "}
                        Christ Academy, Koparkhairne
                      </p>
                      <p className="p1">
                        <i className="fa fa-calendar i2"></i> June 2018 - 2020
                      </p>
                    </div>
                  </div>
                </div>

                <div className="skills">
                  <u>
                    <h3 style={{ marginLeft: "40px" }}>Skills</h3>
                  </u>
                  <div className="skill-items">
                    <div className="sk">Python</div>
                    <div className="sk">HTML/CSS/JS</div>
                    <div className="sk">ReactJS</div>
                    <div className="sk">C/C++</div>
                    <div className="sk">Tableau</div>
                    <div className="sk">Django</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        }
    }
    
export default About
    

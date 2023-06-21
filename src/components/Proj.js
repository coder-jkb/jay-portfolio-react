import { Component } from "react";
import { Link } from "react-router-dom";

class Proj extends Component {
  render() {
    return (
      <div className="proj-box">
        <div className="proj-top">
          <div className="proj-title">{this.props.title}</div>
          <div className="proj-cat">{this.props.category}</div>
        </div>
        <div className="proj-content">
          <div className="proj-left">
            <img src={this.props.img_path} alt={this.props.alt_txt} />
          </div>
          <div className="proj-right">
            <div className="proj-desc">
              {this.props.desc.slice(0, 160)}...{" "}

              <a
                className="proj-link"
                href={this.props.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.link_text}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Proj;

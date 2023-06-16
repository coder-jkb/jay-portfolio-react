import { Component } from "react";
import Proj from "../components/Proj";
import twitter_logo from "../img/twitter.png";
import amazon_logo from "../img/amazon.png";
import crudx_ss from "../img/crudx_ss.png";
import yoga_cover from "../img/yoga_cover.png";
import ML_image from "../img/ML_image.jpg";
import TSA from "../img/TSA.png";

class Projects extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Projects</h1>
        <div className="hr_line line2">
          <div className="inner2 inner3"></div>
        </div>
        <div className="projects">
          <Proj
            img_path={twitter_logo}
            alt_txt="Twitter_logo"
            title="Scrape Twitter Profiles"
            category="Web Scraping | Selenium "
            desc="Scrape the Twitter profile with Python Selenium from the links stored in csv file. Obtain Bio, Following Count, Followers Count, Location, Website from the profile if available."
            link="http://github.com/coder-jkb/scrape_twitter_profiles"
            link_text="Read more"
          />

          <Proj
            img_path={yoga_cover}
            alt_txt="Yoga cover"
            title="Yoga Pose Classification & Correction"
            category="Deep Learning | Research "
            desc="A position correction approach is proposed for assessing yoga poses to support self-learning yoga. KNN is utilized to identify the yoga position, and the PoseNet model is used to detect body points."
            link="https://github.com/Sarvyi/Yoga-Pose-Correction"
            link_text="Private repo"
          />
          <Proj
            img_path={crudx_ss}
            title="Django CRUD-X"
            category="Web Dev | Django"
            desc="A web application that helps you manage your tasks
            You can Create a task and set
            Duration,
            Deadlines,
            Priority
           Simply view it in Read section
             In Update section, you can
            modify details of any task's by changing the Title, Duration, Duedate, Priority, etc...
            Set a task as done by modifying its Status
           Finally, Delete the task in its section when you no longer want it in the list"
            link="http://github.com/coder-jkb/Django-CRUDX"
            link_text="Read more"
          />
          <Proj
            img_path={amazon_logo}
            alt_txt="amazon_logo"
            title="Scrape Amazon Products"
            category="Web Scraping | Selenium"
            desc="a Python script that utilizes Selenium to scrape product details from the Amazon India website. The script extracts information such as Product Name, Price, Rating, and Seller Name (if the product is not out of stock) from the specified URL: https://www.amazon.in/s?rh=n%3A6612025031&fs=true&ref=lp_6612025031_sar."
            link="https://github.com/coder-jkb/webscrape-amazon"
            link_text="Read more"
          />

          <Proj
            img_path={ML_image}
            alt_txt="Machine Learning"
            title="Machine Learning & Data Analysis"
            category="Python | ML Algorithms | ML Libraries"
            desc="ML Projects include 1. data analysis on attrition dataset, 2. Prediction of Customer Buying Habits in banking using K Mearns and Random Forest."
            link="https://github.com/coder-jkb/ML-projects"
            link_text="Read more"
          />

          <Proj
          img_path={TSA}
          alt_test="Time Series Analysis"
          title="Microsoft Stock Price Prediction"
          category="Time Series | Python | Price Prediction"
          desc="Time Series Analysis project that aims to predict Microsoft stock price using various Time Series Methods like GARCH, AIMA, SARIMA, etc"
          link="https://colab.research.google.com/drive/11Qnq9rHZw8Fzt_zsjujOSEGFHvI3qcGN"
          link_text="Read more"
          />
        </div>

        {/* 
        <div className="port_out port1">
          <div className="port_in">
            <a href="https://github.com/vikalp2502/AlgoSort-Sorting-Visualiser">
              <img
                src={project1}
                className="po1"
                alt="AlgoSort Sorting Visualiser"
              ></img>
            </a>
          </div>
        </div>
        <div className="port_out port2">
          <div className="port_in">
            <a href="https://github.com/vikalp2502/Shoes-Nike-Landing-page">
              <img
                src={project2}
                className="po1"
                alt="Shoes Nike Landing page"
              ></img>
            </a>
          </div>
        </div>
        <div className="port_out port3">
          <div className="port_in">
            <a href="https://github.com/vikalp2502/To-do-list-v2">
              <img src={project3} className="po1" alt="To do list v2"></img>
            </a>
          </div>
        </div>
        <div className="port_out port4">
          <div className="port_in">
            <a href="https://github.com/vikalp2502/Tribute-to-msd">
              <img src={project4} className="po1" alt="Tribute to MSD"></img>
            </a>
          </div>
        </div> 
      */}
      </div>
    );
  }
}

export default Projects;

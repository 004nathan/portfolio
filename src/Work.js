import React from "react";
import Style from "./App.module.css";
export default function Work() {
  let projectDetails = [
    {
      Know: "Deluge",
      name: "Creator",
      nav: "View Work →",
      color: "#C05E2C",
      link: "https://creatorapp.zoho.in/parvathinathansto_zohotest/assignment-tracker#Form:Give_Assignment",
      img: "../assets/creatorProject.png",
    },
    {
      Know: "Node/sql",
      name: "Invoice",
      nav: "View Work →",
      color: "rgb(41, 203, 224)",
      link: "https://github.com/004nathan/invoiceApp",
      img: "../assets/bike.png",
    },
    {
      Know: "Node/sql",
      name: "People",
      nav: "View Work →",
      color: "rgb(108, 75, 244)",
      link: "https://github.com/004nathan/people",
      img: "../assets/people.png",
    },
    {
      Know: "Node/sql",
      name: "Expense..",
      nav: "View Work →",
      color: "rgb(248, 87, 129)",
      link: "https://github.com/004nathan/ExpenseTrackerProject",
      img: "../assets/expense.png",
    },
    {
      Know: "sql/cookies",
      name: "Movies",
      nav: "View Work →",
      color: "rgb(255, 204, 51)",
      link: "https://github.com/004nathan/EntertainmentAppProiect",
      img: "../assets/movies.png",
    },
    {
      Know: "React",
      name: "Porfolio",
      nav: "View Work →",
      color: "rgb(62, 103, 255)",
      link: "",
      img: "../assets/portfolio.png",
    },
  ];
  let apiDetails = [
    {
      name: "IP Address tracker",
      description:
        "This tool for searching for a location from an IP address.it was developed by making API calls and rendering results using Node.js",
      link: "https://github.com/004nathan/IP-Address-Tracker",
      img: "../assets/tracker.png",
    },
    {
      name: "Dictionary",
      description:
        "A dictionary is a tool used to search for words and their meanings, and to hear their pronunciation.",
      link: "https://github.com/004nathan/DicionaryApp",
      img: "../assets/dicionary.png",
    },
    {
      name: "Github",
      description:
        "This name is GitHub User Search and is developed using Node.js. It allows users to search for details of users, such as their repos.",
      link: "https://github.com/004nathan/GitHubUserSearch",
      img: "../assets/github.png",
    },
    {
      name: "Quote generator",
      description:
        "Quote generator provides a quote based on category through API calling",
      link: "https://github.com/004nathan/Quote-Generator",
      img: "../assets/quote.png",
    },
    {
      name: "Country",
      description:
        "This tool for searching country details from the Rest Countries API, such as flag, population, and neighboring countries",
      link: "https://github.com/004nathan/country-api",
      img: "../assets/team.png",
    },
    {
      name: "Weather app",
      description:
        "This weather app allows you to search for a city and fetch its weather details from an API using React.",
      link: "https://github.com/004nathan/Weather-Teller",
      img: "../assets/weather.png",
    },
  ];

  let allProjects = [
    {"name":"Pn car","img":"../assets/pncar.png","link":"https://fantastic-fairy-774a27.netlify.app/"},
    {"name":"Rock Paper","img":"../assets/rockpaper.png","link":"https://intelligentgloomymisrac.parvathi-nathan.repl.co/"},
    {"name":"Memory Game","img":"../assets/memory.png","link":"https://memory-game.parvathi-nathan.repl.co/"},
    {"name":"Todo list","img":"../assets/todo.png","link":"https://todo-assignment.parvathi-nathan.repl.co/"},
    {"name":"BMI","img":"../assets/bmi.png","link":"https://assignment-2-javascript.parvathi-nathan.repl.co/"},
    {"name":"Tip calc","img":"../assets/tip.png","link":"https://assignment-4-js.parvathi-nathan.repl.co/"},
    {"name":"Suite-landing","img":"../assets/landing.png","link":"https://suite-landingpage-1.parvathi-nathan.repl.co/"},
    {"name":"Skill","img":"../assets/skill.png","link":"https://skilled-e-learning-landing-page.parvathi-nathan.repl.co/"},
    {"name":"Video-bg","img":"../assets/video.png","link":"https://video-background-element.parvathi-nathan.repl.co/"},
    {"name":"Preview card","img":"../assets/preview.png","link":"https://preview-card-component.parvathi-nathan.repl.co/"},
    {"name":"Product-card","img":"../assets/product.png","link":"https://product-preview-card-component-assignment6.parvathi-nathan.repl.co/"},
    {"name":"Summary-card","img":"../assets/card.png","link":"https://summary-card.parvathi-nathan.repl.co/"},
    {"name":"Hangman","img":"../assets/hangman.png","link":"https://scratch.mit.edu/projects/721749971/fullscreen/"},
    {"name":"Dice","img":"../assets/dice.png","link":"https://scratch.mit.edu/projects/719345032/fullscreen/"},
    {"name":"Clock","img":"../assets/clock.png","link":"https://scratch.mit.edu/projects/717472629/fullscreen/"},
  ];
  return (
    <div className={Style.workContainer}>
      <div className={Style.headingWorkDiv}>
        <h1>Portfolio</h1>
        <div className={Style.borderAbout}></div>
      </div>
      <div className={Style.projectDiv}>
        <div className={Style.scrollDiv}>
          {projectDetails.map((ele, i) => {
            return (
              <div
                className={`${Style.projectContent} ${
                  i == 0 || i == 2 || i == 4 ? Style.animateLeft : Style.animateRight
                }`}
                key={i}
                style={{ backgroundColor: ele.color }}
              >
                <div className={Style.hoverDiv}>
                  <p>{ele.Know}</p>
                  <h2 className={Style.projectName}>{ele.name}</h2>
                  <p>{ele.nav}</p>
                </div>
                <a href={ele.link} target={"_blank"}>
                  <div className={Style.ProfileImg} id={Style.ProfileImg}>
                    <img src={ele.img} className={Style.laptop} />
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className={Style.headingWorkDiv}>
        <h1>API</h1>
        <div className={Style.borderAbout} style={{ width: "8vw" }}></div>
      </div>
      <div className={Style.projectDiv}>
        <div className={Style.scrollApiDiv}>
          {apiDetails.map((ele, i) => {
            return (
              <div
                className={Style.projectContentApi}
                key={i}
                style={{ backgroundColor: ele.color }}
              >
                <div className={Style.ProfileImgApi}>
                  <img src={ele.img} className={Style.laptop} />
                </div>
                <div className={Style.hoverDivApi}>
                  <h2>{ele.name}</h2>
                  <div className={Style.borderAboutAPi}></div>
                  <p className={Style.ApiDescription}>{ele.description}</p>
                </div>
                <div className={Style.buttonDiv}>
                  <a href={ele.link.toString()} target={"_blank"}>
                    <button className={Style.buttonNav}>Source code</button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={Style.headingWorkDiv}>
        <h1>Projects</h1>
        <div className={Style.borderAbout} style={{ width: "8vw" }}></div>
      </div>
      <div className={Style.projectDiv}>
        <div className={Style.scrollApiDiv}>
          {allProjects.map((ele, i) => {
            return (
              <div className={Style.projectContentProjectJs} key={i}>
                <div className={Style.ProfileImgApi}>
                  <img className={Style.laptop} src={ele.img} />
                </div>
                <div className={Style.hoverDivApi}>
                  <h2>{ele.name}</h2>
                  <div className={Style.borderAboutAPi}></div>

                </div>
                <div className={Style.buttonDiv}>
                  <a href={ele.link.toString()} target={"_blank"}>
                    <button className={Style.buttonNav}>Live demo</button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

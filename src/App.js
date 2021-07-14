import React from "react";
import "./styles.css";
import { ReactComponent as Logo } from "./logo.svg";

export default function App() {
  return (
    <main className="App">
      <div className="left">
        {/* Logo */}
        <div className="logo brother">
          <Logo />
          <h1 className="grey">MT</h1>
        </div>
        {/* Title */}
        <div className="title">
          <p className="name grey">MAJD TARBIN</p>
          <p className="job lightgrey">Software Engineer</p>
        </div>
        {/* Description */}
        <div className="bio">
          <p className="lightgrey">I make software and other cool things.</p>
          <p className="projects lightgrey">
            Take a look at my <span className="red">projects</span>.
          </p>
        </div>
        {/* Links */}
        <div className="links grey">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/majdtarbin/"
            className="link"
          >
            <i className="fab fa-linkedin" />
            <p className="name grey">Linkedin</p>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/majicmaj"
            className="link"
          >
            <i className="fab fa-github-square" />
            <p className="name grey">Github</p>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:majd.tarbin@outlook.com"
            className="link"
          >
            <i className="fas fa-envelope-square" />
            <p className="name grey">Email</p>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/document/d/1uw7_gVxiDBU9Mhz8NAGxev6NMSL-kn0OaPv8t0zYxlE/edit?usp=sharing"
            className="link"
          >
            <i className="fas fa-square" />
            <p className="name grey">Resume</p>
            <i className="fas fa-file free white" />
          </a>
        </div>
      </div>
      {/* Right */}
      <div className="right">
        <div className="project">
          <img src="https://i.imgur.com/OkSQ4s9.png" alt="Skyguide.me" />
          <div className="description">
            <h2 className="grey">SkyGuide.me</h2>
            <p className="lightgrey">
              The second iternation of my Sky Guide Weather App as a Progressive
              Web App. Skyguide.me caters to casual and enuthiast users alike.
            </p>
            <div className="buttons">
              <a href="https://www.skyguide.me/">DEMO</a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src="https://i.imgur.com/kutunfK.png" alt="Sky Guide" />
          <div className="description">
            <h2 className="grey">Sky Guide</h2>
            <p className="lightgrey">
              Weather App oriented around Stargazers and Astronomers.
            </p>
            <div className="buttons">
              <a href="https://skyguide.netlify.app/">DEMO</a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src="https://i.imgur.com/wCXB69T.png" alt="200px" />
          <div className="description">
            <h2 className="grey">Contact Entry System</h2>
            <p className="lightgrey">
              REST API that allows for CRUD operations on a Contact Entry System
            </p>
            <div className="buttons">
              <a href="https://github.com/majicmaj/contactEntrySystem">REPO</a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src="https://i.imgur.com/mUfKI72.png" alt="200px" />
          <div className="description">
            <h2 className="grey">Perlin Noise Algorithm Visualization</h2>
            <p className="lightgrey">
              Perlin noise visualized algorithm that demonstrates sample terrain
              generation built with processing
            </p>
            <div className="buttons">
              <a href="https://github.com/majicmaj/data_visiualization">REPO</a>
              <a href="https://www.youtube.com/watch?v=GwPkL6ZW1K4&feature=youtu.be">
                DEMO
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src="https://i.imgur.com/e2OpzIR.png" alt="200px" />
          <div className="description">
            <h2 className="grey">Team builder</h2>
            <p className="lightgrey">
              Team builder with real-time graphical statistic representation of
              strengths and weaknesses
            </p>
            <div className="buttons">
              <a href="https://github.com/majicmaj/lol-builder/tree/master/lolclient">
                REPO
              </a>
              <a href="https://lolbuilder.netlify.com/">DEMO</a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src="https://i.imgur.com/GCCTcOa.png" alt="200px" />
          <div className="description">
            <h2 className="grey">Silver Shack</h2>
            <p className="lightgrey">
              Silver coins, bullion, and similar collectibles retailer online
              shop.
            </p>
            <div className="buttons">
              <a href="https://github.com/majicmaj/SilverShack">REPO</a>
              <a href="https://silvershackcoins.netlify.com/">DEMO</a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src="https://i.imgur.com/Je4VNTZ.png" alt="200px" />
          <div className="description">
            <h2 className="grey">Legend API</h2>
            <p className="lightgrey">
              Simplified version of DataDragon API hosted on Heroku with custom
              create, read, update, and delete request calls
            </p>
            <div className="buttons">
              <a href="https://lolbuilder.herokuapp.com/">REPO</a>
              <a href="https://github.com/majicmaj/lol-builder/tree/master/server">
                DEMO
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src="https://i.imgur.com/rfTNVP6.png" alt="200px" />
          <div className="description">
            <h2 className="grey">Rocketball</h2>
            <p className="lightgrey">
              Browser-based two player 2D game played with rocket-powered cars
              and a giant soccerball based on Rocket League built with pure
              Html, CSS, and Javascript.
            </p>
            <div className="buttons">
              <a href="https://github.com/majicmaj/rocketball">REPO</a>
              <a href="https://majicmaj.github.io/">DEMO</a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src="https://i.imgur.com/KjE27c6.png" alt="200px" />
          <div className="description">
            <h2 className="grey">Majcraft</h2>
            <p className="lightgrey">
              A modification to the popular game Minecraft that adds items from
              a tabletop game (Dungeons and Dragons) to the game and new ways of
              gameplay.
            </p>
            <div className="buttons">
              <a href="https://github.com/majicmaj/majcraft">REPO</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

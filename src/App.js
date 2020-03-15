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
            Take a look at my<span className="red">projects</span>.
          </p>
        </div>
        {/* Links */}
        <div className="links grey">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/majdtarbin/"
            className="link"
          >
            <i className="fab fa-linkedin" />
            <p className="name grey">linkedin</p>
          </a>
          <a
            target="_blank"
            href="https://github.com/majicmaj"
            className="link"
          >
            <i className="fab fa-github-square" />
            <p className="name grey">github</p>
          </a>
          <a
            target="_blank"
            href="mailto:majd.tarbin@outlook.com"
            className="link"
          >
            <i className="fas fa-envelope-square" />
            <p className="name grey">email</p>
          </a>
          <a
            target="_blank"
            href="https://docs.google.com/document/d/1qYfsRJQKakCCFOXuo0RbY3Acb6nvdr593-cC-ZMviig/edit?usp=sharing"
            className="link"
          >
            <i className="fas fa-square" />
            <p className="name grey">resume</p>
            <i className="fas fa-file free white" />
          </a>
        </div>
      </div>
      {/* Right */}
      <div className="right">
        <div className="project">
          <img src="https://i.imgur.com/mUfKI72.png" alt="200px" />
          <div className="description">
            <h2 className="grey">Perlin Noise Algorithm Visualization</h2>
            <p className="lightgrey">
              Perlin noise visualized algorithm that demonstrates sample terrain
              generation built with processing
            </p>
            <div className="buttons">
              <a href="https://github.com/majicmaj/data_visiualization">Repo</a>
              <a href="https://www.youtube.com/watch?v=GwPkL6ZW1K4&feature=youtu.be">
                Demo
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
                Repo
              </a>
              <a href="https://lolbuilder.netlify.com/">Demo</a>
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
              <a href="https://github.com/majicmaj/SilverShack">Repo</a>
              <a href="https://silvershackcoins.netlify.com/">Demo</a>
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
              <a href="https://lolbuilder.herokuapp.com/">Repo</a>
              <a href="https://github.com/majicmaj/lol-builder/tree/master/server">
                Demo
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
              <a href="https://github.com/majicmaj/rocketball">Repo</a>
              <a href="https://majicmaj.github.io/">Demo</a>
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
              <a href="https://github.com/majicmaj/majcraft">Repo</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
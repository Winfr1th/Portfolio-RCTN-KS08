import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import profile from "../img/profile.png";
class Home extends Component {
  render() {
    return (
      <div className="pages-container home" id="home">
        <img src={profile} alt="Profile" />
        <h1>
          Hello👋
          <br /> Welcome to my portfolio website!
        </h1>
        <h2>Check out my social medias</h2>
        <div className="icon-container">
          <a href="https://github.com/Winfr1th">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.instagram.com/_zirl/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    );
  }
}

export default Home;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs } from "@fortawesome/free-brands-svg-icons";
import { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div className="pages-container">
        <h1>Skills</h1>
        <ul>
          <li>
            HTML <FontAwesomeIcon icon={faHtml5} />
          </li>
          <li>
            CSS <FontAwesomeIcon icon={faCss3} />
          </li>
          <li>
            JavaScript <FontAwesomeIcon icon={faJs} />
          </li>
        </ul>
      </div>
    );
  }
}

export default Skills;

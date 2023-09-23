import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yash Gupta </span>
            from <span className="purple">Delhi, India.</span>
            <br /> I am a final year student pursuing an B-Tech
            in Information Technology from GGSIPU, Delhi.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Consistancy does not give you success, but consistancy plus improving the success rate of your daily routine does  "{" "}
          </p>
          <footer className="blockquote-footer">yash</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

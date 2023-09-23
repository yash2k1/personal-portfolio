import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import toDo from "../../Assets/Projects/toDo.png";
import resumeBuilder from "../../Assets/Projects/resumeBuilder.png";
import redpositive from "../../Assets/Projects/redpostive.png";
import siren from "../../Assets/Projects/siren.png";
import clock from "../../Assets/Projects/clock.png";
import event from "../../Assets/Projects/event.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* siren news */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={siren}
              isBlog={false}
              title="siren news"
              description="I developed a high-performing website using React, Express, and Node JS. The website features advanced techniques such as Context API, Memo, and HOCs, which optimize data utilization and result in a better user experience. Additionally, I implemented login and signup features using bcrypt for password hashing and JWT token."
              ghLink="https://github.com/yash2k1/newsWebsite.git"
              demoLink="https://yash-siren-news.netlify.app/"
            />
          </Col>
          {/* EventBuzz */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={event}
              isBlog={false}
              title="EventBuzz"
              description="Created an event planning website to facilitate the smoothness of event planning process.
              Includes functionalities like getting mail from clients/users for the service requests.
              Worked in a team of college tech group and learned about engaging with team members in a project
              "
              ghLink="https://github.com/yash2k1/event_buzz.git"
              demoLink="https://musical-travesseiro-fae6ee.netlify.app/"
            />
          </Col>
{/* Redpositive */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={redpositive}
              isBlog={false}
              title="Redpositive"
              description="Developed a responsive Redpositive clone using React JS. It comes
              with features such as receiving emails"
              ghLink="https://github.com/yash2k1/redpositive.git"
              demoLink="https://yash-redpositive-clone.netlify.app/"              
            />
          </Col>

{/* resume-builder */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resumeBuilder}
              isBlog={false}
              title="resume-builder"
              description="Resume Builder project will help to build your resume by auto-generating it on your own with the skill set input and information about the user. It also helps working professionals with the same using ReactJS and NodeJS frameworks."
              ghLink="https://github.com/yash2k1/resume-builder.git"
            />
          </Col>
          {/* To Do */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={toDo}
              isBlog={false}
              title="To-Do list"
              description="To establish a routine, I built a vanilla JS todo website that involved DOM manipulation and helped me understand JavaScript."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://yash2k1.github.io/Todo-App-JS/"
            />
          </Col>
{/* Reminder-Clock-App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clock}
              isBlog={false}
              title="Reminder-Clock-App"
              description="While developing this Reminder Clock Project, I got to work on multiple HTML tags, and various CSS properties. Most importantly I got introduced with the functions required for DOM manipulation. Also how to add dynamic HTML using JS and Date function of JS."
              ghLink="https://github.com/yash2k1/Reminder-Clock-App.git"
              demoLink="https://yash2k1.github.io/Reminder-Clock-App/"     
              //  <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

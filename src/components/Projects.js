import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Dog-Vision",
      description: "Machine Learning, Deep Learning, Computer Vision, TensorFlow",
      imgUrl: projImg1,
      link : "https://drive.google.com/drive/u/1/folders/19vjJ0-g9sDbrE3BolnD_slKNDh5cDRHk"
    },
    {
      title: "Heart Disease Detection",
      description: "Data Science, Machine Learning",
      imgUrl: projImg3,
      link : "https://github.com/Praharsh0407/Heart_disease_project"
    },
    {
      title: "Law Verdict Generator",
      description: "Machine Learning, Natural Language Processing, AWS Cloud",
      imgUrl: projImg2,
      link : "https://github.com/Cyriloo7/VerdictHub"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>My portfolio features projects in Data Science, Data Analytics and Machine Learning. Each represents my dedication to innovation across different fields.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
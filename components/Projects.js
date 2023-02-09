import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ActionAreaCard } from "./DetailCard";
import "animate.css";
import TrackVisibility from "react-on-screen";
// import Image from "next/image";

export const Projects = () => {
  const projects = [
    {
      title: "Website Development",
      description: "Design & Development",
      image: "/Devices-bro.svg",
    },

    {
      title: "Game Development",
      description: "Design & Development in progress",
      image: "/Demo-bro.svg",
    },
    {
      title: "Productivity Applications",
      description: "Design & Development in progress",
      image: "/Notes-bro.svg",
    },
  ];
  const CaseStudy = [
    {
      title: "Website Portfolio",
      purpose: "To showcase my skills and progress as a novice developer",
      process: "",
    },
  ];
  return (
    <section className="project py-5 px-3" id="projects">
      <Container>
        <Row>
          <Col size={10}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Towards the end of 2022 I decided to take some time off to
                    obtain new technical skills. Since then, I have had the
                    opportunity to work on a diverse range of projects, each
                    with its own set of challenges and opportunities. From
                    developing engaging and interactive mobile games, to
                    building productivity applications that streamline business
                    processes, to designing and developing professional
                    websites, I have honed my skills to deliver high-quality and
                    visually appealing projects. My portfolio includes a mix of
                    different types of projects, all of which were designed to
                    help me learn programming and showcase my versatility and
                    experience as a web developer. Here are a few examples of my
                    work that highlights my skills in game development,
                    productivity application, and website development
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Detail</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Documentation</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {CaseStudy.map((CaseStudy, index) => {
                            return (
                              <ActionAreaCard key={index} {...CaseStudy} />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          All documentation relating to my projects can be found
                          in my GitHub.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

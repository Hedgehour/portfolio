import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Website Development",
    description: "Design & Development",
    image: "/Devices-bro.svg",
    link: "/projects/web-dev",
  },

  {
    title: "Game Development",
    description: "Design & Development in progress",
    image: "/Demo-bro.svg",
    link: "/projects/game-dev",
  },
  {
    title: "Database Architecture",
    description: "Design & Development",
    image: "/Notes-bro.svg",
    link: "/projects/dbarch-dev",
  },
];

export const Projects = () => {
  return (
    <section className="project py-5 px-3" id="projects">
      <Container>
        <Row style={{ marginLeft: 0 }}>
          <Col size={12}>
            <h2>Projects</h2>
            <p>
              In late 2022, I embarked on a period of skill enhancement, which
              led to diverse project experiences. I{"'"}ve created engaging
              mobile games, delved into database architecture and design. My
              portfolio showcases my versatility and experience as a web
              developer. Examples of my work span game development, database
              architecture, and web design.
            </p>
            <Row>
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

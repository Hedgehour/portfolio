import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";


const projects = [
  {
    title: "Website Development",
    description: "Design & Development",
    image: "/Devices-bro.svg",
    link:'/projects/web-dev'
  },

  {
    title: "Game Development",
    description: "Design & Development in progress",
    image: "/Demo-bro.svg",
    link: '/projects/game-dev'
  
  },
  {
    title: "Database Architecture",
    description: "Design & Development",
    image: "/Notes-bro.svg",
    link:'/projects/dbarch-dev'
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
              Towards the end of 2022 I decided to take some time off to obtain
              new technical skills. Since then, I have had the opportunity to
              work on a diverse range of projects, each with its own set of
              challenges and opportunities. From developing engaging and
              interactive mobile games, to building productivity applications
              that streamline business processes, to designing and developing
              professional websites, I have honed my skills to deliver
              high-quality and visually appealing projects. My portfolio
              includes a mix of different types of projects, all of which were
              designed to help me learn programming and showcase my versatility
              and experience as a web developer. Here are a few examples of my
              work that highlights my skills in game development, productivity
              application, and website development
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

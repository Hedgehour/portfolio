import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import meter1 from "../Assets/meter1.svg";
// import meter2 from "../Assets/meter1.svg";
// import meter3 from "../Assets/meter1.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="Skill-bx wow zoomIn"></div>
          </div>
        </div>
        <Row>
          <Col className="px-0">
            <div className="skill-bx px-3">
              <h2>Skills</h2>
              <p className="py-3">
                As a developer, I have a wide range of skills that enable me to
                create functional and visually pleasing web applications. From
                front-end development to back-end programming, I have the
                ability to create dynamic and efficient online experiences. Here
                is a list of some of my key skills that I bring to the table:
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <i className="devicon-react-original-wordmark dev-icon"></i>
                </div>
                <div className="item">
                  <i className="devicon-nextjs-original-wordmark colored dev-icon"></i>
                </div>

                <div className="item">
                  <i className="devicon-javascript-plain dev-icon"></i>
                </div>
                <div className="items">
                <i className="devicon-html5-plain-wordmark dev-icon "></i>
                </div>
                <div className="items">
                  <i className="devicon-css3-plain-wordmark dev-icon"></i>
                </div>
                <div className="items">
                  <i className="devicon-bootstrap-plain-wordmark dev-icon"></i>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </div>
      <img className="background-image-left" src={""}></img>
    </section>
  );
};

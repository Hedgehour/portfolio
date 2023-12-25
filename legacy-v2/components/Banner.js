import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "./Assets/Hedgelogo.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import Image from "next/image";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Web Developer.",
    "SQL Developer.",
    "Business Analyst.",
    "Cybersecurity Enthusiast.",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText == fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline"> Welcome to my Portfolio</span>
                  <h1>
                    {"Hello I'm Hyejee, "} <span className="wrap"> {text}</span>
                  </h1>
                  <h5>
                    From analyzing business trends to creating website gems, I
                    have rolled up tight and transformed into the hedgehog of
                    web development, bringing my business acumen to the digital
                    world!
                  </h5>
                  <p>
                    I'm Hyejee, also known as HedgeHour, the web development
                    enthusiast. While I'm relatively new to the field, I offer a
                    fresh perspective and a strong desire to learn and innovate.
                    As a novice web developer, I've already crafted functional
                    and visually appealing websites and applications. I'm a team
                    player, eager to collaborate and enhance my skills through
                    colleagues' insights.
                  </p>
                  <p>
                    When I am not coding, I enjoy spending time with my three
                    (3) Siberian huskies and coming up with delicious new
                    recipes! If you are looking for a web developer who is eager
                    to learn and bring a touch of creativity and charm to
                    everything I do, look no further!
                  </p>
                  <a href="#connect">
                    <button>
                      Let&apos;s connect <ArrowRightCircle size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={4}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <Image src={Logo} alt="Header" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

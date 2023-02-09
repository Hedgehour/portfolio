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
                    From analyzing business trends to creating website gems,
                    I have rolled up tight and transformed into the
                    hedgehog of web development, bringing my business acumen
                    to the digital world!
                  </h5>
                  <p>
                    I am Hyejee (aka HedgeHour), the hedgehog of web
                    development. I may be new to the game, but I bring a fresh
                    perspective to every project and I am eager to learn new
                    things and find innovative solutions. As a novice web
                    developer, I am still learning the ropes, but I have already
                    been able to create functional and visually pleasing
                    websites and various applications. I am a team player and I
                    am always looking for ways to learn from my collogues and
                    improve my skills.
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

import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import icon1 from "../../Assets/icon1.svg";
import icon2 from "../../Assets/icon2.svg";
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home" style={{ color: "white" }}>
          HedgeHour
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
              style={{ color: "white" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
              style={{ color: "white" }}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
              style={{ color: "white" }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#resume"
              className={
                activeLink === "resume" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("resume")}
              style={{ color: "white" }}
            >
              Resume
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/hyejee-ellis-b5326414b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={icon1} alt="" />
              </a>
              <a
                href="https://github.com/Hedgehour"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={icon2} alt="" />
              </a>
            </div>
            <a href= "#connect"> <button className="vvd" onClick={() => console.log("connect")}>
              <span>Let's Connect</span> </button></a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

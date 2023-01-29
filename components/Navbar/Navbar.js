import React, { useState, useEffect } from "react";
// import Image from "next/image";
import { Navbar, Container, Nav } from "react-bootstrap";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => setScrollY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrollY >= 50 ? "scrolled" : ""}>
      <div
        className="d-flex justify-content-between align-items-center px-4 py-2"
        style={{ width: "100%" }}
      >
        <Navbar.Brand href="#home" style={{ color: "//#endregion616f76" }}>
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
              style={{ color: "//#endregion616f76" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
              style={{ color: "//#endregion616f76" }}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
              style={{ color: "//#endregion616f76" }}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/hyejee-ellis-b5326414b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="linkedin-icon" />
              </a>
              <a
                href="https://github.com/Hedgehour"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className="Gethub-icon" />
              </a>
            </div>
            <a href="#connect">
              <button className="vvd" onClick={() => console.log("connect")}>
                <span>Let&apos;s Connect</span>{" "}
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

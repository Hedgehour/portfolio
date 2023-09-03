import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useRouter } from "next/router";
import Link from "next/link";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();

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
        <Navbar.Brand>
          <Link href="/" className="nav-link" style={{ color: "//#endregion616f76" }}>
            HedgeHour
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {router.pathname === "/" ? (
              <>
                <Link
                  href="/"
                  className={
                    activeLink === "home" ? "active navbar-link nav-link nav-link" : "navbar-link nav-link nav-link"
                  }
                  onClick={() => onUpdateActiveLink("home")}
                  style={{ color: "//#endregion616f76" }}
                >
                  Home
                </Link>
                <Link
                  href="#skills"
                  className={
                    activeLink === "skills"
                      ? "active navbar-link nav-link"
                      : "navbar-link nav-link"
                  }
                  onClick={() => onUpdateActiveLink("skills")}
                  style={{ color: "//#endregion616f76" }}
                >
                  Skills
                </Link>
                <Link
                  href="#projects"
                  className={
                    activeLink === "projects"
                      ? "active navbar-link nav-link"
                      : "navbar-link nav-link"
                  }
                  onClick={() => onUpdateActiveLink("projects")}
                  style={{ color: "//#endregion616f76" }}
                >
                  Projects
                </Link>
              </>
            ) : null}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/hyejee-ellis-m-s-b5326414b"
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

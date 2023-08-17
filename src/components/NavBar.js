import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import { images } from "../constants";
import { NavLink } from "react-bootstrap";

const fileUrl =
  "https://firebasestorage.googleapis.com/v0/b/tusharkalbhande-c84e5.appspot.com/o/Tushar_Kalbhande.pdf?alt=media&token=fdff2805-8662-452f-9a9d-71cc6e67c0c6";
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const downloadFileAtUrl = (url) => {
    // fetch(url)
    //   .then((response) => response.blob())
    //   .then((blob) => {
    //     const blobUrl = window.URL.createObjectURL(new Blob([ blob ]));
    //     const fileName = "Tushar_Kalbhande.pdf";
    //     const aTag = document.createElement("a");
    //     aTag.href = blobUrl;
    //     aTag.setAttribute("download", fileName);
    //     document.body.appendChild(aTag);
    //     aTag.click();
    //     aTag.remove();
    //   });
    const fileName = "Tushar_Kalbhande.pdf";
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : "mobile"}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={images.logo} width={220} height={50} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}>
              Intro
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}>
              Skills
            </Nav.Link>

            <Nav.Link
              href="#project"
              className={
                activeLink === "project" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("project")}>
              Projects
            </Nav.Link>
            <Nav.Link
              href="#connect"
              className={
                activeLink === "connect" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("connect")}>
              Connect
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/kalbhande/" target="_blank">
                <img src={images.navIcon1} alt="Linked In"></img>
              </a>
              <a href="https://github.com/Tushar1805/" target="_blank">
                <img src={images.navIcon2} alt="Github"></img>
              </a>
              <a
                href="https://www.instagram.com/tushar_kalbhande/"
                target="_blank">
                <img src={images.navIcon3} alt="Instagram"></img>
              </a>
            </div>
            <NavLink href={fileUrl} target="_blank" className="button">
              <span>Resume / CV</span>
            </NavLink>
            {/* <button
              className="vvd"
              onClick={() => {
                downloadFileAtUrl(fileUrl);
              }}>
              <span>Resume / CV</span>
            </button> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

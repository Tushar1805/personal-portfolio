import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/gitNav.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { FaHome, FaMailBulk, FaMailchimp, FaPhone } from "react-icons/fa";
import { NavLink } from "react-bootstrap";

const fileUrl =
  "https://firebasestorage.googleapis.com/v0/b/tusharkalbhande-c84e5.appspot.com/o/Tushar_Kalbhande.pdf?alt=media&token=fdff2805-8662-452f-9a9d-71cc6e67c0c6";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6} className="text-center text-sm-start">
            <img
              className="logo"
              src={logo}
              // width={220}
              // height={50}
              alt="Logo"
            />
            <div className="info">
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 9673072109
            </div>
            <div className="info">
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              tushkwork@gmail.com
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end  ">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/kalbhande/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/Tushar1805">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/tushar_kalbhande/">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <div className="resume">
              <NavLink href={fileUrl} target="_blank" className="button">
                <span>Resume / CV</span>
              </NavLink>
            </div>

            <p>
              Thank You! With Love
              <br />
              Tushar
            </p>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

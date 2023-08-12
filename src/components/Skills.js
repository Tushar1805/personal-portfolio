import flutter from "../assets/img/flutter.svg";
import firebase from "../assets/img/firebase.svg";
import react from "../assets/img/react.svg";
import cpp from "../assets/img/c++.svg";
import dart from "../assets/img/dart.svg";
import java from "../assets/img/java.svg";
import python from "../assets/img/python.svg";
import git from "../assets/img/git.svg";
import github from "../assets/img/github.svg";
import postman from "../assets/img/postman.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

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
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Through hands-on experience and a commitment to staying at the
                forefront of technological advancements, I have refined my
                skills in creating seamless user experiences, optimizing app
                performance, and collaborating seamlessly within
                interdisciplinary teams.<br></br> Following are the skills that have empowered
                me to thrive in the realm of software engineering.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={flutter} alt="Image" />
                  <h5>Flutter</h5>
                </div>
                <div className="item">
                  <img src={firebase} alt="Image" />
                  <h5>Firebase</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>ReactJs</h5>
                </div>
                <div className="item">
                  <img src={cpp} alt="Image" />
                  <h5>C/C++</h5>
                </div>
                <div className="item">
                  <img src={dart} alt="Image" />
                  <h5>Dart</h5>
                </div>
                <div className="item">
                  <img src={java} alt="Image" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={python} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={git} alt="Image" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={github} alt="Image" />
                  <h5>GitHub</h5>
                </div>
                <div className="item">
                  <img src={postman} alt="Image" />
                  <h5>Postman</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

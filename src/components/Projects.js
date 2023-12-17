import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/smart.webp";
// import robot from "../assets/img/robot.jpg";
import mahindracsc from "../assets/img/mahindracsc.png";
import prism from "../assets/img/prism.png";
import cremate from "../assets/img/cremate.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Projects = () => {
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
  const projects = [
    {
      title: "Recruit Me",
      description:
        "Developed a mobile app facilitating job posting using Flutter framework.Implemented BLoC/Cubit for efficient state management and Firestore as the backend database, reducing app loading time by 20%.",
      imgUrl: projImg1,
      // view: "https://www.miq.in/business-excellence-model/principle-of-mahindra/",
      view: "https://github.com/Tushar1805/recruit_me",
      source: "",
    },
    {
      title: "News App",
      description:
        "Developed a News App integrating Provider state management, resulting in a 25% improvement in app responsiveness. Utilized REST API to establish a robust connection with the News API, ensuring up-to-date and accurate news content.",
      imgUrl: projImg1,
      // view: "https://www.miq.in/business-excellence-model/principle-of-mahindra/",
      view: "https://github.com/Tushar1805/news_app",
      source: "",
    },
    {
      title: "Cinemania",
      description:
        "Demonstrated strong UI development skills, resulting in a project that closely mirrors the visual appeal of the original Netflix app.",
      imgUrl: projImg1,
      // view: "https://www.miq.in/business-excellence-model/principle-of-mahindra/",
      view: "https://github.com/Tushar1805/cinemania",
      source: "",
    },
    // {
    //   title: "S.M.A.R.T.",
    //   description:
    //     "A fully customisable Safety Management, Analysis, Reporting & Tracking (S.M.A.R.T.) mobile app specifically focused towards workplace health & safety in a manufacturing plant.",
    //   imgUrl: projImg1,
    //   view: "https://drive.google.com/file/d/1zoz99w3VE8f8YEEAICROvCsYK1g9IM-8/view?usp=sharing",
    //   source:
    //     "https://drive.google.com/file/d/1zoz99w3VE8f8YEEAICROvCsYK1g9IM-8/view?usp=sharing",
    // },
    // {
    //   title: "Home Assess",
    //   description:
    //     "More often patients express their desire to stay in their own homes after being treated for an illness or physical condition. So, The app will monitor them to ensure their safety, well-being, and happiness",
    //   imgUrl: projImg1,
    //   view: "https://github.com/Tushar1805/Home_Assessment",
    //   source:
    //     "https://drive.google.com/file/d/1OojnvukOPe0UUDqw9kCkGEOum5GQLHrT/view?usp=sharing",
    // },
    // {
    //   title: "TMSW Portal",
    //   description:
    //     "This the admin portal built for The Mahindra Safety Way where they have admin features of Safety Management, Analysis, Reporting & Tracking ",
    //   imgUrl: projImg1,
    //   // view: "https://www.miq.in/business-excellence-model/principle-of-mahindra/",
    //   view: "https://mahindracsc-e5468.web.app/#/",
    //   source: "https://mahindracsc-e5468.web.app/#/",
    // },

    {
      title: "Crematorium Management System",
      description:
        "The app was built during the period of covid-19 where it is used to find the nearby available creamatoriums. User can also book the slots as well",
      imgUrl: projImg1,
      view: "https://github.com/Tushar1805/crematorium_management_system",
      source: "",
    },
    // {
    //   title: "Multifunctional Robot",
    //   description:
    //     "The bot helps to reach the mining and fire safety sectors. It focuses on reaching the parts in mines where direct human involvement is life-threatening and needs a primitive lookout of the intended workspace before practical implementation.",
    //   imgUrl: robot,
    //   view: "",
    //   source: "",
    // },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }>
                  <h2>Projects</h2>
                  <p>
                    My approach is driven by a passion for innovation, a
                    commitment to quality, and a desire to contribute to
                    meaningful solutions that enhance the lives of users. With
                    this foundation, I am excited to share some of the projects
                    that showcase my abilities and reflect my dedication to
                    pushing the boundaries of what technology can achieve
                  </p>
                  {/* <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          Projects Undertaken
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Personal Projects</Nav.Link>
                      </Nav.Item>
                    </Nav> 
                    <Tab.Content
                    id="slideInUp"
                    className={
                      isVisible ? "animate__animated animate__slideInUp" : ""
                    }
                    >
                      <Tab.Pane eventKey="first">
                        <Carousel
                          responsive={responsive}
                          infinite={false}
                          className="owl-carousel owl-theme project-slider">
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Carousel>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Carousel
                          responsive={responsive}
                          infinite={true}
                          className="owl-carousel owl-theme project-slider">
                          {personalProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Carousel>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container> */}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <div>
        <Carousel
          responsive={responsive}
          infinite={true}
          className="owl-carousel owl-theme project-slider">
          {projects.map((project, index) => {
            return <ProjectCard key={index} {...project} />;
          })}
        </Carousel>
      </div>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};

import meter1 from "../assets/img/python.webp";
import meter2 from "../assets/img/java.webp";
import meter3 from "../assets/img/c.webp";
import meter4 from "../assets/img/cpp.webp";
import meter5 from "../assets/img/sql.webp";
import meter6 from "../assets/img/html.webp";
import meter7 from "../assets/img/DataStructures.png";
import meter8 from "../assets/img/NLP.webp";
import meter9 from "../assets/img/Vision.png";
import meter10 from "../assets/img/tensorflow.png";
import meter11 from "../assets/img/DataAnalytics.webp";
import meter12 from "../assets/img/DataScience.png";
import meter13 from "../assets/img/ML.webp";
import meter14 from "../assets/img/Git.webp";
import meter15 from "../assets/img/Azure.jpeg";
import meter16 from "../assets/img/Aws.png";
import meter17 from "../assets/img/salesforce.png";
import meter18 from "../assets/img/excel.webp";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p> I offer a broad skill set, whether it's designing intuitive user experiences or developing solutions for intricate systems, I excel in taking on new challenges and mastering different fields.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter7} alt="Image" />
                  <h5>Data Structures</h5>
                </div>
                <div className="item">
                  <img src={meter11} alt="Image" />
                  <h5>Data Analytics</h5>
                </div>
                <div className="item">
                  <img src={meter12} alt="Image" />
                  <h5>Data Science</h5>
                </div>
                <div className="item">
                  <img src={meter13} alt="Image" />
                  <h5>Machine Learning</h5>
                </div>
                <div className="item">
                  <img src={meter10} alt="Image" />
                  <h5>TensorFlow</h5>
                </div>
                <div className="item">
                  <img src={meter8} alt="Image" />
                  <h5>Natural Language Processing</h5>
                </div>
                <div className="item">
                  <img src={meter9} alt="Image" />
                  <h5>Computer Vision</h5>
                </div>
                <div className="item">
                  <img src={meter15} alt="Image" />
                  <h5>Azure Cloud</h5>
                </div>
                <div className="item">
                  <img src={meter16} alt="Image" />
                  <h5>AWS Cloud</h5>
                </div>
                <div className="item">
                  <img src={meter17} alt="Image" />
                  <h5>Salesforce Cloud</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>C</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="Image" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="Image" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter14} alt="Image" />
                  <h5>Github</h5>
                </div>
                <div className="item">
                  <img src={meter18} alt="Image" />
                  <h5>Microsoft Excel</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
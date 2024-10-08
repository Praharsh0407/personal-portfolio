import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imgUrl} alt={title} style={{ width: '415px', height: '200px' }} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span><strong>{description}</strong></span>
          </div>
        </a>
      </div>
    </Col>
  )
}

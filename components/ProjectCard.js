import { Col } from "react-bootstrap";
import Image from "next/image";

export const ProjectCard = ({ title, description, image }) => {
  return (
    <Col size={8} sm={4} md={4}>
      <div className="proj-imgbx"><Image
          src={image}
          alt="Image for project cards"
          width={200}
          height={200}
          />
        </div>
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </Col>
  );
};

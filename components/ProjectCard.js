import { Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

export const ProjectCard = ({ title, description, image, link }) => {
  return (
    
      <Col size={8} sm={4} md={4}><Link href={link}>
        <div className="proj-imgbx">
          <Image
            src={image}
            alt="Image for project cards"
            width={200}
            height={250}
          />
        </div>
        <div className="proj-txtx" >
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        </Link> </Col>
    
  );
};

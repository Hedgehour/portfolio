import { Container, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <p>Copyright 2023 HedgeHour. All Rights Reserved</p>

          <a
            className="Other-art"
            href="https://storyset.com/work"
            target="_blank"
            rel="noopener noreferrer"
          >
            Work illustrations by Storyset{" "}
          </a>
        </Row>
      </Container>
    </footer>
  );
};

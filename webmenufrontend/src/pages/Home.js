import { Button, Container, Row, Col, Image } from "react-bootstrap";
import React from "react";
import MainLayout from "../layouts/MainLayout";

const Home = () => (
  <MainLayout>
    <div className="jumbotron">
      <Container>
        <Row>
          <Col md={6} className="my-auto">
            <h1>
              <b>DIGITAL QR MENU</b>
            </h1>
            <h5
              className="mt-4 mb-4"
              style={{ position: "relative", zIndex: "1" }}
            >
              Bulding digital QR menu!
            </h5>
            <h5 className="mt-4 mb-4">
              A smart way to share your digital menu in a QR Code with your
              customers .<br></br>
              Covid has changed the world !! Its time you change the way of
              showing your menu !
            </h5>
            <br />
            <Button href="/places" variant="dark" size="lg">
              Create Your Menu
            </Button>
          </Col>
          <Col md={6}>
            <Image
              src="https://res.cloudinary.com/dtde3o5xe/image/upload/v1649927114/Digital_QR_Menu_800_800_px_1000_700_px_2_zvebib.png"
              rounded
              fluid
            />
          </Col>
        </Row>
      </Container>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#00cba9"
        fill-opacity="1"
        d="M0,320L26.7,277.3C53.3,235,107,149,160,128C213.3,107,267,149,320,186.7C373.3,224,427,256,480,272C533.3,288,587,288,640,245.3C693.3,203,747,117,800,112C853.3,107,907,181,960,186.7C1013.3,192,1067,128,1120,96C1173.3,64,1227,64,1280,90.7C1333.3,117,1387,171,1413,197.3L1440,224L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
      ></path>
    </svg>
  </MainLayout>
);

export default Home;

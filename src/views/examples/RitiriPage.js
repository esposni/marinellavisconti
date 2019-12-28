import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";
// import { Link } from "react-router-dom";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import RitiriPageHeader from "components/Headers/RitiriPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import FormMessage from"components/FormMessage.js";

// import AlertDialogSlide from "components/PopUpButton.js";

export default function RitiriPage() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <RitiriPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
              
                <h2 className="title">Ritiri Laboratori</h2>
                <h5 align="left">Ritiro laboratorio ad offerta libera presso il B&B Creatività Natura e Salute dal 27 al 29 marzo 2020</h5>
             
              </Col>
            </Row>
          
          </Container>
        </div>

        <FormMessage/>
        <DefaultFooter />
      </div>
    </>
  );
}


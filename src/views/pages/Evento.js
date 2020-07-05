import React from "react";

// reactstrap components
import {
  // Button,
  Container,
  Row,
  Col
} from "reactstrap";
// import { Link } from "react-router-dom";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import PageHeader from "components/Headers/PageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import FormMessage from"components/FormMessage.js";
// import AlertDialogSlide from "components/PopUpButton.js";
// import { isPropertySignature } from "typescript";



// import AlertDialogSlide from "components/PopUpButton.js";

export default function EventoPage(props) {

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
      <PageHeader title="Ritiri Laboratori" image="budda-face.jpeg" />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
              
                <h2 className="title">Ritiri Laboratori</h2>
 
                <h2 className="">{props.title}</h2>
                <h5 align="center"><strong>{props.conduttori}</strong><br/><br/></h5>
                <h5 align="center"><strong>{props.date}</strong><br/></h5>
                {/* <img
                      alt="..."
                      src={require(props.image)}
                    ></img><br/><br/> */}
                     <h5 align="left">{props.text}</h5>

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


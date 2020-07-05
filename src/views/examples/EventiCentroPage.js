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
// import AlertDialogSlide from "components/PopUpButton.js";
import DataFormMessage from"components/DataFormMessage.js";

export default function EventiCentroPage() {

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
        <PageHeader image="ciotola.jpeg" 
        title="Eventi al centro mindfulness milano" />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                
               
              <h2 className="title">LA PRATICA CONTEMPLATIVA NELLA VITA QUOTIDIANA</h2>
                <h5 align="center">Condotto da Marinella Visconti</h5>
              <h5 align="left">
              Essere consapevoli vuol dire essere qui, pienamente coscienti….ti rapporti direttamente alla situazione attuale, e ciò è precisamente tutto ciò che concerne la meditazione…semplicemente essere qui, comportandosi con molta accuratezza, completamente in relazione con il presente, senza riserve….C. Trungpa
</h5>  
<h5 align="left">Siate li tutto il tempo con la vostra schiettezza e tenerezza...  C. Trungpa</h5>

<h5><strong>Il gruppo di PRATICA CONTEMPLATIVA NELLA VITA QUOTIDIANA con Marinella Visconti continua tutti i lunedì dalle 08:30 alle 09:10,  tutti i giovedì dalle 12.30 alle 13.30 e dalle 18:00 alle 18:40 in diretta streaming . La partecipazione è libera. Chi fosse interessato è pregato di contattare Marinella al 338-2331754 oppure via email scrivendo a <a href="mailto:mariv9162@gmail.com">mariv9162@gmail.com</a>  o <a href="mailto:marinellavisconti@outlook.it">marinellavisconti@outlook.it</a> 
<br/><br/>
Lunedì dalle 08:30 alle 09:10<br/>
Giovedì dalle 12:30 alle 13:30
e dalle 18:00 alle 18:40</strong></h5>

<h3 align="center" className="bold" >Milano</h3>
<h3 align="center" className="bold" >Entrata libera</h3>
<h5 align="left">
Da settembre 2020 il giovedì dalle 12:30 alle 13:30 presso il Centro Mindfulness Milano, Via Cenisio, 5.
</h5>

<br/>
<h5 align="left">Per informazioni e iscrizioni scrivere a <a href = "mailto: marinellavisconti@outlook.it"> marinellavisconti@outlook.it</a> </h5>
<br/>
              </Col>
            </Row>
{/* ------------------------------------------------------------- */}
          </Container>
          <DataFormMessage/>
        </div>
     
        <DefaultFooter />
      </div>
    </>
  );
}
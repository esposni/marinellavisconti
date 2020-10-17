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
import DonazioneButton from "views/pages/Donazione"

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
        title="Siate li tutto il tempo con la vostra schiettezza e tenerezza..." ifdesc={true}/>
        <div className="section section-about-us">
          <Container>
            <Row>
            <Col className="" md="4">

<img
        alt="..."
        className="info-event"
        src={require("assets/img/pratica_contemplativa.png")}
      ></img><br/><br/>
</Col>
              <Col className="ml-auto mr-auto text-center" md="8">
                
              <h2 className="title" style={{color:"#dbbb4b"}}>Eventi al Centro Mindfulness Milano</h2>
              <h2 className="title" style={{color:"#dbbb4b"}}>LA PRATICA CONTEMPLATIVA NELLA VITA QUOTIDIANA</h2>
                <h5 align="center">Condotto da Marinella Visconti</h5>
              <h5 align="left">
              Essere consapevoli vuol dire essere qui, pienamente coscienti….ti rapporti direttamente alla situazione attuale, e ciò è precisamente tutto ciò che concerne la meditazione…semplicemente essere qui, comportandosi con molta accuratezza, completamente in relazione con il presente, senza riserve….C. Trungpa
</h5>  

<h5  align="left"><strong>Dal 17 settembre 2020 all’8 luglio 2021<br/>
Tutti i giovedì dalle 12.30 alle 13.30 sia in PRESENZA che IN DIRETTA STREAMING</strong></h5> 
{/* <h5 align="left">
Presso il Centro Mindfulness Milano, Via Cenisio, 5.
</h5> */}
<h5 align="left"><strong>Per informazioni  scrivere a <a href="mailto:info@progettopienessere.com">info@progettopienessere.com</a></strong></h5> 
<h5 align="left"><strong>N.B: La pratica contemplativa della vita quotidiana è anche in in diretta streaming tutti i lunedì dal 14 settembre 2020 dalle 8:30 alle 9:10.</strong></h5>
<h5 align="left"><strong>Tutti i giovedì dal 17 settembre 2020 dalle 18 alle 18:40. </strong></h5>
<h5 align="left"><strong>Per informazioni  scrivere a <a href="mailto:info@progettopienessere.com">info@progettopienessere.com</a></strong></h5> 
<br/>
<h3 align="center" className="bold" style={{color:"#dbbb4b"}}>La partecipazione è libera</h3>
<DonazioneButton desc={true}  offerta={true}/ >  
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
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
import PageHeader from "components/Headers/PageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import FormMessage from"components/FormMessage.js";
import utenti from "../../assets/utenti.json"
import Conduttore from "views/pages/Conduttore"
import DonazioneButton from "views/pages/Donazione"

// import AlertDialogSlide from "components/PopUpButton.js";

export default function DistanceHealingPage() {
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
        <PageHeader image="orecchio.jpeg" title="Teniamo quello che vale la pena di tenere e poi con il fiato della gentilezza soffiamo via il resto..." ifdesc={true}/>
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="" md="4">

              <img
                      alt="..."
                      className="info-event"
                      src={require("assets/img/distance_healing.jpg")}
                    ></img><br/><br/>
              </Col>
              <Col className="ml-auto mr-auto text-center" md="8">
              
                <h2 className="title">Distance Healing : Pratiche di guarigione a distanza</h2>
                <h5 align="left">Distance healing= La guarigione intuitiva. È una pratica di guarigione a distanza. È un’esperienza che nasce da un luogo profondo del cuore ed è parte della medicina quantica. Aumenta la capacità di guarigione spirituale. Nasce originariamente dall’osteopatia e dalle successive esplorazioni del Craniosacrale biodinamico e del continuum movement. L’operatore si muove come testimone trascendentale. </h5>
                <h5 align="left">Per informazioni e appuntamenti scrivere a <a href="mailto:info@progettopienessere.com">info@progettopienessere.com</a></h5>
              
                <DonazioneButton/>
              </Col>
            </Row>
          
          </Container>
        </div>

        <div className="section section-team text-center">
          <Container>
            <h2 className="title">CONDUTTORI</h2>
            <Row>
            <Conduttore id={utenti[0].id}
                    img={utenti[0].img}
                    name={utenti[0].name}
                    desc={utenti[0].desc}
                    self={utenti[0].self}
                    link={utenti[0].link}
                    />
            </Row>
          </Container>
        </div>
        {/* <div className="section section-team text-center">
          <Container>
            <h2 className="title">Dove trovarmi</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/studio-milano.jpg")}
                    ></img>
                    <h4 className="title">Centro Mindfulness Milano</h4>
                    <p className="category text-info">Model</p>
                   
                    Via Cenisio, 5 <br/>
                    Per contattarmi: 338 2331754
                    
                   
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/studio2.png")}
                    ></img>
                    <h4 className="title">Studio privato</h4>
                  
                    Via Auguadri 22 Como
               
                   
                  </div>
                </Col>
               
              </Row>
            </div>
          </Container>
        </div> */}
        <FormMessage/>
        <DefaultFooter />
      </div>
    </>
  );
}


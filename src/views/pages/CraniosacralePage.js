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
// import AlertDialogSlide from "components/PopUpButton.js";

export default function CraniosacralePage() {
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
        <PageHeader image="orecchio.jpeg" title="C'è una voce che non usa le parole. Ascolta" ifdesc={true}/>
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
           
                <h2 className="title" style={{color:"#dbbb4b"}}>Craniosacrale biodinamica</h2>
                <h5 align="left">
Il Craniosacrale biodinamica è un approccio alla Mindfulness attraverso il contatto con il corpo.</h5>
              <h5 align="left">
              È una disciplina in continua evoluzione orientata alla promozione della salute e del benessere. Si basa su un’approfondita comprensione dell’anatomia, ed è caratterizzata da una capacità di percezione molto raffinata. L’operatore aiuta il ricevente ad ascoltarsi sensorialmente e a ricontattare le proprie capacità intrinseche di autoregolazione. L’organismo ritrova vitalità e rilassamento.</h5>  
              <h5 align="left">Il Craniosacrale deriva dall’osteopatia, dalla ricerca di William G. Sutherland. Agli inizi del Novecento, Sutherland scoprì il movimento intrinseco delle ossa del cranio e individuò diverse maree, movimenti ritmici e fluttuazioni sottili nel corpo. Scoprì anche che l’ascolto di questi ritmi attraverso un contatto molto delicato, è in grado di facilitarne il riequilibrio. Il contatto Craniosacrale aiuta a sviluppare un senso di integrazione e di presenza nel corpo.</h5>
              <h5 align="left">Essere ascoltati in profondità. senza giudizio e con empatia è alla base di ogni vero cambiamento.</h5>
              <h5 align="left">Tratto da Craniosacrale – Un approccio olistico alla salute – A.CS.I. Associazione Craniosacrale Italiana</h5>
              <h5 align="left">Per informazioni e appuntamenti scrivere a <a href="mailto:info@progettopienessere.com">info@progettopienessere.com</a></h5>
              </Col>
            </Row>
          
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">CONDUTTORI</h2>
            <Row>
                  <Col className="ml-auto mr-auto text-center" md="6">
                  <h2 className="title">{utenti[0].name}</h2>
                  <Conduttore id={utenti[0].id}
                          img={utenti[0].img}
                          name={""}
                          desc={utenti[0].desc}
                          self={utenti[0].self}
                          link={utenti[0].link}
                          />
                  </Col>
                  <Col className="ml-auto mr-auto text-center" md="6">
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
                          {/* <p className="category text-info">Model</p> */}
                        
                          Via Cenisio, 5 <br/>
                          
                        
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
      
              </Col>
            </Row>
            <hr></hr>

            <Row>
                  <Col className="ml-auto mr-auto text-center" md="6">
                  <h2 className="title">{utenti[2].name}</h2>
                  <Conduttore id={utenti[2].id}
                          img={utenti[2].img}
                          name={""}
                          desc={utenti[2].desc}
                          self={utenti[2].self}
                          link={utenti[2].link}
                          />
                  </Col>
                  <Col className="ml-auto mr-auto text-center" md="6">
                  <h2 className="title">Dove trovarmi</h2>
                  <div className="team">
                    <Row>
                      <Col md="4">
                        <div className="team-player">
                          <img
                            alt="..."
                            className="rounded-circle img-fluid img-raised"
                            src={require("assets/img/studioFederica.jpg")}
                          ></img>
                          <h4 className="title">Studio privato</h4>
                        
                          Via Quintino Sella, 16 <br/>
                          Brendola(Vicenza)
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


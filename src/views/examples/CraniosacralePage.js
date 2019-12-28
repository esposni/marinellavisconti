import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
// import { Link } from "react-router-dom";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import CraniosacralePageHeader from "components/Headers/CraniosacralePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
// import AlertDialogSlide from "components/PopUpButton.js";

export default function CraniosacralePage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
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
        <CraniosacralePageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
              
                <h2 className="title">Craniosacrale biodinamica</h2>
                <h5 align="left">
Il Craniosacrale biodinamica è un approccio alla Mindfulness attraverso il contatto con il corpo.</h5>
              <h5 align="left">
              È una disciplina in continua evoluzione orientata alla promozione della salute e del benessere. Si basa su un’approfondita comprensione dell’anatomia, ed è caratterizzata da una capacità di percezione molto raffinata. L’operatore aiuta il ricevente ad ascoltarsi sensorialmente e a ricontattare le proprie capacità intrinseche di autoregolazione. L’organismo ritrova vitalità e rilassamento.</h5>  
              <h5 align="left">Il Craniosacrale deriva dall’osteopatia, dalla ricerca di William G. Sutherland. Agli inizi del Novecento, Sutherland scoprì il movimento intrinseco delle ossa del cranio e individuò diverse maree, movimenti ritmici e fluttuazioni sottili nel corpo. Scoprì anche che l’ascolto di questi ritmi attraverso un contatto molto delicato, è in grado di facilitarne il riequilibrio. Il contatto Craniosacrale aiuta a sviluppare un senso di integrazione e di presenza nel corpo.</h5>
              <h5 align="left">Essere ascoltati in profondità. senza giudizio e con empatia è alla base di ogni vero cambiamento.</h5>
              <h5 align="left">Tratto da Craniosacrale – Un approccio olistico alla salute – A.CS.I. Associazione Craniosacrale Italiana</h5>
              
              </Col>
            </Row>
          
          </Container>
        </div>

        <div className="section section-team text-center">
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
                    {/* <p className="category text-info">Model</p> */}
                   
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
        </div>
        
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Scrivimi</h2>
            {/* <p className="description">Your project is very important to us.</p> */}
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Nome Cognome..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Scrivi il messaggio..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    size="lg"
                  >
                    Invia
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}


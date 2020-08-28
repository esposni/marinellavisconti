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
// import AlertDialogSlide from "components/PopUpButton.js";

export default function PremessaPage() {
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
      <PageHeader image="ciotola.jpeg" title="Formazione in mindfulness transpersonale in relazione" />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
              <div align="center">
            <img
                alt="..."
                className=""
                style={{width:"20.5em",height:"20.5em"}}
                src={require("assets/img/marinella5.jpg")}
              ></img>
            </div>
                <h2 className="title" style={{color:"#dbbb4b"}}>Intento Formativo</h2>
                <h5 align="left">La nostra pratica è assecondata sorretta e stimolata dal crescente contatto con amici e insegnanti che cercano di realizzare il dharma nella loro esistenza.
Noi nasciamo soli e moriamo soli. Molto del nostro tempo trascorre assorbito in pensieri e in sentimenti che non possiamo mai condividere interamente, e tuttavia la nostra esistenza si definisce
 
mediante le nostre relazioni con gli altri....Siamo esseri partecipi che abitano in una realtà condivisa, alla ricerca di relazioni capaci di accrescere il senso della vita. In termini di pratica del dharma, un vero amico è qualcosa di più di qualcuno con cui condividiamo dei valori comuni e che ci accetta per quello che siamo. Un tale amico è qualcuno su cui possiamo contare per migliorare la nostra comprensione del significato della vita, che è in grado di guidarci quando siamo smarriti e di aiutarci a trovare la via lungo il sentiero, che è capace di lenire il nostro dolore grazie alla sua rassicurante presenza.....delle relazioni d’amicizia particolarmente importanti si stringono anche con coloro che rispettiamo per aver raggiunto un livello di maturità e di consapevolezza maggiore del nostro. Tali persone ci offrono la loro guida e la loro rassicurazione in ogni aspetto del loro essere. Il loro modo di muoversi, il loro sguardo, le cadenze del loro discorso, la loro risposta a inaspettate provocazioni, il modo in cui sono sempre a loro agio e attendono alle incombenze quotidiane; tutto ciò risulta per noi altrettanto significativo delle loro parole. Tali amici sono dei maestri, nel senso che sono esperti dell’arte di apprendere da ogni situazione. In loro non cerchiamo la perfezione, quanto piuttosto una cordiale accettazione dell’umana imperfezione, non cerchiamo l’onniscienza, ma un’ironica ammissione di ignoranza.....il loro compito non è di rendersi indispensabili, ma di diventare superflui....
La pratica del dharma fiorisce soltanto quando fioriscono tali rapporti; non possiede altre modalità di trasmissione.....
E’ possibile immaginare una comunità di amici in cui la diversità sia apprezzata anzichè censurata, in cui la piccola dimensione del gruppo sia considerata un successo anzichè un insuccesso, in cui il potere sia condiviso da tutti anzichè appannaggio di una minoranza di addetti ai lavori, in cui uomini e donne siano trattati davvero
come eguali, in cui le domande siano ritenute più importanti delle risposte....”
- Stephen Batchelor</h5>
              
              </Col>
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


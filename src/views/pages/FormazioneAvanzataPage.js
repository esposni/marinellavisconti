import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import PageHeader from "components/Headers/PageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import DataFormMessage from "components/DataFormMessage.js"
// import AlertDialogSlide from "components/PopUpButton.js";

export default function FormazioneAvanzataPage() {
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
        <PageHeader image="ciotola.jpeg" title="Formazione in mindfulness transpersonale e in relazione avanzata" />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
              
                <h2 className="title">PERCORSO IN OTTO SIGILLI DI MINDFULNESS TRANSPERSONALE</h2>
                <h5 align="left">IL SENTIERO DELLA RIVELAZIONE DIRETTA ATTRAVERSO LA PERCEZIONE INNOCENTE. RICONNETTERSI ALLA PROPRIA IDENTITÀ COSMICA INCARNANDO IL CUORE TRASCENDENTE</h5>
              <h5 align="left">
              Come ricordava lo psichiatra RD Laing, il peggior danno che un essere umano possa subire è la distruzione della capacità di accogliere ed onorare la propria esperienza unica ed irripetibile. Esso ha come conseguenza a livello interpersonale la perdita dei confini e dell’identità individuale in relazione, mentre a livello transpersonale esita nella disconnessione dalla propria Natura Eterna. Tale condizione è il principale effetto degli eventi traumatici acuti o cronici vissuti in prima persona, ma può essere anche trasmessa a livello trans-generazionale ed essere alimentata da una realtà consensuale che promuove la disconnessione da sé.
</h5>  
                <Button
                    block
                    className="btn-round"
                    color="info"
                    href="http://centromindfulnessmilano.com/myportfolio/percorso-in-otto-sigilli-di-mindfulness-transpersonale-2/"
                    target="_blank"
                    size="lg"
                  >Per approfondire e iscriversi
                    </Button>          
<h2 className=""> DATE E LUOGO</h2>
<h5 align="left">Il prossimo percorso inizierà probabilmente a dicembre 2021, si accettano sin da ora preiscrizioni. Al massimo ogni gruppo è composto da 12 persone.</h5>

              </Col>
            </Row>
          
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">CONDUTTORI</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/marinella.png")}
                    ></img>
                    <h4 className="title">Marinella Visconti </h4>
                    <p className="category text-info">Psicoterapeuta ad orientamento contemplativo </p>    
                  </div>
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    to="/profile-page" tag={Link}
                    
                    size="sm"
                  >Curriculum
                    </Button>  
                </Col>      
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                     
                      src={require("assets/img/simone-spina.png")}
                    ></img>
                    <h4 className="title">Simone Spina  </h4>
                    <p className="category text-info">Psichiatra Psicoterapeuta ad orientamento transpersonale </p>  
                    <Button
                    block
                    className="btn-round"
                    color="info"
                    href="http://centromindfulnessmilano.com/myportfolio/simone-spina/"
                    
                    size="sm"
                  >Curriculum
                    </Button>  
                  </div>
                </Col>   
              </Row>
            </div>
            <h2 className="">Costi</h2>
            
            <h5 align="left">Costo dell’intero percorso 2400 euro (ratealizzabili) più 25 euro di tessera sostenitore annuale dell’Associazione Mudita.</h5>
        
            <h5 align="left">Ecco le coordinate bancarie per il bonifico:</h5>
            <h5 align="left">Associazione Mudita c/o Intesa San Paolo spa</h5>
            <h5 align="left">Iban IT83 E030 6909 6061 0000 0128 339</h5>
            <h5 align="left">Bic BCITITMM (per i bonifici dall'estero)</h5>
            <h5 align="left">Causale: Cognome e Nome del partecipante- Percorso in Otto Sigilli di Mindfulness Transpersonale – Marinella Visconti e Simone Spina</h5>
      

          </Container>
        </div>
       
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Sede dei Ritiri/Laboratori</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/centro_dompio.jpg")}
                    ></img>
                    <h4 className="title">CENTRO D’OMPIO</h4>
                    {/* <p className="category text-info">Model</p> */}
                   
                    Via Pratolungo, 47 28028 Pettenasco (NO)<br/>

Telefono 0323888967<br/>

<br/>
{/* <h6 align="left">Costo vitto e alloggio da pagare in loco  dal venerdì sera alla domenica a pranzo:<br/>

Camera doppia 166 euro vista lago, 156 euro vista bosco.<br/>

Camera multipla 136 euro.
                    </h6> */}
                  </div>
                </Col>
              
              </Row>
            </div>
          </Container>
        </div>
        <DataFormMessage/>
        
        <DefaultFooter />
      </div>
    </>
  );
}


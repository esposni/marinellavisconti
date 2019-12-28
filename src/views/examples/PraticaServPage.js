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
import { Link } from "react-router-dom";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import PraticaServPageHeader from "components/Headers/PraticaServPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
// import AlertDialogSlide from "components/PopUpButton.js";

export default function PraticaServPage() {
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
        <PraticaServPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Pratica di servizio</h2>
              <h5 align="left">Agisci come se quel che fai facesse la differenza. La fa. 
William James</h5>
              <h5 align="left">I fiumi non bevono la propria acqua; gli alberi non mangiano i propri frutti.
Il sole non brilla per se stesso; ed i fiori non disperdono la propria fragranza per se stessi.</h5>
              <h5 align="left">Vivere per gli altri è una regola della natura.
La vita è bella quando tu sei felice, però la vita è molto meglio quando gli altri sono felici per merito tuo.</h5>
              <h5 align="left">La nostra natura è di essere al servizio...</h5>
              <h5 align="left">Il servizio è il modo di essere nell'amore incondizionato.</h5>
              <h5 align="left">L'intento principale della pratica di servizio è sviluppare la cura e la sollecitudine. Il termine è spesso usato come sinonimo di attenzione-consapevolezza.
L'autentica consapevolezza è animata da sollecitudine e cura.
L'attenzione contemplativa per essere trasformante,deve esprimere l'abilità di incontrare qualunque cosa emerge di momento in momento con totale presenza e cuore aperto.
La cura ci consente di osservare la propria mente nel bel mezzo del turbamento lasciando spazio alla nascita di qualità fondamentali come la saggezza.</h5>
<h2 className="title">Coordinamento traduzioni testi di DHARMA dall'inglese all'italiano</h2> 
<h5 align="left">Da distribuire in centri di ritiri e presso il Centro Mindfulness Milano ad offerta libera.
L'offerta  raccolta attraverso la distribuzione gratuita dei testi di Dharma tradotti sarà devoluta a sostegno del centro di ritiri Theravada Cittaviveka(<a href="http://www.cittaviveka.org">http://www.cittaviveka.org</a>) in inghilterra.</h5>
<h5 align="left">N.B. Si raccolgono adesioni di volontari disponibii a tradurre testi dall'inglese all'italiano</h5>
<h5 align="left">Potete scrivere a <a href = "mailto: marinellavisconti@outlook.it"> marinellavisconti@outlook.it</a> </h5>
<h5 align="left">Attualmente stiamo traducendo alcuni testi di Ajahn Sucitto.</h5>

                <h2 className="title">LA PRATICA CONTEMPLATIVA NELLA VITA QUOTIDIANA</h2>
                <h5 align="left">Condotto da Marinela Visconti e Roberto Pagani </h5>
              <h5 align="left">
              Essere consapevoli vuol dire essere qui, pienamente coscienti….ti rapporti direttamente alla situazione attuale, e ciò è precisamente tutto ciò che concerne la meditazione…semplicemente essere qui, comportandosi con molta accuratezza, completamente in relazione con il presente, senza riserve….C. Trungpa
</h5>  
<h5 align="left">Siate li tutto il tempo con la vostra schiettezza e tenerezza...  C. Trungpa</h5>

<h2 className=""> DATE E LUOGO</h2>
<h5 align="left">Entrata libera tutti i giovedì dalle 12:30 alle 13:30 presso il Centro Mindfullness Milano, Via Cenisio, 5.</h5>
<h5 align="left" className="bold" >Prossimamente la pratica contemplativa nella vita quotidiana anche a Como</h5>


<h2 className="">ORGANIZZAZIONE DI RITIRI ED EVENTI</h2>
<h5 align="left">Le Paramita con Ajahn Sucitto 15 Marzo 2021 - 25 Marzo 2021</h5>
                <Button
                    block
                    className="btn-round"
                    color="info"
                    href="http://centromindfulnessmilano.com/event/le-paramita-con-ajahn-sucitto/"
                    
                    size="sm"
                  >Ulteriori informazioni
                    </Button>  <br/>
<h5 align="left">Ritiro di Mindfullness e heartfulness ottobre 2021</h5>
<Button
                    block
                    className="btn-round"
                    color="info"
                    to="/formazione" tag={Link}
                    
                    size="sm"
                  >Ulteriori informazioni
                    </Button> <br/>
                    <h5 align="left">La seconda serata al centro mindfulness milano con Rashmi Bhatt e Fabius Constable si terrà a fine Febbraio 2020.</h5>
              </Col>
            </Row>
          
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


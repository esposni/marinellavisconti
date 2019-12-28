import React from "react";

// reactstrap components
import {
  Button,

  Container,
  Row,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import PsicoPageHeader from "components/Headers/PsicoPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import FormMessage from"components/FormMessage.js";

function PsicoterapiaPage() {

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
        <PsicoPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                {/* <h2 className="title">Who we are?</h2> */}
                <h5 >
                 
Iniziare una psicoterapia significa innanzitutto fare un passo indietro dal mondo quotidiano, per poter andare più in profondità nel nostro percorso di ricerca di benessere e di un modo più consapevole di affrontare la vita.
La pratica della consapevolezza crea le condizioni nella nostra vita perché le cose possano funzionare e crea le condizioni per diventare la persona che aspiriamo ad essere.
Come gli artigiani che prendono il materiale grezzo e lo trasformano in qualcosa di bello la psicoterapia contemplativa ci porta a diventare artigiani di noi stessi immaginando per noi possibilità ancora non pensate e rispondendo in modo appropriato, compassionevole e saggio alla sofferenza della vita fiorendo nella nostra umanità.
Per questo è possibile allenarci attraverso quattro apprendimenti fondamentali:
 
Abbracciando le esperienze, cioè dicendo si a quel che ci succede, alla vita in quanto tale.
Comprendere cioè senza avidità, odio e confusione, ovvero accettare la totalità dell’esperienza in modo non reattivo.
 
Lasciandole andare cioè lasciando andare la reattività, divenendo consapevoli di come reagiamo
 
Fermandoci per osservare il fermarsi, imparando a interrompere le reazioni, in molti sensi, non solo per quanto riguarda le azioni pratiche
 
Agendo con attenzione e consapevolezza
 
Tutto ciò che riguarda l’umanità è un mistero e può essere solo abbracciato
                </h5>
                <Button
                    block
                    className="btn-round"
                    color="info"
                    href="http://centromindfulnessmilano.com/myportfolio/servizio-di-psicoterapia-ad-orientamento-mindfulness-e-contemplativa/"

                    size="lg"
                  >
                      Per approfondire
                    </Button>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            {/* <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/login.jpg") + ")"
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "Over the span of the satellite record, Arctic sea ice has
                      been declining significantly, while sea ice in the
                      Antarctichas increased very slightly" <br></br>
                      <br></br>
                      <small>-NOAA</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg3.jpg") + ")"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg1.jpg") + ")"
                    }}
                  ></div>
                  <h3>
                    So what does the new record for the lowest level of winter
                    ice actually mean
                  </h3>
                  <p>
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens with climate change. Even if the
                    Arctic continues to be one of the fastest-warming regions of
                    the world, it will always be plunged into bitterly cold
                    polar dark every winter. And year-by-year, for all kinds of
                    natural reasons, there’s huge variety of the state of the
                    ice.
                  </p>
                  <p>
                    For a start, it does not automatically follow that a record
                    amount of ice will melt this summer. More important for
                    determining the size of the annual thaw is the state of the
                    weather as the midnight sun approaches and temperatures
                    rise. But over the more than 30 years of satellite records,
                    scientists have observed a clear pattern of decline,
                    decade-by-decade.
                  </p>
                  <p>
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens with climate change. Even if the
                    Arctic continues to be one of the fastest-warming regions of
                    the world, it will always be plunged into bitterly cold
                    polar dark every winter. And year-by-year, for all kinds of
                    natural reasons, there’s huge variety of the state of the
                    ice.
                  </p>
                </Col>
              </Row>
            </div> */}
          </Container>
          <FormMessage />
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default PsicoterapiaPage;

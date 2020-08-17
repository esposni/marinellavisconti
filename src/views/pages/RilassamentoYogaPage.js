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

export default function RilassamentoYogaPage() {
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
        <PageHeader image="orecchio.jpeg" title={`L'amore per la verità di mette con le spalle al muro`}  ifdesc={true}/>
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="" md="4">

              <img
                      alt="..."
                     style={{width:"20em",height:"40em"}}
                      src={require("assets/img/ritiri/corpocibo.jpeg")}
                    ></img><br/><br/>
              </Col>
              <Col className="ml-auto mr-auto text-center" md="8">
              
                <h2 className="title">{`Rilassamento. Yoga Nidra del Cuore`} </h2>
                <h5 align="left">Uno spazio nel quale potersi lasciare riposare nell’ascolto del nostro cuore immerso nel cuore dell’Universo.
</h5>
                <h5 align="left">Di lunedì in lunedì avremo la possibilità di essere accompagnati nell’ascolto del nostro corpo immerso in qualcosa che è più grande di noi e che ospita ciò di cui il cuore fa esperienza nella nostra quotidianità emotiva e nella nostra storia personale. 
</h5>
                <h5 align="left">Il Lunedì dal 20.15 alle 21/ 21.15 circa
</h5>
                <h5 align="left">5 ottobre 2020<br/>
26 ottobre 2020<br/>
16 novembre 2020<br/>
7 dicembre 2020<br/>
21 dicembre 2020<br/>
</h5>
            
                <h5 align="left">Chi fosse interessato può scrivere a <a href="mailto:info@progettopienessere.com">info@progettopienessere.com</a>  </h5>
                <DonazioneButton/>
              </Col>
            </Row>
          
          </Container>
        </div>

        <div className="section section-team text-center">
          <Container>
            <h2 className="title">CONDUTTORI</h2>
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


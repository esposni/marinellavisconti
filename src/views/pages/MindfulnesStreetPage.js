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

export default function MindfulnesStreetPage() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  let index = utenti.findIndex((el)=>{
    return el.name === "Elena Cristalli"
  })
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader image="orecchio.jpeg" title="" ifdesc={true}/>
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="" md="4">

              <img
                      alt="..."
                      className="info-event"
                      src={require("assets/img/street.jpg")}
                    ></img><br/><br/>
              </Col>
              <Col className="ml-auto mr-auto text-center" md="8">
              
                <h2 className="title" style={{color:"#dbbb4b"}}>MindfulnesStreet <br/>Meditiamo in città</h2>
                <h5 align="left"><strong>Gruppo di diffusione di pratiche di consapevolezza urbana.<br/>Condotto da Elena Cristalli</strong></h5>
                <h5 align="left">Diffondiamo le pratiche mindfulness nelle nostre città, riappropriamoci delle nostre città. Trasmettiamo un messaggio di presenza, calma, pace. Sostiamo in luoghi che di solito sono vissuti come zone attraversate da un frettoloso passaggio. Non sempre c’è la possibilità di praticare in luoghi isolati, di silenzio, nella natura. Applichiamo allora il qui ed ora, “stiamo con quello che c’è” e se viviamo in città proviamo a meditare in una piazzetta, sotto un portico, sul sagrato di una chiesa, in un piccolo parco, ecc. Tutti questi spazi possono diventare luoghi di pratica. </h5>
                <h5 align="left">MindfulnesStreet è un gruppo di pratica rivolto a tutti, a praticanti esperti e a principianti e a tutti coloro che credono che ci siano ancora luoghi belli nelle città e che possiamo gioirne, e che per cambiare le brutture delle città occorra portare bellezza, pace, gentilezza.
</h5>
<h5 align="left"><strong>I TEMPI</strong></h5>
<h5 align="left">Il gruppo di MindfulnesStreet si radunerà secondo un calendario.
Chi vuole partecipare e/o proporre un luogo in cui meditare nelle date indicate può segnalarlo via mail. Per partecipare occorre iscriversi. </h5>
<h5 align="left"><strong>I COSTI</strong></h5>
<h5 align="left">Offerta libera.</h5>

<h5 align="left"><strong>COSA PORTARE?</strong></h5>
      <ul align="left">
        <li>un tappetino tipo quelli da yoga </li>
        <li>un cuscino per chi vuole stare comodo</li>
      </ul>

                <h5 align="left">Se non hai il tappetino o il cuscino non importa, ti potrai adattare al contesto che scegliamo magari semplicemente sedendoti per terra o stando in piedi  </h5>
                <h5 align="left"><strong> PRENOTAZIONE OBBLIGATORIA</strong></h5>

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
            <Conduttore id={utenti[index].id}
                    img={utenti[index].img}
                    name={utenti[index].name}
                    desc={utenti[index].desc}
                    self={utenti[index].self}
                    link={utenti[index].link}
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


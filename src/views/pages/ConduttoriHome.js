import React from "react";

// reactstrap components
import {
  Container,
  // Button,
  Row,
} from "reactstrap";
import utenti from "../../assets/utenti.json"
import Conduttore from "views/pages/Conduttore"
import Iframe from 'react-iframe'
// core components

export default function ConduttoriHome(props) {

  return (
    <>
     <div className="section section-team text-center">
     {/* <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8"> */}
          <Container>
            {/* <h2 className="title">CONDUTTORI</h2> */}
            
                <img
                alt="..."
                className=""
                style={{width:"20.5em",height:"20.5em"}}
                src={require("assets/img/marinella5.jpg")}
              ></img>
              <h2 className="title" style={{color:"#dbbb4b"}}>SOSTENERE CHI SOSTIENE</h2>
              <h5 align="left">L’Associazione Progetto Pien<i style={{color:"#dbbb4b"}}className="fas fa-heart"></i>Essere approfondirà la ricerca
              interiore attraverso la formazione continua in Mindfulness
transpersonale in relazione, così come elaborata da Anne Overzee
e Deirdre Gordon, docenti senior del Karuna Institute, integrando
l’approccio con le suggestioni della Mindfulness transpersonale e la
saggezza di differenti tradizioni spirituali. L’associazione aspira ad
essere un punto di riferimento e di incontro per la creazione di spazi
radicali di apprendimento contemplativo e l’approfondimento degli
aspetti trascendentali della coscienza. Promuove l’attivismo
contemplativo attraverso varie modalità di pratica e l’organizzazione
di ritiri di Vipassana e ritiri/laboratori, contribuendo a creare un
modello d’incontro dove la solidarietà, la generosità e i piccoli gesti
quotidiani siano fondanti e si propone come punto di partenza per la
realizzazione di contesti relazionali capaci di trasformare non solo
l’individuo ma anche la società avendo come intento prioritario il
SOSTENERE CHI SOSTIENE.</h5>
<h5 align="left">È spazio di crescita spirituale per leader, psicoterapeuti, medici,
operatori della salute, insegnanti e ricercatori spirituali.</h5>
<br/>
<h2 className="title" style={{color:"#dbbb4b"}}>CHI SIAMO</h2>
              <div className="team">
              <Row >
                {utenti.map(el=>{
                 return ((el.name==="Marinella Visconti"|| el.name==="Federica Gonzati" || el.name==="Monia Talenti")? 
                    <Conduttore id={el.id}
                    key={el.id}
                    img={el.img}
                    name={el.name}
                    desc={el.desc}
                    self={el.self}
                    link={el.link}
                    /> :"")}
                )}
                     
              </Row>
            </div>
            
            <h2 className="title" style={{color:"#dbbb4b"}}> COLLABORANO CON NOI</h2>
            <div className="team">
            <Row >
                {utenti.map(el=>{
                 return ((el.name!=="Marinella Visconti"&& el.name!=="Federica Gonzati" && el.name!=="Monia Talenti")? 
                    <Conduttore id={el.id}
                    key={el.id}
                    img={el.img}
                    name={el.name}
                    desc={el.desc}
                    self={el.self}
                    link={el.link}
                    /> :"")}
                )}
                     
              </Row>
            </div>
            <br/><br/>
  
              <hr></hr> <br/><br/>
              <h5 align="center">Sede dell’Associazione Progetto Pien<i style={{color:"#dbbb4b"}}className="fas fa-heart"></i>Essere ETS</h5>
              <h5 align="center">Via Auguadri, 22 Como 22100</h5>
              <h5 align="center">C.F. 95136600137</h5>
              <h5 align="center">Segreteria: <a href="mailto:info@progettopienessere.com">info@progettopienessere.com</a></h5>
              <br/><br/>
              <Iframe url="https://86be14fe.sibforms.com/serve/MUIEALMfO72ICxIkKiRD9MR73O-WSNUaNJNlm1m6-Jf4ZTsNJUkHXl6t6q91uW1jCRh_aqL6_WvSBKlA2y-pHqtzP5fvhz_tVTnKUxyqTubx6xzkRvMSl-RhdL9GQ4ut9Oogc9xrvKlK-Dozb5PFhFfANNy0FeEWMDHh2xVBj_SSFl0Y-FqqfMFin0AJpsaNsBzGyUJyYFEvmlIR"
        width="540px"
        height="600vh"
        id="Iframe"
        display="initial"
        allowfullscreen
        position="relative"/>

        </Container>
     
    </div>
    </>
  );
}


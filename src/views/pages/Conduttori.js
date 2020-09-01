import React from "react";

// reactstrap components
import {
  Container,
  Row,
} from "reactstrap";
import utenti from "../../assets/utenti.json"
import Conduttore from "views/pages/Conduttore"
// core components

export default function Conduttori(props) {

  return (
    <>
     <div className="section section-team text-center">
     {/* <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8"> */}
          <Container>
            {/* <h2 className="title">CONDUTTORI</h2> */}
            <div className="team">
              {(props.home)?<div>
                <img
                alt="..."
                className=""
                style={{width:"20.5em",height:"20.5em"}}
                src={require("assets/img/marinella5.jpg")}
              ></img>
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
              </div>:""}
            
              <Row >
                {utenti.map(el=>{
                 return (props.school )? (el.school)? 
                    <Conduttore id={el.id}
                    key={el.id}
                    img={el.img}
                    name={el.name}
                    desc={el.desc}
                    self={el.self}
                    link={el.link}
                    /> :"" :
                    <Conduttore id={el.id}
                    key={el.id}
                    img={el.img}
                    name={el.name}
                    desc={el.desc}
                    self={el.self}
                    link={el.link}
                    /> 
                })}
                     
              </Row>
            </div>
        </Container>
        {/* </Col>
        </Row>
        </Container> */}
    </div>
    </>
  );
}


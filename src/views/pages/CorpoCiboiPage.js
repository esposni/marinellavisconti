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
import Ricette from "views/pages/Ricette"
// import AlertDialogSlide from "components/PopUpButton.js";

export default function CorpoCiboPage() {

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
    return el.name === "Monia Talenti"
  })

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader image="orecchio.jpeg" title={`“Non è tanto quello che facciamo, ma quanto amore mettiamo nel farlo. Non è tanto quello che diamo, ma quanto amore mettiamo nel dare”. -  Madre Teresa di Calcutta`}  ifdesc={true}/>
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
              
                <h2 className="title" style={{color:"#dbbb4b"}}>{`"Ad ogni corpo il suo cibo..."`} </h2>
                <h5 align="left"><strong>…..mi-ALI-mento….</strong></h5>
                <h5 align="left">Vorrei che fossero questo i nostri incontri, appuntamenti che avranno a che fare con il cibo, con il nutrimento del corpo e dello spirito.</h5>
                <h5 align="left">La scelta degli ingredienti, gli abbinamenti, la concentrazione nel godere di essi.</h5>
                <h5 align="left">Un gioco, un accrescimento, una consapevolezza che passa dal forno al cuore, dalla tavola al corpo...</h5>
                <h5 align="left">Passare da una alimentazione distratta ad un nutrimento in totale Pienessere.</h5>
                <h5 align="left">Equilibri sospesi fra sapori, colori e profumi, nel ricordo ancestrale che ci radica alla terra e ci slancia nell’evoluzione verso il cielo.</h5>
                <h5 align="left">Un cammino che si svelerà a noi strada facendo;  un viaggio senza metà nella rincorsa di un'idea travestita da stella.</h5>
                <h5 align="left">Ci incontreremo settimanalmente se sarà possibile o comunque ogni volta in cui nel cuore si sedimenterà un'idea di brillante ALI-mentazione.</h5>
                <h5 align="left">Con il cuore aperto e le ali spiegate mi appresto a questo con chi avrà l’entusiasmo di seguirci. </h5>
                {/* <h5 align="left"></h5> */}
                <br/>
                <h5 align="left"><strong>…..mi-ALI-mento….</strong></h5>
                <h5 align="left">Piccola rubrica di alimentazione contemplativa</h5>
                <h5 align="left">A cura di Monia Talenti</h5>
               <Ricette />
              </Col>
            </Row>
          
          </Container>
        </div>

        <div className="section section-team text-center">
          <Container>
          <h5 align="left">E’ molto gradita l’iscrizione all'associazione. Ci aiutereste così a sostenere chi sostiene che è il nostro intento principale. 
            </h5><h5 align="left">Se desideri fare una donazione per favore clicca il bottone sottostante</h5>
         <DonazioneButton text={false}/>
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
        <FormMessage/>
        <DefaultFooter />
      </div>
    </>
  );
}


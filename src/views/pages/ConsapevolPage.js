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
import PageHeader from "components/Headers/PageHeader";
import DefaultFooter from "components/Footers/DefaultFooter.js";
// import FormMessage from"components/FormMessage.js";
import utenti from "../../assets/utenti.json"
import Conduttore from "views/pages/Conduttore"
// import AlertDialogSlide from "components/PopUpButton.js";

export default function ConsapevolPage() {
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
        <PageHeader title="I sentieri si tracciano camminando..." image="piedi-budda.jpeg" ifdesc={true} />
        <div className="section section-about-us">
          <Container>
            <Row>
            <Col className="" md="4">

<img
        alt="..."
        style={{width:"20em",height:"40em"}}
        src={require("assets/img/consapevolezza.jpeg")}
      ></img><br/><br/>
</Col>
              <Col className="ml-auto mr-auto text-center" md="8">
              
                <h2 className="title" style={{color:"#dbbb4b"}}>Consapevolezza in cammino</h2>
                <h4 style={{color:"#dbbb4b"}}><strong>Abitare i luoghi (sacri) nel cammino</strong></h4>
                <h5 align="left">Abitare è diverso dal visitare. Viviamo tempi e una cultura nei quali siamo abituati (e abbiamo il privilegio) di visitare tanti luoghi speciali ( dal punto di vista naturale e storico/culturale), però spesso, troppo velocemente e poco in profondità. Magari riusciamo anche ad ampliare le nostre conoscenze acquisendo nuove informazioni....</h5>
                <h5 align="left">Ma quanto ci rimane dentro di noi in queste visite? E che cosa lasciamo di noi in questi luoghi? Li lasciamo cambiati? Noi stessi ci lasciamo  davvero toccare? </h5>
                <h5 align="left">E se provassimo ad abitarli? Anche solo per qualche ora? Se tentassimo di conoscerli attraverso tutti i nostri sensi? Entrare in contatto e cura reciproco con un sentiero nel bosco, una cappella Francescana o una piccola grotta pagana, con un albero secolare o con un unico filo d’erba? 

Se provassimo ad ascoltare che cosa ci raccontano al di là delle informazioni scritte? 

E ascoltare cosa toccano al centro di noi stessi...come risuoniamo. 

E se ci lasciassimo toccare dalle foglie primaverili o quelle che si stanno seccando, dalla corteccia rugosa, dalle parete di roccia, dagli affreschi antichi…. In un modo umile, curioso e autentico? 


</h5>
                <h5 align="left">Le guide di questo cammino portano linguaggi diversi per poter dialogare con le parti diverse dei partecipanti in cammino, per poter offrire una varietà di approcci contemplativi, per connettersi e avvicinarsi al sacro dentro e fuori di noi. 

Attraverso la consapevolezza, la visualizzazione e la creatività.....Perché ogni linguaggio ci arricchisce e stare insieme, in cammino con tutte queste parti che risuonano dentro di noi e che creano un unico coro.  Dentro questo coro, è l’unicità di ognuno di noi che rende l’abitare i luoghi nel  cammino- sacro. </h5>
                <h5 align="left">Come saranno i nostri passi nel cammino?</h5>
                <h5 align="left">A volte lenti e silenziosi, consapevoli di ogni foglia secca e dell'odore della terra, le luci e le ombre sulla roccia. Altre volte, veloci, per sentire il flusso della nostra parte selvaggia, per lasciare che i rami ci acchiappino e il vento ci accarezzi, per respirare le montagne intorno a noi.

</h5>
                <h5 align="left">Saranno di esplorazione. Personale. E sempre rispettosa di ciò che è giusto per ognuno nel momento presente. </h5>
                <h5 align="left">Ci sediamo in silenzio. Nella radure del bosco, accolti in un chiostro, sulle rocce accanto al ruscello, in una grotta imbevuta di misteri. Davanti ad un albero, ascoltando la sua storia di lunghi anni… ma non solo. Ci esprimeremo con il movimento, con la voce, con le mani…per sentire gli spazi con tutto il corpo. Per conoscerli con tutti i sensi.</h5>
                <h5 align="left">Per informazioni scrivere a <a href="mailto:info@progettopienessere.com">info@progettopienessere.com</a></h5>
              </Col>
            </Row>
          
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">CONDUTTORI</h2>
            <Row>
            <Conduttore id={utenti[0].id}
                    img={utenti[0].img}
                    name={utenti[0].name}
                    desc={utenti[0].desc}
                    self={utenti[0].self}
                    link={utenti[0].link}
                    />
            <Conduttore id={utenti[2].id}
                    img={utenti[2].img}
                    name={utenti[2].name}
                    desc={utenti[2].desc}
                    self={utenti[2].self}
                    link={utenti[2].link}
                    />
            <Conduttore id={utenti[3].id}
                    img={utenti[3].img}
                    name={utenti[3].name}
                    desc={utenti[3].desc}
                    self={utenti[3].self}
                    link={utenti[3].link}
                    />
            </Row>
          </Container>
        </div>
        
      
        {/* <FormMessage/> */}
        <DefaultFooter />
      </div>
    </>
  );
}


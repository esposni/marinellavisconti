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
import Poesie from "views/pages/Poesie"
// import AlertDialogSlide from "components/PopUpButton.js";

export default function CuoreCuraPage() {
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
        <PageHeader image="orecchio.jpeg" title={`"La pittura è una poesia che si vede e non si sente
La poesia è una pittura che si sente e non si vede" - Leonardo Da Vinci, Trattato della pittura`}  ifdesc={true}/>
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
           
                <h2 className="title" style={{color:"#dbbb4b"}}>{`Nel cuore della cura`} </h2>
                <p>Suggestioni poetiche a cura di Giuseppe Ruggiero</p>
                <img
                      alt="..."
                     style={{width:"20em",height:"20em"}}
                      src={require("assets/img/ritiri/cuorecura.png")}
                    ></img><br/><br/>
                  <h5 align="left">Ogni lunedì Giuseppe Ruggiero proporrà una sua poesia, accompagnata da
un’immagine, come dono di riflessione per chi è impegnato in una relazione di cura
e desidera fermarsi qualche attimo per sentire dentro di sé il nutrimento della parola
e sintonizzarsi sulla creatività della visione.</h5>
                <Poesie />
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
            <Conduttore id={utenti[utenti.length-1].id}
                    img={utenti[utenti.length-1].img}
                    name={utenti[utenti.length-1].name}
                    desc={utenti[utenti.length-1].desc}
                    self={utenti[utenti.length-1].self}
                    link={utenti[utenti.length-1].link}
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


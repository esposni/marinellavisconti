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
// import DonazioneButton from "views/pages/Donazione"



export default function TrainingAutogenoPage() {  // <--- Cambiare Nome Pagina <NamePage>
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
    return el.name === "Elena Cristalli"  //<-- Inserire Nome Conduttore
  })
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">

        <PageHeader image="orecchio.jpeg" title="INSERIRE TITOLO PAGINA QUI" ifdesc={true}/>   
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="" md="4">

              <img
                      alt="..."
                      style={{width:"20em",height:"40em"}}
                      src={require("assets/img/ritiri/<INSERIRE IMMAGINE RITIRO QUI>")}
                    ></img><br/><br/>
              </Col>
              <Col className="ml-auto mr-auto text-center" md="8">
              
                <h2 className="title" style={{color:"#dbbb4b"}}>INSERIRE TITOLO PAGINA QUI</h2> 
              
               <h5 align="left"> Inserire Testo QUI </h5>
               
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
     
        <FormMessage/>
        <DefaultFooter />
      </div>
    </>
  );
}


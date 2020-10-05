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
// import FormMessage from"components/FormMessage.js";
import utenti from "../../assets/utenti.json"
import Conduttore from "views/pages/Conduttore"
// import DonazioneButton from "views/pages/Donazione"



export default function TrainingAutogenoPage() {
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
              {/* <Col className="" md="4">

              <img
                      alt="..."
                      style={{width:"20em",height:"40em"}}
                      src={require("assets/img/ritiri/sangha.JPG")}
                    ></img><br/><br/>
              </Col> */}
              <Col className="ml-auto mr-auto text-center" md="8">
              
                <h2 className="title" style={{color:"#dbbb4b"}}>Training Autogeno</h2>
              
               <h5 align="left">Il training autogeno è una tecnica di rilassamento diffusa in tutto il mondo. Si compone di una serie di esercizi che permettono alla persona di concentrarsi su diverse zone del corpo, al fine di ottenere uno stato di rilassamento sia a livello psichico che fisico. Gli esercizi, che potremmo considerare come “mentali”, portano a reali modifiche corporee che, a loro volta, influenzano la psiche della persona. Questo perché dobbiamo sempre ricordare che mente e corpo sono correlati e non indipendenti.</h5>
                <h5 align="left">Permette alla persona di recuperare la naturale capacità di rilassamento che la contraddistingue fin dalla nascita e che viene meno a causa dei ritmi frenetici e stressanti che la società, a volte, ci impone. Il training autogeno aiuta la persona ad essere più attenta ai propri pensieri, emozioni e sensazioni attraverso una maggiore consapevolezza di sé.</h5>
                <h5 align="left">In generale il training autogeno è indicato per le persone che:</h5>
                <ul align="left">
                  <li>si trovano a fronteggiare stati di ansia, </li>
                  <li>devono imparare a gestire stati di stress,</li>
                  <li>desiderano superare disturbi psicosomatici come insonnia, emicrania, cefalea, disturbi gastrointestinali, ecc.</li>
                  <li>desiderano ritrovare calma, concentrazione mentale e recuperare le energie.</li>
                </ul>
                <h5 align="left">Inoltre una volta acquisita familiarità con gli esercizi, questi possono essere eseguiti in modo autonomo dalla persona senza la presenza dello specialista.</h5>
                <h5 align="left">E’ necessario un colloquio preliminare per poter iniziare il percorso.</h5>
                      {/* <h5 align="left">Per info e prenotazione: <a href="mailto:info@progettopienessere.com">info@progettopienessere.com</a></h5>
                <DonazioneButton desc={true}  offerta={false}/> */}
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
     
        {/* <FormMessage/> */}
        <DefaultFooter />
      </div>
    </>
  );
}


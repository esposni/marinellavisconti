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

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader image="orecchio.jpeg" title={`"Ad ogni corpo il suo cibo..."`}  ifdesc={true}/>
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
              
                <h2 className="title">{`"Ad ogni corpo il suo cibo..."`} </h2>
                
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
            <Conduttore id={utenti[11].id}
                    img={utenti[11].img}
                    name={utenti[11].name}
                    desc={utenti[11].desc}
                    self={utenti[11].self}
                    link={utenti[11].link}
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


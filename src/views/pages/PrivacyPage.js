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

// import AlertDialogSlide from "components/PopUpButton.js";

export default function PrivacyPage() {
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
        <PageHeader image="orecchio.jpeg" title="" ifdesc={true}/>
        <div className="section section-about-us">
          <Container>
            <Row>
            
              <Col className="ml-auto mr-auto text-center" md="8">
              
                <h2 className="title" style={{color:"#dbbb4b"}}>Privacy and Cookies Policy – Trattamento dei dati personali</h2>
                <h5 align="left">L’Associazione Progetto Pienessere ha aggiornato la propria Privacy and Cookies Policy in funzione della nuova legge europea, la General Data Protection Regulation (GDPR).

I dati saranno utilizzati, dalle persone incaricate dall’Associazione, esclusivamente per lo svolgimento dell’attività istituzionale, per la gestione del rapporto associativo e per l’adempimento degli obblighi di legge. L’indicazione del nome, data di nascita, indirizzo, telefono, indirizzo e mail è necessaria per la gestione del rapporto associativo e per l’adempimento degli obblighi di legge. Il conferimento degli altri dati è facoltativo. I trattamenti dei dati saranno svolti in forma cartacea e mediante computer, con adozione delle misure di sicurezza previste dalla legge. Il trattamento potrà riguardare anche alcuni dei dati personali rientranti nel novero dei “dati sensibili” di cui all’articolo 4, comma 1, lettera d) della legge, vale a dire i dati idonei a rivelare l’origine, razziale ed etnica, le convinzioni religiose, filosofiche o di altro genere, le opinioni politiche, l’adesione a partiti, sindacati, associazioni od organizzazioni a carattere religioso, filosofico, politico e sindacale, nonché i dati personali idonei a rivelare lo stato di salute e la vita sessuale.

I dati non saranno comunicati a terzi né saranno oggetto di diffusione.</h5>
           <h5 align="left">Il Titolare non è responsabile per l’aggiornamento di tutti i link visualizzabili nella presente Informativa sui cookie, pertanto ogni qualvolta un link non sia funzionante e/o aggiornato, gli Utenti riconoscono ed accettano che dovranno sempre far riferimento al documento e/o sezione dei siti internet richiamati da tale link.</h5>
              
              </Col>
            </Row>
          
          </Container>
        </div>

       
        <DefaultFooter />
      </div>
    </>
  );
}


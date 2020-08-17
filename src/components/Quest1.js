import React from "react";
import {
    Button,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
  } from "reactstrap";

export default function Quest1() {
const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
    return (
    
<div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Compila il questionario</h2>
            <p className="description">Desidero offrire la mia disponibilità per il progetto “attivismo contemplativo “ e a tal proposito dichiaro:</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Nome e Cognome"
                    type="text"
                    id="name"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>

                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email personale"
                    type="text"
                    id="email"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>

                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      {/* <i className="now-ui-icons users_circle-08"></i> */}
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Cellulare"
                    type="text"
                    id="cell"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                  {/* ----------------------------------------------- */}
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      {/* <i className="now-ui-icons users_circle-08"></i> */}
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Città di riferimento"
                    type="text"
                    id="indirizzo"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                  {/* ----------------------------------------------- */}

    <div className="textarea-container">
        <Input
          cols="80"
          name="name"
          placeholder="I miei talenti (almeno tre)"
          rows="4"
          type="textarea"
          id="talenti"
        ></Input>
      </div>

      <div className="textarea-container">
        <Input
          cols="80"
          name="name"
          placeholder="Riconosco in me questi limiti"
          rows="4"
          type="textarea"
          id="limiti"
        ></Input>
      </div>

      <div className="textarea-container">
        <Input
          cols="80"
          name="name"
          placeholder="Esperienza di volontariato o in specifici contesti sociali"
          rows="4"
          type="textarea"
          id="esperienza"
        ></Input>
      </div>

      <div className="textarea-container">
        <Input
          cols="80"
          name="name"
          placeholder="Formazione Mindfulness o pratica meditativa o corporea di consapevolezza"
          rows="4"
          type="textarea"
          id="formazione"
        ></Input>
      </div>

      <div className="textarea-container">
        <Input
          cols="80"
          name="name"
          placeholder="La mia professione"
          rows="4"
          type="textarea"
          id="aree"
        ></Input>
      </div>

      <div className="textarea-container">
        <Input
          cols="80"
          name="name"
          placeholder="Tipo di contributo che posso apportare"
          rows="4"
          type="textarea"
          id="tipo"
        ></Input>
      </div>


      <div className="textarea-container">
        <Input
          cols="80"
          name="name"
          placeholder="Tempo disponibile"
          rows="4"
          type="textarea"
          id="disp"
        ></Input>
      </div>

      <div className="textarea-container">
        <Input
          cols="80"
          name="name"
          placeholder="Ulteriori informazioni che ritengo utili"
          rows="4"
          type="textarea"
          id="info"
        ></Input>
      </div>


                <label>Ho letto la normativa sulla privacy EX ART. 13 D. LGS. 196/03 e autorizzo al trattamento dei miei dati personali </label>
                <InputGroup>
                  <Input
                    placeholder=""
                    type="checkbox"
                    id="authorize"
                  ></Input>
                </InputGroup>
                <br/>
                <label>Mi autorizzi ad inviarti newsletters in futuro e a tenerti aggiornato sulle mie iniziative?</label>
                <br/>
                <InputGroup>
                  <Input
                    placeholder=""
                    type="checkbox"
                    id="newsletter"
                  ></Input>
                </InputGroup>
                <br/>
                
                {/* <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Scrivi il messaggio..."
                    rows="4"
                    type="textarea"
                    id="message"
                  ></Input>
                </div> */}
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    // href="#pablo"
                    onClick={e => {
                      let form=document.getElementById("form1");
                      let textarea=form.elements["body"];
                      let message=document.getElementById("name").value;
                      message+="  "+document.getElementById("email").value;
                      message+="\nCellulare: "+ document.getElementById("cell").value;
                      message+="\nIndirizzo: "+ document.getElementById("indirizzo").value;
                      message+="\nI miei talenti (almeno tre): "+ document.getElementById("talenti").value;
                      message+="\nRiconosco in me questi limiti: "+ document.getElementById("limiti").value;
                      message+="\nEsperienza di volontariato o in specifici contesti sociali: "+ document.getElementById("esperienza").value;
                      message+="\nFormazione Mindfulness o pratica meditativa o corporea di consapevolezza: "+ document.getElementById("formazione").value;
                      message+="\nAree in cui desidero mettermi a servizio: "+ document.getElementById("aree").value;
                      message+="\nTipo di contributo che posso apportare: "+ document.getElementById("tipo").value;
                      message+="\nTempo disponibile: "+ document.getElementById("disp").value;
                      message+="\nUlteriori informazioni che ritengo utili: "+ document.getElementById("info").value;
                      message+="\nMi autorizzi ad inviarti newsletters in futuro e a tenerti aggiornato sulle mie iniziative?\n";
                      if(document.getElementById("newsletter").checked){
                        message+="SI\n";
                      }else{
                        message+="NO\n";
                      }
                      textarea.value=message;
                      // console.log(textarea.value);
                      form.submit();
                    }}
                    size="lg"
                  >
                    Invia
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
          <form action="mailto:marinellavisconti@outlook.it" method="GET" id="form1">
            <textarea hidden name="body"></textarea>
          </form>
        </div>
);}
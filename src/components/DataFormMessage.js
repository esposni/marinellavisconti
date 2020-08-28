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

export default function DataFormMessage() {
const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
    return (
    
<div className="section section-contact-us text-center">
          <Container>
            <h2 className="title" style={{color:"#dbbb4b"}}>Compila il questionario</h2>
            {/* <p className="description">Your project is very important to us.</p> */}
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
                    placeholder="Nome Cognome..."
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
                    placeholder="Email..."
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
                    placeholder="Indirizzo, Città ,Stato / Provincia / Regione..."
                    type="text"
                    id="indirizzo"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
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
                    placeholder="Codice postale..."
                    type="text"
                    id="cap"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
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
                    placeholder="Paese..."
                    type="text"
                    id="paese"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
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
                    placeholder="Codice fiscale..."
                    type="text"
                    id="cod_fiscale"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
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
                    placeholder="Numero di telefono..."
                    type="text"
                    id="telefono"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
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
                    placeholder="Professione..."
                    type="text"
                    id="professione"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                  <label>Hai già esperienza meditativa? Se si, in quale tradizione?</label>
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
                    placeholder=""
                    type="text"
                    id="tradizione"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
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
                      message+="\n Indirizzo: "+ document.getElementById("indirizzo").value;
                      message+="\n CAP: "+ document.getElementById("cap").value;
                      message+="\n Paese: "+ document.getElementById("paese").value;
                      message+="\n Codice Fiscale: "+ document.getElementById("cod_fiscale").value;
                      message+="\n CAP: "+ document.getElementById("cap").value;
                      message+="\n Numero di telefono: "+ document.getElementById("telefono").value;
                      message+="\n Professione: "+ document.getElementById("professione").value;
                      message+="\nHai già esperienza meditativa? Se si, in quale tradizione? \n";
                      message+= document.getElementById("professione").value;
                      message+="\n Mi autorizzi ad inviarti newsletters in futuro e a tenerti aggiornato sulle mie iniziative?\n";
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
          <form action="mailto:info@progettopienessere.com" method="GET" id="form1">
            <textarea hidden name="body"></textarea>
          </form>
        </div>
);}
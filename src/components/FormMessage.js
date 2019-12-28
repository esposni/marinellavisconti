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

export default function FormazioneAvanzataPage() {
const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
    return (
    
<div className="section section-contact-us text-center">
<Container>
  <h2 className="title">Scrivimi</h2>
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
      <div className="textarea-container">
        <Input
          cols="80"
          name="name"
          placeholder="Scrivi il messaggio..."
          rows="4"
          type="textarea"
          id="message"
        ></Input>
      </div>
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
            message+="\n Messaggio: \n";
            message+=document.getElementById("message").value;
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
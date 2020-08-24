import React from "react";

// reactstrap components
import {
//    Button,
  Container,
  Row,
  Col
} from "reactstrap";
// import { Link } from "react-router-dom";
// core components

// import AlertDialogSlide from "components/PopUpButton.js";

export default function Ricetta(props) {

  return (
    <>
    <Container>
        <Row>
            <Col>
    <img
        alt="..."
        style={{width:"20em",height:"20em"}}
        src={require("assets/img/ricette/ric2.jpg")}
    ></img><br/><br/>

<h5 align="left"><strong>{props.title}</strong></h5>
  <h5 align="left">{props.desc}</h5>
  <h5 align="left"><strong>Ricetta</strong></h5>
     {props.ricetta.map((t)=>{
        return <h5 align="center">{t}</h5>
    })}
     <h5 align="left"><strong>Preparazione</strong></h5>
     <h5 align="left">{props.preparazione}</h5>
     <img
        alt="..."
        style={{width:"20em",height:"20em"}}
        src={require("assets/img/ricette/"+props.img)}
    ></img><br/><br/>
            </Col>
        </Row>
    </Container>
    </>);
    
}
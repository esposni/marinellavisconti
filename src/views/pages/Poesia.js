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

export default function Poesia(props) {

  return (
    <>
    <Container>
        <Row>
            <Col>
           
  <p>{props.intro}</p>
  
  <h5 align="left">{props.desc}</h5>
  <img
        alt="..."
        style={{width:"20em",height:"20em"}}
        src={require("assets/img/poesia/magritte.png")}
    ></img><br/><br/>
     {props.poesia.map((t)=>{
        return <h5 align="center">{t}</h5>
    })}
            </Col>
        </Row>
    </Container>
    </>);
    
}
import React from "react";

// reactstrap components
import {
   Button,
  Container,
  Row,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";
// core components

export default function Evento(props) {

  return (
    <>
     <div className="">
          <Container>
            <Row>
              <Col className="" md="4">
 
                <img
                      alt="..."
                      className="info-event"
                      src={require("assets/img/ritiri/"+props.image)}
                    ></img><br/><br/>
                
              </Col>

              <Col>
              
              <div className="title" align="center" style={{color:"#dbbb4b",fontSize:"1.5em"}}><strong>{(props.all)? (props.type==="")? props.title : props.type+": "+props.title: props.title }</strong></div>
                {(props.conduttori!=="")?<h5 align="center"><strong>{props.conduttori}</strong><br/><br/></h5>:"" } 
                
                <div align="center"><strong>{props.date}</strong><br/></div>
              {
                (props.self_link==="")?
                <Button
                      block
                      className="btn-round"
                      color="info"
                      to={"/evento-"+props.num} tag={Link}
                      size="sm"
                      target="_blank"
                    >Per maggiori informazioni
                </Button> :
                <Button
                      block
                      className="btn-round"
                      color="info"
                      to={props.self_link} tag={Link}
                      size="sm"
                      target="_blank"
                    >Per maggiori informazioni
                </Button>
              }
               
              </Col>
            </Row>
          
          </Container>
          <hr></hr>
        </div>

    </>
  );
}


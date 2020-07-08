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
     <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="">
 
                <img
                      alt="..."
                      className="info-event"
                      src={require("assets/img/ritiri/"+props.image)}
                    ></img><br/><br/>
                
              </Col>

              <Col>
              
              <h2 className="title">{(props.all)? props.type+": "+props.title: props.title }</h2>
                {(props.conduttori!=="")?<h5 align="center"><strong>{props.conduttori}</strong><br/><br/></h5>:"" } 
                
                <h5 align="center"><strong>{props.date}</strong><br/></h5>

                <Button
                      block
                      className="btn-round"
                      color="info"
                      to={"/evento-"+props.num} tag={Link}
                      size="lg"
                      target="_blank"
                    >Per maggiori informazioni
                </Button>  
              </Col>
            </Row>
          
          </Container>
          <hr></hr>
        </div>

    </>
  );
}


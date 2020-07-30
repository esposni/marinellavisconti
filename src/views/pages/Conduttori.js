import React from "react";

// reactstrap components
import {
   Button,
  Container,
  Row,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";
import utenti from "../../assets/utenti.json"
// core components

export default function Conduttori(props) {

  return (
    <>
     <div className="section section-team text-center">
     {/* <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8"> */}
          <Container>
            {/* <h2 className="title">CONDUTTORI</h2> */}
            <div className="team">
              <Row >
                {utenti.map(el=>{
                  return  <Col key={el.id} md="4" >
                      <div className="team-player">
                        <img
                          alt="..."
                          style={{height:"100px"}}
                          className="rounded-circle img-fluid img-raised"
                          src={require("assets/img/"+el.img)}
                        ></img>
                        <h4 className="title">{el.name} </h4>
                        <p className="category text-info" style={{height:"65px"}}>{el.desc} </p>    
                      </div>
                      {(el.self)? <Button
                        block
                        className="btn-round"
                        color="info"
                        href={el.link} 
                        target="_blank"
                        size="sm"
                      >Pagina personale
                        </Button> :<Button
                        block
                        className="btn-round"
                        color="info"
                        to={el.link} tag={Link}
                        target="_blank"
                        size="sm"
                      >Pagina personale
                        </Button>}
                     
                    </Col>
                })}
                     
              </Row>
            </div>
        </Container>
        {/* </Col>
        </Row>
        </Container> */}
    </div>
    </>
  );
}


import React from "react";

// reactstrap components
import {
  Container,
  Row,
} from "reactstrap";
import utenti from "../../assets/utenti.json"
import Conduttore from "views/pages/Conduttore"
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
                 return (props.school )? (el.school)? 
                    <Conduttore id={el.id}
                    key={el.id}
                    img={el.img}
                    name={el.name}
                    desc={el.desc}
                    self={el.self}
                    link={el.link}
                    /> :"" :
                    <Conduttore id={el.id}
                    key={el.id}
                    img={el.img}
                    name={el.name}
                    desc={el.desc}
                    self={el.self}
                    link={el.link}
                    /> 
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


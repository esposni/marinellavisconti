import React from "react";

// reactstrap components
import {
   Button,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";
// core components

export default function Conduttore(props) {

  return (
    <>
      <Col key={props.id} className="ml-auto mr-auto text-center"  md="4" >
        <div className="team-player">
        <img
            alt="..."
            style={{height:"100px"}}
            className="rounded-circle img-fluid img-raised"
            src={require("assets/img/"+props.img)}
        ></img>
        {(props.name!=="")?<h4 className="title">{props.name} </h4>:""}
        
        <p className="category text-info" style={{height:"65px",marginTop:"30px"}}>{props.desc} </p>    
        </div>
        {(props.self)? <Button
        block
        className="btn-round"
        color="info"
        href={props.link} 
        target="_blank"
        size="sm"
        >Pagina personale
        </Button> :<Button
        block
        className="btn-round"
        color="info"
        to={props.link} tag={Link}
        target="_blank"
        style={{marginTop:"9vh"}}
        size="sm"
        >Pagina personale
        </Button>}
        
    </Col>
    </>
  );
}
import React from "react";
import data from "assets/data_events.json"
// reactstrap components
import {
  Button,
  // NavItem,
  // NavLink,
  // Nav,
  // TabContent,
  // TabPane,
  Container,
  // Row,
  // Col,
  // UncontrolledTooltip
} from "reactstrap";

import { Link } from "react-router-dom";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import FormMessage from"components/FormMessage.js";

function ProfilePage(props) {
  // const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  let eventi = []
  data.forEach(element => {
    // console.log(element)
    element.users.forEach( users =>{
      // console.log(users)
      if(users.name===props.name){
        eventi.push({"title":element.title,"date":element.date,"id":element.id})
      }
    })
  });
  // console.log(eventi)
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <ProfilePageHeader 
          image={props.img} 
          name={props.name}
          desc={props.desc}/>
        <div className="section">
          <Container>
            <h3 className="title">Chi sono</h3>
            {props.text.map((t)=>{
                      return <h5 align="left">{t}</h5>
                    })}
          
          <h3 className="title">Eventi</h3>
            {
              eventi.map(el=>{
                return <ul key={el.id}>
                  <li>
                <a style={{color: "black"}}href={"/evento-"+el.id} target="_blank" rel="noopener noreferrer" ><h5 align="left"><strong>{el.title}</strong></h5></a>
                <h5 align="left">{el.date}</h5>
               </li>
                </ul>
              })
            }
            
          {(props.school)? 
        <Button
        block
        className="btn-round"
        color="info"
        to="/formazione" tag={Link}
        target="_blank"
        size="lg"
        >Braveheartfulness School
        </Button> :""}
          
          </Container>
          {/* eventi */}
          
          <FormMessage/>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProfilePage;

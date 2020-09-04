/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        {/* <nav>
          <ul>
            <li>
              <a
                href=""
                target="_blank"
              >
                Creative Tim
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
              >
                About Us
              </a>
            </li>

          </ul>
        </nav> */}
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()} {"  "}
          Progetto Pien<i style={{color:"#dbbb4b",fontSize:"1.5em"}}className="fas fa-heart"></i>Essere
        
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;

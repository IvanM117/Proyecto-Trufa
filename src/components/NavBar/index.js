import {Component} from 'react';
import { Nav, Container, Row, Col } from 'reactstrap';
import trufalogo from '../../assets/trufalogo.png';
import "./NavBar.css"

const Navbar = (props) => {
    return (
      <div>
        <Nav className="Navbar">
          <div>
             <a href="http://localhost:3000/"> <img width="350" height="100" src={ trufalogo }/> </a> 
          </div>
          <div>
              <a href="http://localhost:3000/AboutUs"> Acerca de nosotros </a>
          </div>
          <div>
              <a href="http://localhost:3000/MakeBox"> Arma tu caja </a>
          </div>
        </Nav>
      </div>
    );
  }
  
  export default Navbar;


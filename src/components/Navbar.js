import React, { Component } from "react";
import logo from "../images/logo.svg";
import { FaSlidersH } from "react-icons/fa";
import { Link } from "react-router-dom";
import './navbar.css'

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  HandleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/login">
              {" "}
              <img src={logo} alt="logo" />{" "}
            </Link>

            <button type="button" className="nav-btn" onClick={this.HandleToggle}>
            <FaSlidersH className="nav-icon"/>
            </button>
          </div>
          <ul className={this.state.isOpen?"nav-links show-nav": "nav-links" }>
          <li>
          <Link to="/">HOME</Link>
           
          </li>
          <li>
          <Link to="/Rooms">ROOMS</Link>
           
          </li>
          </ul>
        </div>
      </nav>
    );
  }
}

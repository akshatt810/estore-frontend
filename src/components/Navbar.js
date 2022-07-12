import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
export default class Navbar extends Component {
  handler = () => {
    axios.get("https://akshatt810-estore.herokuapp.com/api/products").then(
      (res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err)
      })
  }
  render() {
    return (
      <Nav className="navbar">
        <nav>

          <div className="nav-item first" onClick={this.handler}>
            <Link to={process.env.PUBLIC_URL + "/"}>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="store-alt" className="brand svg-inline--fa fa-store-alt fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M320 384H128V224H64v256c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V224h-64v160zm314.6-241.8l-85.3-128c-6-8.9-16-14.2-26.7-14.2H117.4c-10.7 0-20.7 5.3-26.6 14.2l-85.3 128c-14.2 21.3 1 49.8 26.6 49.8H608c25.5 0 40.7-28.5 26.6-49.8zM512 496c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V224h-64v272z"></path></svg>
            </Link>
          </div>
          <div className="nav-item select">
            <Link to={process.env.PUBLIC_URL + "/"} className="nav-link">
              &nbsp;home&nbsp;
            </Link>
          </div>
          <div className="nav-item select">
            <Link to={process.env.PUBLIC_URL + "/laptops"} className="nav-link">
              &nbsp;laptops&nbsp;
            </Link>
          </div>
          <div className="nav-item select">
            <Link to={process.env.PUBLIC_URL + "/smartphones"} className="nav-link">
              &nbsp;mobiles&nbsp;
            </Link>
          </div>
          <div className="nav-item select">
            <Link to={process.env.PUBLIC_URL + "/screens"} className="nav-link">
              &nbsp;screens&nbsp;
            </Link>
          </div>
          <div className="nav-item select">
            <Link to={process.env.PUBLIC_URL + "/tablets"} className="nav-link">
              &nbsp;tablets&nbsp;
            </Link>
          </div>

          <div className="nav-item select push-right ">
            <Link to={process.env.PUBLIC_URL + "/cart"} className="nav-link">
              <span className="icon">
                <i className="fas fa-cart-plus " />
              </span>
              &nbsp; cart
            </Link>
          </div>
          <div className="nav-item select last" >
            <Link to={process.env.PUBLIC_URL + "/login"} className="nav-link">
              &nbsp; Login
            </Link>
          </div>
        </nav>
      </Nav>
    );
  }
}

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--mainGrey);
  font-family: 'Bebas Neue', cursive !important;
  
  nav {
    width: 100%;
    max-width: 82rem;
    margin-right: auto;
    margin-left: auto;
    padding: 0;
    display: flex;
    align-items: center;
  }
  
  .nav-item{
    display: flex;
    align-items: center;
  }
  .select: hover{
    background: var(--mainWhite);
    transition: all ease-in-out 200ms;
  }
  
  .nav-link {
    color: var(--mainWhite);
    font-size:2.5rem;
    text-transform:uppercase;
    text-decoration: none;
    padding: 0 0.5rem;
  }
  .nav-link: hover{
    color: var(--mainGrey);
    transition: all ease-in-out 200ms;
  }
  .icon {
    font-size: 1.8rem;
  }
  .first{
    padding-left: 0.75rem;
  }
  .last{
    padding-right: 0.75rem;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;
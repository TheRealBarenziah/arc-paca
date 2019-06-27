import React, { Component } from "react";
import './Home.scss';
import NavBar from "./Navbar/NavBar";
import CarouselHome from "./Carousel/Carousel";

export default class Home extends Component {
  render() {
    return (
      <div className='containerHome'>
        <NavBar />
        <CarouselHome />
        <p>Hi! You're in Home Component!</p>
      </div>
    );
  }
}

import React, { Component } from "react";
import './HomePage.scss';
import CarouselHome from "./Carousel/Carousel";

export default class Home extends Component {
  render() {
    return (
      <div className='containerHome'>
        <CarouselHome />
        <p>Hi! You're in Home Component!</p>
      </div>
    );
  }
}

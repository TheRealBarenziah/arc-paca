import React, { Component } from "react";
import DashboardComponent from "../DashboardComponents/Dashboard"
import "./DashboardPage.scss";

export default class Dashboard extends Component {
  render() {
    return (
      <div className='containerDashboard'>
        <p>Hi! You're in Dashboard Component!</p>
        <DashboardComponent />
      </div>
    );
  }
}

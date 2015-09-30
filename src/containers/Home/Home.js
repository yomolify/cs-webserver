import React, { Component } from 'react';
import { Link } from 'react-router';
import { CounterButton, GithubButton } from 'components';
import AppointmentViewer from '../../components/AppointmentViewer/AppointmentViewer';
import PractitionerAvatar from '../../components/AppointmentViewer/PractitionerComponents/PractitionerAvatar';
import SearchBar from '../../components/SearchBar/SearchBar';
import Sticky from "react-sticky";
import SimpleMapPage from '../../components/Map/SimpleMapPage'



export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const logoImage = require('./logo.png');
    return (
      <div className={styles.home}>
          <div style = {{
            position: "absolute",
            right:"0px",
            top: "60px",
            width: "100%",
            height: "40px",
            zIndex: "2",
            background:"white"}}>
              <SearchBar/>
          </div>
        <div style={{backgroundColor:"#E8E8E8", width:"40%", top:"50px", position:"relative", float:"left"}}>
          <AppointmentViewer />
        </div>
        <div id="map" style={{width:"60%", position:"relative", height:"1000px", float:"left"}}>
          <SimpleMapPage/>
        </div>
      </div>
    );
  }
}


